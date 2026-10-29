// Anne's Base icon, in the Anne's Office family (same tile, same white quill, app-specific white card).
// Matches suite/icons/gen.mjs in Anne's Grid; adds the 'base' card: a database cylinder beside a small table.
// Writes icon.svg (full tile), icon-foreground.svg (Android adaptive foreground) and icon-background.txt.
import { writeFileSync } from 'node:fs';
const OUT = new URL('.', import.meta.url).pathname;
const a = { color: '#A3324F', dark: '#731E36', light: '#C24A68' };
const c = a.color;
const card = `<rect x="84" y="150" width="288" height="216" rx="24" fill="#fff"/>
  <path d="M112 196 v112 a56 18 0 0 0 112 0 v-112" fill="${c}" opacity=".9"/>
  <ellipse cx="168" cy="196" rx="56" ry="18" fill="${a.light}"/>
  <path d="M112 234 a56 18 0 0 0 112 0 M112 272 a56 18 0 0 0 112 0" fill="none" stroke="#fff" stroke-width="6"/>
  <rect x="242" y="186" width="106" height="132" rx="8" fill="${c}" opacity=".14"/>
  <rect x="242" y="186" width="106" height="28" rx="8" fill="${c}" opacity=".85"/>
  <path d="M242 248 H348 M242 282 H348 M290 214 V318" stroke="${c}" stroke-width="5" opacity=".6"/>`;
const quill = `<g>
    <path d="M436 70 C 376 84 316 140 290 214 C 274 260 268 300 270 338 C 300 300 330 280 360 262 C 330 262 312 262 300 258 C 336 240 368 218 392 188 C 368 190 350 190 336 186 C 378 160 410 120 436 70 Z" fill="#fff" stroke="${a.dark}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M430 78 C 360 150 300 250 262 380" fill="none" stroke="${a.dark}" stroke-width="9" stroke-linecap="round"/>
    <path d="M262 380 L252 420 L276 392 Z" fill="${a.dark}"/>
  </g>`;
const tile = `<defs><linearGradient id="gbase" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a.light}"/><stop offset="1" stop-color="${a.dark}"/></linearGradient></defs>
  <rect width="512" height="512" rx="116" fill="url(#gbase)"/>`;
const svg = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">${inner}</svg>\n`;
writeFileSync(OUT + 'icon.svg', svg(tile + card + quill));
writeFileSync(OUT + 'icon-foreground.svg', svg(`<g transform="translate(256 256) scale(.6) translate(-256 -256)">${card}${quill}</g>`));
writeFileSync(OUT + 'icon-background.txt', a.color + '\n');
console.log('ok');
