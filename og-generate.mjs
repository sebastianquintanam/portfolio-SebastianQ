/**
 * Dev tool — generates public/og-image.png at 1200×630.
 * Run: node og-generate.mjs
 * Uses the Chrome installation at /Applications/Google Chrome.app.
 */

import { execSync } from 'child_process';
import { writeFileSync, unlinkSync, renameSync, existsSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const html = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  width: 1200px;
  height: 630px;
  background: #0a0a0a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Helvetica, Arial, sans-serif;
  overflow: hidden;
  position: relative;
  -webkit-font-smoothing: antialiased;
}

.dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(103, 232, 249, 0.03) 1px, transparent 1px);
  background-size: 28px 28px;
}

.spotlight {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% -5%, rgba(255, 255, 255, 0.06) 0%, transparent 70%);
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 56px 76px 52px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ---- Top row ---- */
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.monogram {
  position: relative;
  font-size: 22px;
  font-weight: 700;
  color: #efefef;
  letter-spacing: -0.3px;
  line-height: 1;
}

.monogram::after {
  content: '';
  position: absolute;
  bottom: 0px;
  right: -9px;
  width: 5px;
  height: 5px;
  background: #67e8f9;
  border-radius: 50%;
  opacity: 0.82;
}

.location {
  font-size: 14px;
  font-weight: 400;
  color: #4a4a4a;
  letter-spacing: 0.05em;
}

/* ---- Main content ---- */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  font-size: 74px;
  font-weight: 800;
  color: #ededed;
  letter-spacing: -2.5px;
  line-height: 1;
  margin-bottom: 20px;
}

.role {
  font-size: 30px;
  font-weight: 400;
  color: #6b6b6b;
  letter-spacing: -0.3px;
  margin-bottom: 44px;
}

.stack {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.stack-item {
  font-size: 18px;
  font-weight: 400;
  color: #4a4a4a;
  white-space: nowrap;
}

.stack-sep {
  font-size: 14px;
  color: #67e8f9;
  opacity: 0.4;
  margin: 0 14px;
}

/* ---- Bottom row ---- */
.url {
  font-size: 14px;
  font-weight: 400;
  color: #383838;
  letter-spacing: 0.04em;
}
</style>
</head>
<body>
  <div class="dot-grid"></div>
  <div class="spotlight"></div>
  <div class="content">

    <div class="top-row">
      <div class="monogram">S</div>
      <span class="location">Bogotá, Colombia</span>
    </div>

    <div class="main">
      <div class="name">Sebastián Quintana</div>
      <div class="role">Backend-focused Software Engineer</div>
      <div class="stack">
        <span class="stack-item">Java</span>
        <span class="stack-sep">·</span>
        <span class="stack-item">Spring Boot</span>
        <span class="stack-sep">·</span>
        <span class="stack-item">Python</span>
        <span class="stack-sep">·</span>
        <span class="stack-item">Django</span>
        <span class="stack-sep">·</span>
        <span class="stack-item">Cloud</span>
        <span class="stack-sep">·</span>
        <span class="stack-item">APIs</span>
      </div>
    </div>

    <div class="url">sebastianquintanam.vercel.app</div>

  </div>
</body>
</html>`;

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const publicDir  = join(__dirname, 'public');
const tmpHtml    = resolve(join(__dirname, 'og-tmp.html'));
const finalPng   = join(publicDir, 'og-image.png');
const tmpPng     = join(publicDir, 'screenshot.png');

writeFileSync(tmpHtml, html, 'utf-8');

try {
  execSync(
    `"${chromePath}" \
      --headless=old \
      --disable-gpu \
      --no-sandbox \
      --screenshot \
      --window-size=1200,630 \
      --hide-scrollbars \
      --force-device-scale-factor=1 \
      "file://${tmpHtml}"`,
    { timeout: 20000, stdio: 'pipe', cwd: publicDir }
  );

  if (existsSync(tmpPng)) {
    renameSync(tmpPng, finalPng);
  }

  if (existsSync(finalPng)) {
    console.log('✓ public/og-image.png generated (1200×630)');
  } else {
    console.error('✗ Screenshot not found — Chrome may have written it elsewhere.');
    process.exit(1);
  }
} finally {
  if (existsSync(tmpHtml)) unlinkSync(tmpHtml);
}
