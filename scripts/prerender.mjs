// Post-build prerender: serve dist/, snapshot the rendered SPA, write it back.
// Fails the build loudly if expected content is missing - never deploy a shell.
import { createServer } from "node:http";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, extname, resolve } from "node:path";
import { chromium } from "playwright";

const DIST = resolve(process.cwd(), "dist");
const MARKER = "residual land value method"; // stable string from FAQ.tsx
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".webp": "image/webp", ".txt": "text/plain", ".xml": "application/xml" };

const server = createServer((req, res) => {
  let p = join(DIST, req.url.split("?")[0]);
  if (!existsSync(p) || !extname(p)) p = join(DIST, "index.html");
  res.setHeader("Content-Type", MIME[extname(p)] || "application/octet-stream");
  res.end(readFileSync(p));
});

await new Promise(r => server.listen(0, r));
const port = server.address().port;

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.route(/googletagmanager\.com|doubleclick\.net|google-analytics\.com|googleadservices\.com|googlesyndication\.com/, r => r.abort());
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("main", { timeout: 15000 });
  const html = await page.content();
  if (!html.toLowerCase().includes(MARKER)) {
    console.error(`PRERENDER FAILED: marker "${MARKER}" not found in rendered HTML`);
    process.exit(1);
  }
  writeFileSync(join(DIST, "index.html"), "<!DOCTYPE html>\n" + html.replace(/^<!DOCTYPE html>\s*/i, ""));
  console.log(`Prerendered index.html (${(html.length / 1024).toFixed(0)} KB, marker OK)`);
} finally {
  await browser.close();
  server.close();
}
