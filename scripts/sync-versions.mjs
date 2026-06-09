// =====================================================================
//  Generate versions.json from the ASIACRAFT-DEV asc-* mod repos.
//  For each repo it reads gradle.properties (mod_version) and
//  fabric.mod.json (display name). Output feeds the "live versions"
//  list on the Commands page.
//
//  Auth: set GH_TOKEN (a token with read access to the org repos —
//  private ones 404 without it). Run locally with:
//      GH_TOKEN=$(gh auth token) node scripts/sync-versions.mjs
//  In CI it comes from the MODS_READ_TOKEN secret.
//
//  Safety: if auth fails / 0 mods are found, it does NOT overwrite the
//  existing versions.json — the committed file stays as the fallback.
// =====================================================================
import { writeFileSync, existsSync } from 'node:fs';

const ORG = 'ASIACRAFT-DEV';
const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';

async function api(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'asc-website-version-sync',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
  });
  if (!res.ok) {
    const err = new Error(`GET ${path} → ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

// fetch a text file from a repo, or null if it doesn't exist
async function getFile(repo, path) {
  try {
    const r = await api(`/repos/${ORG}/${repo}/contents/${encodeURI(path)}`);
    return Buffer.from(r.content, 'base64').toString('utf8');
  } catch (e) {
    if (e.status === 404) return null;
    throw e;
  }
}

async function listAscRepos() {
  const names = [];
  for (let page = 1; page <= 6; page++) {
    const batch = await api(`/orgs/${ORG}/repos?per_page=100&page=${page}&type=all`);
    names.push(...batch.map((r) => r.name));
    if (batch.length < 100) break;
  }
  return names.filter((n) => n.startsWith('asc-')).sort();
}

const parseVersion = (txt) => {
  const m = txt && txt.match(/^\s*mod_version\s*=\s*(.+?)\s*$/m);
  return m ? m[1].trim() : null;
};
const parseName = (txt) => {
  try {
    return JSON.parse(txt)?.name || null;
  } catch {
    return null;
  }
};
const prettify = (repo) =>
  repo.replace(/^asc-/, '').replace(/(^|[-_\s])(\S)/g, (_, sep, ch) => (sep ? ' ' : '') + ch.toUpperCase()).trim();

async function main() {
  if (!TOKEN) console.warn('⚠  No GH_TOKEN set — private repos will be skipped and you may hit the 60/hr rate limit.');

  const repos = await listAscRepos();
  const mods = [];
  for (const repo of repos) {
    const version = parseVersion(await getFile(repo, 'gradle.properties'));
    if (!version) continue; // not a buildable Fabric mod (e.g. resource pack / datapack)
    const name = parseName(await getFile(repo, 'src/main/resources/fabric.mod.json')) || prettify(repo);
    mods.push({ repo, name, version });
  }
  mods.sort((a, b) => a.name.localeCompare(b.name));

  if (mods.length === 0) {
    console.error('No mods resolved (auth failure or rate limit?). Keeping existing versions.json.');
    process.exit(existsSync('versions.json') ? 0 : 1);
  }

  const out = { generatedAt: new Date().toISOString(), count: mods.length, mods };
  writeFileSync('versions.json', JSON.stringify(out, null, 2) + '\n');
  console.log(`Wrote versions.json with ${mods.length} mods.`);
}

main().catch((e) => {
  console.error(e.message || e);
  // never destroy a good committed versions.json on a transient failure
  process.exit(existsSync('versions.json') ? 0 : 1);
});
