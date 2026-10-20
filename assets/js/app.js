/* =========================================================
   Casa Pokemon Rack · katalog HP
   Semua data toko ada di bagian atas file ini.
   ========================================================= */

/* ---------- DATA TOKO (ubah di sini) ---------- */
const TOKO = {
  nama: 'Casa Pokemon Rack',
  tagline: 'TCG Rack',               // tampil di bawah logo pembuka, header, dan booster pack
  wa: '6282110365402',               // nomor WhatsApp penjual, format 62xxxxxxxxxx
  shopee: 'https://shopee.co.id/',   // ganti dengan link toko Shopee
  tiktok: 'https://www.tiktok.com/', // ganti dengan link TikTok Shop / akun
  instagram: 'https://www.instagram.com/'
};

/* Model rak dasar. Harga dalam rupiah (CONTOH). */
const MODELS = {
  tangga8: { name: 'Stand Tangga 8', rows: 4, cols: 2, price: 45000, kind: 'tangga', info: '2 kolom × 4 tingkat' },
  grid9:   { name: 'Rak Grid 9',     rows: 3, cols: 3, price: 59000, kind: 'grid',   info: '3 × 3 slot miring' }
};

/* Produk di rak putar. img ada di assets/img. */
const PRODUCTS = [
  { id: 'tangga8', model: 'tangga8', name: 'Stand Tangga 8', sub: '2 kolom × 4 tingkat, bisa ditumpuk', img: 'stand-tangga-hitam.webp', fil: 'hitam', led: 'off', price: 45000, tag: 'Terlaris',
    specs: ['8 toploader 3×4"', 'PLA · layer 0,2 mm', '± 7 jam cetak', '± 18 × 13 × 24 cm'] },
  { id: 'grid9', model: 'grid9', name: 'Rak Grid 9', sub: '3 × 3 slot, kartu bersandar miring', img: 'rak-grid-abu.webp', fil: 'abu', led: 'off', price: 59000, tag: 'Muat 9',
    specs: ['9 toploader s.d. 3 mm', 'PLA ± 483 g', '± 8 jam cetak', '± 27 × 9 × 30 cm'] },
  { id: 'tangga8-led', model: 'tangga8', name: 'Stand Tangga 8 Glow', sub: 'Dengan LED putih hangat di tiap tingkat', img: 'stand-tangga-meja.webp', fil: 'hitam', led: 'hangat', price: 65000, tag: 'LED',
    specs: ['8 toploader 3×4"', 'LED USB 5V', 'Kabel 1 m', '± 18 × 13 × 24 cm'] },
  { id: 'grid9-lumi', model: 'grid9', name: 'Rak Grid 9 Edisi Lumi', sub: 'Bonus 1 kartu art Lumi', img: 'rak-grid-lumi.webp', fil: 'abu', led: 'off', price: 69000, tag: 'Edisi terbatas',
    specs: ['9 toploader s.d. 3 mm', 'Bonus kartu Lumi', 'PLA ± 483 g', '± 27 × 9 × 30 cm'] }
];

/* Filamen. add = tambahan harga. */
const FILAMENTS = [
  { id: 'hitam',    name: 'Hitam doff',       hex: '#1d1d22', add: 0 },
  { id: 'abu',      name: 'Abu batu',         hex: '#676b75', add: 0 },
  { id: 'putih',    name: 'Putih susu',       hex: '#e6e3dc', add: 0 },
  { id: 'malam',    name: 'Biru malam',       hex: '#1f3a6b', add: 0 },
  { id: 'ruby',     name: 'Merah ruby',       hex: '#a91f2c', add: 0 },
  { id: 'toska',    name: 'Toska Lumi',       hex: '#2aa89c', add: 0 },
  { id: 'galaxy',   name: 'Ungu galaxy',      hex: '#3b2160', add: 5000, finish: 'galaxy' },
  { id: 'emas',     name: 'Silk emas',        hex: '#c99a35', add: 5000, finish: 'silk' },
  { id: 'tembaga',  name: 'Silk tembaga',     hex: '#b0633a', add: 5000, finish: 'silk' },
  { id: 'glow',     name: 'Glow in the dark', hex: '#cfe6c3', add: 8000, finish: 'glow' },
  { id: 'bening',   name: 'Bening (PETG)',    hex: '#c8e1ff', add: 5000, finish: 'clear' },
  { id: 'request',  name: 'Warna request',    hex: '#ff8fc8', add: 0, finish: 'req' }
];

const LEDS = [
  { id: 'off',     name: 'Tanpa LED',    c: '',        add: 0 },
  { id: 'hangat',  name: 'Putih hangat', c: '#ffc477', add: 20000 },
  { id: 'dingin',  name: 'Putih dingin', c: '#cfe8ff', add: 20000 },
  { id: 'rgb',     name: 'RGB + remote', c: '#3fd1c2', add: 30000 },
  { id: 'pelangi', name: 'Pelangi',      c: '#ff5d8f', add: 35000 }
];
const ADDON = { lamp: 15000, plate: 5000 };

/* Voucher dari booster harian (CONTOH, sesuaikan sendiri). */
const VOUCHER = {
  C:  { code: 'LUMI3',         label: 'Diskon 3%' },
  R:  { code: 'LUMI5',         label: 'Diskon 5%' },
  UR: { code: 'LUMI10',        label: 'Diskon 10%' },
  SR: { code: 'LUMIKRISTAL15', label: 'Diskon 15%' }
};
const RARITY = { C: 'Umum', R: 'Langka', UR: 'Ultra', SR: 'Rahasia' };

/* Tema elemen: warna, efek partikel, dan karakter suara. */
const EL = {
  lumi:     { name: 'Lumi',     c: '#3fd1c2', c2: '#ffc24b', fx: 'mote',  wave: 'triangle', say: 'Tema Lumi! Teal dan emas, warna favoritku.' },
  api:      { name: 'Api',      c: '#ff6a3d', c2: '#ffd166', fx: 'ember', wave: 'sawtooth', say: 'Panas! Bara apinya naik semua.' },
  air:      { name: 'Air',      c: '#3aa0ff', c2: '#8fe3ff', fx: 'bubble', wave: 'sine',    say: 'Blub blub. Tema air, segar.' },
  listrik:  { name: 'Listrik',  c: '#ffd23f', c2: '#fff3a8', fx: 'spark', wave: 'square',   say: 'Bzzt! Ekorku ikut nyetrum.' },
  daun:     { name: 'Daun',     c: '#4cd17a', c2: '#c6f27a', fx: 'leaf',  wave: 'triangle', say: 'Daun-daun berguguran. Adem.' },
  psikis:   { name: 'Psikis',   c: '#ff6ad5', c2: '#b28dff', fx: 'star',  wave: 'sine',     say: 'Aku bisa baca pikiranmu… kamu mau rak baru, kan?' },
  bayangan: { name: 'Bayangan', c: '#9b6bff', c2: '#6a4cff', fx: 'wisp',  wave: 'triangle', say: 'Tema bayangan. Cocok untuk kartu holo.' },
  es:       { name: 'Es',       c: '#8fe8ff', c2: '#e6fbff', fx: 'snow',  wave: 'sine',     say: 'Brrr… saljunya turun.' }
};

/* Seni kartu dipotong dari foto rak (koordinat piksel pada gambar asli). */
const ART = {
  abu:     { src: 'assets/img/rak-grid-abu.webp',  w: 1086, h: 1448 },
  lumi:    { src: 'assets/img/rak-grid-lumi.webp', w: 941,  h: 1672 },
  kristal: { src: 'assets/img/lumi-crystal.webp',  w: 941,  h: 1672 }
};
const CARDS = [
  { id: 'ignivern',    name: 'Ignivern',     el: 'api',      pw: 88,  rar: 'C',  art: 'abu',     cx: 322, cy: 325,  cw: 190 },
  { id: 'lunafee',     name: 'Lunafee',      el: 'psikis',   pw: 72,  rar: 'C',  art: 'abu',     cx: 576, cy: 322,  cw: 190 },
  { id: 'noxdrake',    name: 'Noxdrake',     el: 'bayangan', pw: 95,  rar: 'R',  art: 'abu',     cx: 837, cy: 325,  cw: 195 },
  { id: 'aqualis',     name: 'Aqualis',      el: 'air',      pw: 81,  rar: 'C',  art: 'abu',     cx: 277, cy: 643,  cw: 205 },
  { id: 'voltfenn',    name: 'Voltfenn',     el: 'listrik',  pw: 77,  rar: 'C',  art: 'abu',     cx: 550, cy: 645,  cw: 210 },
  { id: 'floradra',    name: 'Floradra',     el: 'daun',     pw: 84,  rar: 'C',  art: 'abu',     cx: 827, cy: 652,  cw: 215 },
  { id: 'umbrafox',    name: 'Umbrafox',     el: 'bayangan', pw: 79,  rar: 'C',  art: 'abu',     cx: 247, cy: 960,  cw: 215 },
  { id: 'aerogrif',    name: 'Aerogrif',     el: 'psikis',   pw: 86,  rar: 'C',  art: 'abu',     cx: 527, cy: 968,  cw: 225 },
  { id: 'pyrafen',     name: 'Pyrafen',      el: 'api',      pw: 90,  rar: 'R',  art: 'abu',     cx: 817, cy: 982,  cw: 225 },
  { id: 'silvadeer',   name: 'Silvadeer',    el: 'daun',     pw: 83,  rar: 'R',  art: 'lumi',    cx: 487, cy: 782,  cw: 200 },
  { id: 'frostlupa',   name: 'Frostlupa',    el: 'es',       pw: 87,  rar: 'R',  art: 'lumi',    cx: 737, cy: 792,  cw: 200 },
  { id: 'aurogrif',    name: 'Aurogrif',     el: 'listrik',  pw: 91,  rar: 'R',  art: 'lumi',    cx: 455, cy: 1095, cw: 210 },
  { id: 'lumi',        name: 'Lumi',         el: 'lumi',     pw: 99,  rar: 'UR', art: 'lumi',    cx: 235, cy: 782,  cw: 195 },
  { id: 'lumikristal', name: 'Lumi Kristal', el: 'lumi',     pw: 120, rar: 'SR', art: 'kristal', cx: 480, cy: 800,  cw: 760 }
];
const CARD = Object.fromEntries(CARDS.map(c => [c.id, c]));

/* ---------- utilitas ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rp = n => 'Rp' + Math.round(n).toLocaleString('id-ID');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = {
  get(k, d) { try { const v = localStorage.getItem('lumirack.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('lumirack.' + k, JSON.stringify(v)); } catch (e) {} }
};
const buzz = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const wait = ms => new Promise(r => setTimeout(r, ms));

let toastT;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- state ---------- */
const S = {
  el: store.get('el', 'lumi'),
  sound: store.get('sound', true),
  cart: store.get('cart', []),
  rack: Object.assign({ model: 'tangga8', fil: 'hitam', lip: 'same', hex: '#ff8fc8', hexName: '', led: 'off', ledHex: '#3fd1c2', lamp: false, name: '', slots: [] }, store.get('rack', {})),
  wish: store.get('wish', [])
};
if (!EL[S.el]) S.el = 'lumi';
/* susunan contoh untuk pengunjung pertama */
if (!store.get('rack', null)) S.rack.slots = ['lumi', 'noxdrake', 'voltfenn', 'aqualis', 'floradra', 'pyrafen', 'lunafee', 'umbrafox', 'frostlupa'];
const saveRack = () => store.set('rack', S.rack);
const saveCart = () => store.set('cart', S.cart);

/* =========================================================
   SUARA (disintesis langsung, tanpa file audio)
   ========================================================= */
const SFX = (() => {
  let ctx;
  const ac = () => {
    if (!ctx) { const A = window.AudioContext || window.webkitAudioContext; if (!A) return null; ctx = new A(); }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  const wave = () => EL[S.el].wave;
  function tone(f, dur, o = {}) {
    if (!S.sound) return; const c = ac(); if (!c) return;
    const t = c.currentTime + (o.at || 0);
    const osc = c.createOscillator(), g = c.createGain();
    osc.type = o.type || wave();
    osc.frequency.setValueAtTime(f, t);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + dur);
    const v = o.vol ?? .08;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + .012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(c.destination);
    osc.start(t); osc.stop(t + dur + .05);
  }
  function noise(dur, o = {}) {
    if (!S.sound) return; const c = ac(); if (!c) return;
    const t = c.currentTime + (o.at || 0);
    const len = Math.floor(c.sampleRate * dur), buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource(); src.buffer = buf;
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = o.q || 1.2;
    bp.frequency.setValueAtTime(o.from || 800, t);
    bp.frequency.exponentialRampToValueAtTime(o.to || 800, t + dur);
    const g = c.createGain(); const v = o.vol ?? .12;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + dur * .25);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(bp).connect(g).connect(c.destination);
    src.start(t); src.stop(t + dur + .05);
  }
  return {
    unlock: ac,
    tap()    { tone(720, .06, { vol: .05 }); },
    wobble() { tone(170, .14, { type: 'triangle', to: 110, vol: .22 }); noise(.06, { from: 2500, to: 1800, vol: .08 }); },
    open() {
      noise(.5, { from: 400, to: 6000, vol: .2 });
      [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, .28, { at: .12 + i * .07, vol: .07 }));
      tone(2093, .7, { at: .6, type: 'sine', vol: .05 });
    },
    whoosh() { noise(.7, { from: 300, to: 3200, vol: .14, q: .8 }); },
    slot()   { tone(1250, .03, { type: 'square', vol: .04 }); tone(210, .1, { at: .03, type: 'triangle', vol: .15 }); },
    coin()   { tone(1046, .07, { vol: .06 }); tone(1568, .2, { at: .07, vol: .06 }); },
    pop()    { tone(380, .1, { to: 900, vol: .07 }); },
    theme()  { [0, 4, 7, 12].forEach((s, i) => tone(440 * Math.pow(2, s / 12), .16, { at: i * .05, vol: .05 })); },
    rare(r)  {
      const steps = r === 'SR' ? [0, 4, 7, 11, 12, 16, 19, 24] : r === 'UR' ? [0, 4, 7, 12, 16, 19] : r === 'R' ? [0, 4, 7, 12] : [0, 7];
      steps.forEach((s, i) => tone(523 * Math.pow(2, s / 12), .25, { at: i * .08, vol: .06 }));
      if (r === 'SR' || r === 'UR') noise(1, { from: 6000, to: 9000, vol: .05, at: .3 });
    }
  };
})();

/* =========================================================
   PARTIKEL LATAR (berganti per tema)
   ========================================================= */
const FX = (() => {
  const cv = $('#fx'), g = cv.getContext('2d');
  let W, H, dpr, parts = [], raf, mode;
  const rnd = (a, b) => a + Math.random() * (b - a);
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
  }
  function make(init) {
    const e = EL[S.el], p = { x: rnd(0, W), y: init ? rnd(0, H) : 0, c: Math.random() < .6 ? e.c : e.c2, a: rnd(.3, .9), t: rnd(0, 6.28), r: rnd(1, 3) * dpr };
    switch (mode) {
      case 'ember':  p.vy = -rnd(.4, 1.2); p.vx = rnd(-.2, .2); if (!init) p.y = H + 10; break;
      case 'bubble': p.vy = -rnd(.3, .8); p.vx = 0; p.r = rnd(3, 9) * dpr; if (!init) p.y = H + 10; break;
      case 'spark':  p.vy = 0; p.vx = 0; p.life = rnd(0, 120); break;
      case 'leaf':   p.vy = rnd(.4, 1); p.vx = rnd(-.3, .3); p.r = rnd(4, 7) * dpr; if (!init) p.y = -10; break;
      case 'star':   p.vy = rnd(-.1, .1); p.vx = rnd(-.1, .1); p.r = rnd(2, 5) * dpr; break;
      case 'wisp':   p.vy = rnd(-.2, .2); p.vx = rnd(.1, .4); p.r = rnd(30, 70) * dpr; p.a = rnd(.04, .1); break;
      case 'snow':   p.vy = rnd(.4, 1.1); p.vx = rnd(-.3, .3); if (!init) p.y = -10; break;
      default:       p.vy = -rnd(.1, .4); p.vx = rnd(-.15, .15); if (!init) p.y = H + 10;
    }
    return p;
  }
  function reset() {
    mode = EL[S.el].fx;
    const n = mode === 'wisp' ? 14 : innerWidth < 600 ? 34 : 54;
    parts = Array.from({ length: n }, () => make(true));
  }
  function draw(p) {
    g.globalAlpha = p.a; g.fillStyle = p.c; g.strokeStyle = p.c;
    switch (mode) {
      case 'bubble':
        g.lineWidth = 1.2 * dpr; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.28); g.stroke(); break;
      case 'spark':
        if (p.life > 108) {
          g.lineWidth = 1.5 * dpr; g.beginPath(); g.moveTo(p.x, p.y);
          let x = p.x, y = p.y; for (let i = 0; i < 4; i++) { x += rnd(-8, 8) * dpr; y += rnd(4, 10) * dpr; g.lineTo(x, y); }
          g.stroke();
        }
        g.beginPath(); g.arc(p.x, p.y, 1.2 * dpr, 0, 6.28); g.fill(); break;
      case 'leaf':
        g.save(); g.translate(p.x, p.y); g.rotate(p.t); g.beginPath(); g.ellipse(0, 0, p.r, p.r * .45, 0, 0, 6.28); g.fill(); g.restore(); break;
      case 'star': {
        const s = p.r * (.6 + .4 * Math.sin(p.t * 3));
        g.beginPath(); g.moveTo(p.x, p.y - s * 2); g.lineTo(p.x + s * .4, p.y - s * .4); g.lineTo(p.x + s * 2, p.y);
        g.lineTo(p.x + s * .4, p.y + s * .4); g.lineTo(p.x, p.y + s * 2); g.lineTo(p.x - s * .4, p.y + s * .4);
        g.lineTo(p.x - s * 2, p.y); g.lineTo(p.x - s * .4, p.y - s * .4); g.closePath(); g.fill(); break;
      }
      case 'wisp': {
        const gr = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        gr.addColorStop(0, p.c); gr.addColorStop(1, 'transparent');
        g.fillStyle = gr; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.28); g.fill(); break;
      }
      default:
        g.shadowBlur = mode === 'ember' ? 8 * dpr : 0; g.shadowColor = p.c;
        g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.28); g.fill(); g.shadowBlur = 0;
    }
  }
  function step() {
    g.clearRect(0, 0, W, H);
    parts.forEach((p, i) => {
      p.t += .02; p.x += p.vx + (mode === 'leaf' || mode === 'snow' ? Math.sin(p.t) * .4 : 0); p.y += p.vy;
      if (mode === 'spark') { p.life = (p.life + 1) % 120; if (p.life === 0) { p.x = rnd(0, W); p.y = rnd(0, H); } }
      if (mode === 'ember') p.a = Math.max(0, p.a - .0015);
      draw(p);
      if (p.y < -80 || p.y > H + 80 || p.x < -100 || p.x > W + 100 || p.a <= 0) parts[i] = make(false);
    });
    g.globalAlpha = 1;
    raf = requestAnimationFrame(step);
  }
  function start() { cancelAnimationFrame(raf); size(); reset(); if (reduce) { g.clearRect(0, 0, W, H); parts.forEach(draw); g.globalAlpha = 1; } else step(); }
  addEventListener('resize', () => { size(); if (reduce) parts.forEach(draw); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) step(); });
  return { start };
})();

/* =========================================================
   TEMA ELEMEN
   ========================================================= */
function applyTheme(id, announce) {
  S.el = id; store.set('el', id);
  const e = EL[id], r = document.documentElement.style;
  r.setProperty('--accent', e.c);
  r.setProperty('--accent-2', e.c2);
  r.setProperty('--glow', hexA(e.c, .45));
  document.documentElement.dataset.el = id;
  $$('.theme-chip').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.el === id)));
  FX.start();
  if (announce) { SFX.theme(); Lumi.say(e.say); buzz(15); }
}
function hexA(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${a})`;
}
function buildThemes() {
  $('#themes').innerHTML = Object.entries(EL).map(([id, e]) =>
    `<button class="theme-chip" type="button" data-el="${id}" aria-pressed="false" style="--c1:${e.c};--c2:${e.c2}"><i></i>${e.name}</button>`).join('');
  $('#themes').addEventListener('click', ev => {
    const b = ev.target.closest('.theme-chip'); if (b) applyTheme(b.dataset.el, true);
  });
}

/* =========================================================
   KARTU
   ========================================================= */
function cardStyle(c) {
  const a = ART[c.art], cw = c.cw, ch = cw * 88 / 63;
  const x0 = c.cx - cw / 2, y0 = c.cy - ch / 2;
  const bs = a.w / cw * 100, px = x0 / (a.w - cw) * 100, py = y0 / (a.h - ch) * 100;
  // url() ditulis langsung (bukan lewat variabel CSS) supaya path relatif ke halaman, bukan ke style.css
  return `background-image:url('${a.src}');--bs:${bs.toFixed(2)}%;--bp:${px.toFixed(2)}% ${py.toFixed(2)}%;--ec:${EL[c.el].c}`;
}
function cardHTML(c, cls = '') {
  return `<div class="tcg ${cls}" style="${cardStyle(c)}" data-card="${c.id}">
    <span class="tcg-rar">${c.rar}</span>
    <span class="tcg-cap"><i></i><b>${esc(c.name)}</b>${c.pw}</span>
  </div>`;
}
/* efek holo mengikuti jari / kursor */
function holo(root) {
  root.addEventListener('pointermove', ev => {
    const t = ev.target.closest('.tcg'); if (!t || reduce) return;
    const r = t.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
    t.classList.add('tilt');
    t.style.setProperty('--ry', ((x - .5) * 22).toFixed(1) + 'deg');
    t.style.setProperty('--rx', ((.5 - y) * 22).toFixed(1) + 'deg');
    t.style.setProperty('--mx', (x * 100).toFixed(0) + '%');
    t.style.setProperty('--my', (y * 100).toFixed(0) + '%');
  });
  root.addEventListener('pointerout', ev => {
    const t = ev.target.closest('.tcg'); if (!t || t.contains(ev.relatedTarget)) return;
    t.classList.remove('tilt'); ['--rx', '--ry', '--mx', '--my'].forEach(p => t.style.removeProperty(p));
  });
}

/* =========================================================
   INTRO: orb bergoyang 3 kali lalu pecah jadi cahaya
   ========================================================= */
const Intro = (() => {
  const box = $('#intro'), orb = $('#orb'), hint = $('#introHint'), burst = $('#burst');
  let busy = false;
  async function open() {
    if (busy) return; busy = true;
    SFX.unlock(); SFX.tap(); buzz(10);
    if (!reduce) {
      hint.textContent = '…';
      orb.classList.add('wobble');
      for (let i = 0; i < 3; i++) { SFX.wobble(); buzz(25); hint.textContent = '•'.repeat(i + 1); await wait(600); }
      orb.classList.remove('wobble');
      hint.textContent = 'Terbuka!';
      orb.classList.add('crack');
      SFX.open(); buzz([30, 40, 60]);
      let html = '<div class="flash"></div>';
      for (let i = 0; i < 12; i++) html += `<span class="ray" style="transform:rotate(${i * 30}deg);animation-delay:${i * 15}ms"></span>`;
      CARDS.slice(0, 9).forEach((c, i) => {
        const ang = (i / 9) * Math.PI * 2, d = Math.max(innerWidth, innerHeight) * .6;
        html += `<div class="fly" style="--tx:${(Math.cos(ang) * d).toFixed(0)}px;--ty:${(Math.sin(ang) * d).toFixed(0)}px;--tr:${(i * 40 - 160)}deg;animation-delay:${80 + i * 25}ms">${cardHTML(c)}</div>`;
      });
      burst.innerHTML = html;
      await wait(900);
    } else { SFX.open(); }
    close();
  }
  function close() {
    box.classList.add('out');
    document.body.classList.remove('locked');
    setTimeout(() => { box.hidden = true; burst.innerHTML = ''; }, 650);
    setTimeout(() => Lumi.enter(), reduce ? 0 : 350);
  }
  function init() {
    // link langsung ke bagian tertentu (mis. .../#custom) melewati intro
    const h = location.hash.slice(1);
    if (SECTIONS.includes(h)) {
      box.hidden = true;
      const jump = () => $('#' + h).scrollIntoView({ behavior: 'instant' });
      requestAnimationFrame(jump);
      if (document.fonts) document.fonts.ready.then(jump);
      setTimeout(() => Lumi.enter(), 300);
      return;
    }
    document.body.classList.add('locked');
    orb.addEventListener('click', open);
    $('#introSkip').addEventListener('click', () => { SFX.unlock(); close(); });
  }
  return { init };
})();

/* =========================================================
   KATALOG: rak putar
   ========================================================= */
const Spinner = (() => {
  const ring = $('#ring'), stage = $('#spinner'), n = PRODUCTS.length, step = 360 / n;
  let a = 0, idx = 0;
  function radius() { const w = ring.offsetWidth || 176; return Math.round(w / 2 / Math.tan(Math.PI / n) + 34); }
  function build() {
    const R = radius();
    ring.style.transform = `translateZ(-${R}px) rotateY(var(--a, 0deg))`;
    ring.innerHTML = PRODUCTS.map((p, i) => `
      <div class="face${p.led !== 'off' ? ' led' : ''}" style="transform:rotateY(${i * step}deg) translateZ(${R}px)">
        <img src="assets/img/${p.img}" alt="${esc(p.name)}" loading="${i ? 'lazy' : 'eager'}" draggable="false">
        <span class="face-tag">${esc(p.tag)}</span>
        <div class="face-cap"><b>${esc(p.name)}</b><span>${rp(p.price)}</span></div>
      </div>`).join('');
    $('#dots').innerHTML = PRODUCTS.map(() => '<i></i>').join('');
    set(0);
  }
  function set(deg, cls) {
    a = deg;
    ring.classList.remove('spin'); if (cls) ring.classList.add(cls);
    ring.style.setProperty('--a', a + 'deg');
    const i = ((Math.round(-a / step) % n) + n) % n;
    if (i !== idx || !$('#prod').innerHTML) { idx = i; info(); }
    $$('#dots i').forEach((d, k) => d.classList.toggle('on', k === idx));
  }
  function go(dir) { SFX.tap(); set(Math.round(a / step) * step - dir * step); }
  function spin() {
    SFX.whoosh(); buzz(20);
    set(Math.round(a / step) * step - 360 - step, 'spin');
    setTimeout(() => { ring.classList.remove('spin'); SFX.slot(); }, 1500);
  }
  function info() {
    const p = PRODUCTS[idx];
    $('#prod').innerHTML = `
      <div class="prod-top">
        <div><h3>${esc(p.name)}</h3><p class="prod-sub">${esc(p.sub)}</p></div>
        <div class="price">${rp(p.price)}<small>contoh</small></div>
      </div>
      <div class="specs">${p.specs.map(s => `<span>${esc(s)}</span>`).join('')}</div>
      <div class="btn-row">
        <button class="btn primary" type="button" data-add="${p.id}">+ Keranjang</button>
        <button class="btn" type="button" data-custom="${p.id}">Custom rak ini</button>
      </div>`;
  }
  function init() {
    build();
    $('#prevBtn').addEventListener('click', () => go(-1));
    $('#nextBtn').addEventListener('click', () => go(1));
    $('#prod').addEventListener('click', ev => {
      const add = ev.target.closest('[data-add]'), cus = ev.target.closest('[data-custom]');
      if (add) {
        const p = PRODUCTS.find(x => x.id === add.dataset.add);
        Cart.add({ key: p.id, name: p.name, detail: p.sub, price: p.price });
      }
      if (cus) {
        const p = PRODUCTS.find(x => x.id === cus.dataset.custom);
        Object.assign(S.rack, { model: p.model, fil: p.fil, led: p.led });
        Custom.sync(); SFX.pop();
        $('#custom').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      }
    });
    // geser untuk memutar
    let sx = null, sa = 0, moved = false;
    stage.addEventListener('pointerdown', ev => { sx = ev.clientX; sa = a; moved = false; });
    addEventListener('pointermove', ev => {
      if (sx == null) return;
      const dx = ev.clientX - sx;
      if (Math.abs(dx) > 6) { moved = true; ring.classList.add('drag'); ring.style.setProperty('--a', (sa + dx * .45) + 'deg'); a = sa + dx * .45; }
    });
    const end = () => {
      if (sx == null) return; sx = null; ring.classList.remove('drag');
      if (moved) { SFX.tap(); set(Math.round(a / step) * step); }
    };
    addEventListener('pointerup', end);
    addEventListener('pointercancel', end);
    addEventListener('resize', build);
  }
  return { init, spin };
})();

/* =========================================================
   RAK (pratinjau custom + deck)
   ========================================================= */
function filOf(id) { return FILAMENTS.find(f => f.id === id) || FILAMENTS[0]; }
function filHex(f) { return f.id === 'request' ? S.rack.hex : f.hex; }
function ledColor() {
  const l = LEDS.find(x => x.id === S.rack.led);
  return !l || l.id === 'off' ? '' : l.id === 'rgb' ? S.rack.ledHex : l.c;
}
function slotCount() { const m = MODELS[S.rack.model]; return m.rows * m.cols; }
function fitSlots() {
  const n = slotCount();
  S.rack.slots = Array.from({ length: n }, (_, i) => S.rack.slots[i] || null);
}
function rackHTML(interactive) {
  const m = MODELS[S.rack.model], f = filOf(S.rack.fil);
  const lip = S.rack.lip === 'same' ? f : filOf(S.rack.lip);
  const led = ledColor();
  const style = `--fil:${f.finish === 'clear' ? 'rgba(200,225,255,.18)' : filHex(f)};--lip:${lip.finish === 'clear' ? 'rgba(200,225,255,.3)' : filHex(lip)};--led:${led || 'transparent'};--cols:${m.cols}`;
  const cls = ['rack', m.kind, interactive ? 'big' : '', led ? 'led' : '', S.rack.led === 'pelangi' ? 'rainbow' : ''].join(' ');
  let rows = '', k = 0;
  for (let r = 0; r < m.rows; r++) {
    let slots = '';
    for (let c = 0; c < m.cols; c++, k++) {
      const card = CARD[S.rack.slots[k]];
      const inner = card ? cardHTML(card) : '';
      slots += interactive
        ? `<button class="slot${card ? '' : ' empty'}" type="button" data-slot="${k}" aria-label="Slot ${k + 1}: ${card ? esc(card.name) : 'kosong'}">${inner}</button>`
        : `<div class="slot">${inner}</div>`;
    }
    rows += `<div class="rack-row"><div class="slots">${slots}</div><div class="lip"></div></div>`;
  }
  return `<div class="${cls}" style="${style}" data-finish="${f.finish || ''}" data-lipfinish="${lip.finish || ''}">
    ${S.rack.lamp ? '<div class="lamp"></div>' : ''}
    <div class="rack-body">${rows}</div>
    <div class="rack-base"></div>
    ${S.rack.name ? `<div class="plate">${esc(S.rack.name)}</div>` : ''}
  </div>`;
}
function renderRacks(dropIdx) {
  fitSlots();
  $('#stageCustom').innerHTML = rackHTML(false);
  $('#stageDeck').innerHTML = rackHTML(true);
  if (dropIdx != null) { const s = $(`#stageDeck [data-slot="${dropIdx}"]`); if (s) s.classList.add('drop'); }
  Deck.stats();
}

/* =========================================================
   CUSTOM
   ========================================================= */
const Custom = (() => {
  function price() {
    const m = MODELS[S.rack.model], f = filOf(S.rack.fil), lip = S.rack.lip === 'same' ? null : filOf(S.rack.lip);
    const l = LEDS.find(x => x.id === S.rack.led);
    const lines = [[m.name, m.price]];
    if (f.add) lines.push([f.name, f.add]);
    if (lip && lip.add) lines.push(['Bibir ' + lip.name.toLowerCase(), lip.add]);
    if (l && l.add) lines.push(['LED ' + l.name.toLowerCase(), l.add]);
    if (S.rack.lamp) lines.push(['Lampu sorot atas', ADDON.lamp]);
    if (S.rack.name) lines.push(['Plakat nama', ADDON.plate]);
    return { lines, total: lines.reduce((s, x) => s + x[1], 0) };
  }
  function desc() {
    const f = filOf(S.rack.fil), lip = S.rack.lip === 'same' ? 'sama' : filOf(S.rack.lip).name;
    const fName = f.id === 'request' ? `Request: ${S.rack.hexName || S.rack.hex}` : f.name;
    const l = LEDS.find(x => x.id === S.rack.led);
    const parts = [`Warna: ${fName}`, `Bibir: ${lip}`, `LED: ${l.name}${l.id === 'rgb' ? ' ' + S.rack.ledHex : ''}`];
    if (S.rack.lamp) parts.push('Lampu sorot: ya');
    if (S.rack.name) parts.push(`Plakat: "${S.rack.name}"`);
    return parts.join(' · ');
  }
  function swatch(name, f, checked) {
    const cls = f.finish ? f.finish : '';
    return `<label class="sw"><input type="radio" name="${name}" value="${f.id}" ${checked ? 'checked' : ''} aria-label="${esc(f.name)}"><i class="${cls}" style="--c:${f.hex}"></i><small>${esc(f.name.split(' ')[0])}</small></label>`;
  }
  function build() {
    $('#filSw').innerHTML = FILAMENTS.map(f => swatch('fil', f, f.id === S.rack.fil)).join('');
    $('#lipSw').innerHTML = swatch('lip', { id: 'same', name: 'Sama badan', hex: 'transparent', finish: '' }, S.rack.lip === 'same')
      .replace('style="--c:transparent"', 'style="--c:linear-gradient(135deg,var(--panel-2) 50%,var(--line) 50%)"')
      + FILAMENTS.filter(f => f.id !== 'request').map(f => swatch('lip', f, f.id === S.rack.lip)).join('');
    $('#ledPills').innerHTML = LEDS.map(l => `<label class="pill"><input type="radio" name="led" value="${l.id}" ${l.id === S.rack.led ? 'checked' : ''}><span><i style="--c:${l.id === 'pelangi' ? '#ff5d8f' : l.c || 'var(--line)'}"></i>${l.name}${l.add ? ` +${l.add / 1000}rb` : ''}</span></label>`).join('');
  }
  function sync() {
    fitSlots();
    $$('#modelSeg button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.model === S.rack.model)));
    $('#modelInfo').textContent = `${MODELS[S.rack.model].info} · ${slotCount()} slot`;
    $$('#filSw input').forEach(i => i.checked = i.value === S.rack.fil);
    $$('#lipSw input').forEach(i => i.checked = i.value === S.rack.lip);
    $$('#ledPills input').forEach(i => i.checked = i.value === S.rack.led);
    const f = filOf(S.rack.fil);
    $('#filName').textContent = f.id === 'request' ? (S.rack.hexName || 'Warna request') : f.name + (f.add ? ` · +${f.add / 1000}rb` : '');
    $('#lipName').textContent = S.rack.lip === 'same' ? 'Sama dengan badan' : filOf(S.rack.lip).name;
    $('#reqRow').hidden = S.rack.fil !== 'request';
    $('#ledRow').hidden = S.rack.led !== 'rgb';
    $('#cus-hex').value = S.rack.hex; $('#cus-hexname').value = S.rack.hexName;
    $('#cus-ledhex').value = S.rack.ledHex;
    $('#cus-lamp').checked = S.rack.lamp;
    $('#cus-name').value = S.rack.name; $('#nameCount').textContent = `${S.rack.name.length}/14`;
    const p = price();
    $('#sumCustom').innerHTML = p.lines.map(([k, v]) => `<div class="sum-row"><span>${esc(k)}</span><b>${rp(v)}</b></div>`).join('')
      + `<div class="sum-total"><b>Total</b><span class="price">${rp(p.total)}</span></div>`;
    renderRacks(); saveRack();
  }
  function randomize() {
    const pick = a => a[Math.floor(Math.random() * a.length)];
    const fils = FILAMENTS.filter(f => f.id !== 'request');
    S.rack.fil = pick(fils).id;
    S.rack.lip = Math.random() < .4 ? 'same' : pick(fils).id;
    S.rack.led = pick(LEDS).id;
    S.rack.ledHex = EL[S.el].c;
    sync(); SFX.pop(); buzz(15);
    Lumi.say(`Gimana kalau <b>${filOf(S.rack.fil).name}</b> dengan LED <b>${LEDS.find(l => l.id === S.rack.led).name.toLowerCase()}</b>?`);
  }
  function init() {
    build();
    $('#modelSeg').addEventListener('click', ev => {
      const b = ev.target.closest('[data-model]'); if (!b) return;
      S.rack.model = b.dataset.model; SFX.tap(); sync();
    });
    $('#custom').addEventListener('change', ev => {
      const t = ev.target;
      if (t.name === 'fil') S.rack.fil = t.value;
      else if (t.name === 'lip') S.rack.lip = t.value;
      else if (t.name === 'led') S.rack.led = t.value;
      else if (t.id === 'cus-lamp') S.rack.lamp = t.checked;
      else return;
      SFX.tap(); sync();
    });
    $('#cus-hex').addEventListener('input', e => { S.rack.hex = e.target.value; sync(); });
    $('#cus-hexname').addEventListener('input', e => { S.rack.hexName = e.target.value.trim(); $('#filName').textContent = S.rack.hexName || 'Warna request'; saveRack(); });
    $('#cus-ledhex').addEventListener('input', e => { S.rack.ledHex = e.target.value; sync(); });
    $('#cus-name').addEventListener('input', e => { S.rack.name = e.target.value.toUpperCase().slice(0, 14); sync(); });
    $('#addCustom').addEventListener('click', () => {
      const p = price();
      Cart.add({ key: 'custom-' + Date.now(), name: MODELS[S.rack.model].name + ' (custom)', detail: desc(), price: p.total });
    });
    sync();
  }
  return { init, sync, price, desc, randomize };
})();

/* =========================================================
   DECK BUILDER
   ========================================================= */
const Deck = (() => {
  let target = null, filter = 'semua';
  function stats() {
    const ids = S.rack.slots.filter(Boolean);
    const power = ids.reduce((s, id) => s + CARD[id].pw, 0);
    const byEl = {};
    ids.forEach(id => { const e = CARD[id].el; byEl[e] = (byEl[e] || 0) + 1; });
    $('#deckStats').innerHTML = `
      <div class="stat-top"><span>Kartu terpasang <b style="font-size:15px;color:var(--text)">${ids.length}/${S.rack.slots.length}</b></span><span>Kekuatan deck <b>${power}</b></span></div>
      <div class="el-chips">${Object.keys(byEl).length ? Object.entries(byEl).map(([e, n]) => `<span style="--c:${EL[e].c}"><i></i>${EL[e].name} × ${n}</span>`).join('') : '<span>Belum ada kartu. Ketuk slot kosong untuk mulai.</span>'}</div>`;
  }
  function openPick(i) {
    target = i;
    $('#pick-h').textContent = `Pilih kartu untuk slot ${i + 1}`;
    $('#pickEmpty').hidden = !S.rack.slots[i];
    renderPick(); Sheet.open('#pickSheet');
  }
  function renderPick() {
    const els = ['semua', ...Object.keys(EL)];
    $('#pickFilter').innerHTML = els.map(e => `<button type="button" data-f="${e}" aria-pressed="${e === filter}">${e === 'semua' ? 'Semua' : EL[e].name}</button>`).join('');
    const list = CARDS.filter(c => filter === 'semua' || c.el === filter);
    $('#pickGrid').innerHTML = list.length
      ? list.map(c => `<button type="button" data-pick="${c.id}" aria-label="${esc(c.name)}, ${EL[c.el].name}, kekuatan ${c.pw}">${cardHTML(c)}</button>`).join('')
      : '<p class="note">Belum ada kartu untuk elemen ini.</p>';
  }
  function place(i, id) {
    S.rack.slots[i] = id; saveRack(); renderRacks(i);
    if (id) { SFX.slot(); buzz(12); }
  }
  async function randomFill() {
    Lumi.act(); Lumi.say('Serahkan padaku! Kuisi satu per satu…');
    const n = S.rack.slots.length, pool = CARDS.filter(c => c.rar !== 'SR').map(c => c.id);
    for (let i = 0; i < n; i++) {
      const id = pool.splice(Math.floor(Math.random() * pool.length), 1)[0] || CARDS[i % CARDS.length].id;
      place(i, id);
      await wait(reduce ? 0 : 140);
    }
    SFX.coin();
  }
  function add(id) {
    let i = S.rack.slots.indexOf(null);
    if (i < 0) i = 0;
    place(i, id);
    return i;
  }
  function init() {
    $('#stageDeck').addEventListener('click', ev => { const s = ev.target.closest('[data-slot]'); if (s) { SFX.tap(); openPick(+s.dataset.slot); } });
    $('#pickFilter').addEventListener('click', ev => { const b = ev.target.closest('[data-f]'); if (b) { filter = b.dataset.f; SFX.tap(); renderPick(); } });
    $('#pickGrid').addEventListener('click', ev => { const b = ev.target.closest('[data-pick]'); if (b && target != null) { place(target, b.dataset.pick); Sheet.close(); } });
    $('#pickEmpty').addEventListener('click', () => { if (target != null) { place(target, null); SFX.pop(); Sheet.close(); } });
    $('#deckRandom').addEventListener('click', randomFill);
    $('#deckClear').addEventListener('click', () => { S.rack.slots = S.rack.slots.map(() => null); saveRack(); renderRacks(); SFX.pop(); toast('Rak dikosongkan'); });
    $('#deckSave').addEventListener('click', () => { saveRack(); SFX.coin(); toast('Susunan disimpan di HP ini'); });
    $('#deckOrder').addEventListener('click', () => {
      const names = S.rack.slots.map((id, i) => `${i + 1}. ${id ? CARD[id].name : '(kosong)'}`).join(', ');
      Cart.add({ key: 'deck-' + Date.now(), name: MODELS[S.rack.model].name + ' + susunan deck', detail: Custom.desc() + '\nSusunan: ' + names, price: Custom.price().total });
    });
    holo($('#pickGrid'));
  }
  return { init, stats, randomFill, add };
})();

/* =========================================================
   CARI KARTU
   ========================================================= */
const Request = (() => {
  function budgetLabel() { $('#budgetOut').textContent = 's.d. ' + rp(+$('#req-budget').value); }
  function msg(d) {
    return [
      `Halo ${TOKO.nama}, saya lagi cari kartu:`,
      `• Nama: ${d.name}`,
      d.set ? `• Set/seri: ${d.set}` : null,
      `• Jumlah: ${d.qty}`,
      `• Kondisi: ${d.cond}`,
      `• Bahasa: ${d.lang}`,
      `• Budget: s.d. ${rp(d.budget)}`,
      d.els.length ? `• Elemen: ${d.els.join(', ')}` : null,
      d.note ? `• Catatan: ${d.note}` : null,
      '', 'Apakah bisa dibantu carikan?'
    ].filter(x => x != null).join('\n');
  }
  function renderWish() {
    const box = $('#wish');
    box.hidden = !S.wish.length;
    box.innerHTML = `<h3 style="font-size:15px">Riwayat permintaanmu</h3><ul>${S.wish.slice(0, 5).map(w => `<li class="panel"><b>${esc(w.name)}</b><span>${esc(w.date)}</span></li>`).join('')}</ul>`;
  }
  function init() {
    $('#reqEl').innerHTML = Object.entries(EL).filter(([id]) => id !== 'lumi').map(([id, e]) =>
      `<label class="pill"><input type="checkbox" name="reqEl" value="${e.name}"><span><i style="--c:${e.c}"></i>${e.name}</span></label>`).join('');
    $('#req-budget').addEventListener('input', budgetLabel); budgetLabel();
    $('#reqForm').addEventListener('submit', ev => {
      ev.preventDefault();
      const d = {
        name: $('#req-name').value.trim(), set: $('#req-set').value.trim(), qty: Math.max(1, +$('#req-qty').value || 1),
        cond: $('#req-cond').value, lang: $('#req-lang').value, budget: +$('#req-budget').value,
        els: $$('input[name="reqEl"]:checked').map(i => i.value), note: $('#req-note').value.trim()
      };
      if (!d.name) { $('#reqErr').hidden = false; $('#req-name').focus(); SFX.pop(); return; }
      $('#reqErr').hidden = true;
      const text = msg(d), url = `https://wa.me/${TOKO.wa}?text=${encodeURIComponent(text)}`;
      $('#reqResult').hidden = false;
      $('#reqResult').innerHTML = `
        <span class="eyebrow">Permintaan siap dikirim</span>
        <pre id="reqText">${esc(text)}</pre>
        <div class="btn-row">
          <a class="btn primary" href="${url}" target="_blank" rel="noopener">Kirim lewat WhatsApp</a>
          <button class="btn" type="button" id="reqCopy">Salin teks</button>
        </div>
        <p class="note">Kalau WhatsApp tidak terbuka, salin teks di atas lalu kirim ke ${TOKO.wa}.</p>`;
      $('#reqCopy').addEventListener('click', () => copy(text));
      S.wish.unshift({ name: d.name, date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) });
      S.wish = S.wish.slice(0, 10); store.set('wish', S.wish); renderWish();
      SFX.coin(); buzz(15);
      Lumi.say(`Siap! Aku ikut bantu cari <b>${esc(d.name)}</b>.`);
      $('#reqResult').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
    });
    renderWish();
  }
  return { init };
})();
function copy(text) {
  const done = () => toast('Teks disalin');
  try {
    navigator.clipboard.writeText(text).then(done, fallback);
  } catch (e) { fallback(); }
  function fallback() {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { toast('Tahan teks lalu pilih Salin'); }
    ta.remove();
  }
}

/* =========================================================
   BOOSTER HARIAN
   ========================================================= */
const Pack = (() => {
  const today = () => new Date().toISOString().slice(0, 10);
  function roll() {
    const r = Math.random();
    const rar = r < .01 ? 'SR' : r < .08 ? 'UR' : r < .3 ? 'R' : 'C';
    const pool = CARDS.filter(c => c.rar === rar);
    return pool[Math.floor(Math.random() * pool.length)];
  }
  function idle() {
    const opened = store.get('pack', null);
    const used = opened && opened.date === today();
    $('#packZone').innerHTML = `
      <button class="pack" id="packBtn" type="button" ${used ? 'disabled' : ''} aria-label="Buka booster pack">
        <span class="pack-face"></span>
        <span class="pack-name">${esc(TOKO.nama)}<small>${esc(TOKO.tagline)} · BOOSTER</small></span>
      </button>
      <p class="note">${used ? `Pack hari ini sudah dibuka (${esc(CARD[opened.card].name)}). Kembali besok, ya.` : 'Ketuk pack untuk membuka.'}</p>
      ${used ? `<button class="btn small" type="button" id="packShow">Lihat kartu hari ini</button>` : ''}`;
    const b = $('#packBtn'); if (!used) b.addEventListener('click', open);
    const s = $('#packShow'); if (s) s.addEventListener('click', () => show(CARD[opened.card], false));
  }
  let busy = false;
  async function open() {
    const b = $('#packBtn'); if (!b || b.disabled || busy) return;
    busy = true; SFX.unlock();
    b.classList.add('shake'); SFX.wobble(); buzz(20);
    await wait(reduce ? 0 : 1000);
    b.classList.remove('shake'); b.classList.add('torn'); SFX.whoosh();
    await wait(reduce ? 0 : 450);
    const c = roll();
    store.set('pack', { date: today(), card: c.id });
    busy = false;
    show(c, true);
  }
  function show(c, fresh) {
    const v = VOUCHER[c.rar];
    $('#packZone').innerHTML = `
      <div class="reveal ${c.rar.toLowerCase()}">
        <span class="rarity">${RARITY[c.rar]} · ${EL[c.el].name}</span>
        ${cardHTML(c)}
        <h3 style="font-size:18px">${esc(c.name)}</h3>
        <div class="code">${v.code}<button class="btn small" type="button" id="codeCopy">Salin</button></div>
        <p class="note">${v.label} untuk pesanan berikutnya (contoh).</p>
        <div class="btn-row" style="width:100%">
          <button class="btn primary" type="button" id="toDeck">Pasang di rak</button>
          <button class="btn" type="button" id="packBack">Tutup</button>
        </div>
      </div>`;
    $('#codeCopy').addEventListener('click', () => copy(v.code));
    $('#toDeck').addEventListener('click', () => {
      const i = Deck.add(c.id);
      $('#deck').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      toast(`${c.name} dipasang di slot ${i + 1}`);
    });
    $('#packBack').addEventListener('click', idle);
    holo($('#packZone'));
    if (fresh) {
      SFX.rare(c.rar); buzz(c.rar === 'C' ? 20 : [30, 50, 80]);
      Lumi.say(c.rar === 'SR' ? 'WAH! <b>Lumi Kristal</b>! Itu bentuk rahasiaku!' : c.rar === 'UR' ? 'Itu aku! Kartu <b>Ultra</b>!' : c.rar === 'R' ? `Kartu <b>langka</b>: ${esc(c.name)}!` : `Dapat <b>${esc(c.name)}</b>. Lumayan!`);
    }
  }
  return { init: idle, open };
})();

/* =========================================================
   KERANJANG + CHECKOUT WHATSAPP
   ========================================================= */
const Cart = (() => {
  function count() { return S.cart.reduce((s, x) => s + x.qty, 0); }
  function badge() { const n = count(), b = $('#cartCount'); b.hidden = !n; b.textContent = n; }
  function add(item) {
    const ex = S.cart.find(x => x.key === item.key);
    if (ex) ex.qty++; else S.cart.push(Object.assign({ qty: 1 }, item));
    saveCart(); badge(); SFX.coin(); buzz(15);
    toast(`${item.name} masuk keranjang`);
    Lumi.say('Masuk keranjang! Ketuk ikon keranjang di atas untuk checkout.');
  }
  function text(voucher) {
    const total = S.cart.reduce((s, x) => s + x.price * x.qty, 0);
    const lines = S.cart.map((x, i) => `${i + 1}. ${x.name} × ${x.qty} = ${rp(x.price * x.qty)}\n   ${x.detail.replace(/\n/g, '\n   ')}`);
    return [`Halo ${TOKO.nama}, saya mau pesan:`, '', ...lines, '', `Total: ${rp(total)}`, voucher ? `Kode voucher: ${voucher}` : '', '', 'Nama:', 'Alamat:'].filter((x, i, a) => !(x === '' && a[i - 1] === '')).join('\n');
  }
  function render() {
    const body = $('#cartBody');
    if (!S.cart.length) {
      body.innerHTML = `<div class="empty-state"><span class="lumi-mini"></span><p>Keranjang masih kosong.</p><a class="btn small" href="#katalog" data-close>Lihat katalog</a></div>`;
      return;
    }
    const total = S.cart.reduce((s, x) => s + x.price * x.qty, 0);
    const pack = store.get('pack', null);
    const code = pack ? VOUCHER[CARD[pack.card].rar].code : '';
    body.innerHTML = `
      <ul class="cart-list">${S.cart.map((x, i) => `
        <li class="panel cart-item">
          <b>${esc(x.name)}</b><span class="price" style="font-size:15px">${rp(x.price * x.qty)}</span>
          <p>${esc(x.detail)}</p>
          <div class="qty"><button type="button" data-q="${i}" data-d="-1" aria-label="Kurangi">−</button><span>${x.qty}</span><button type="button" data-q="${i}" data-d="1" aria-label="Tambah">+</button></div>
        </li>`).join('')}
      </ul>
      <div class="checkout">
        <label class="lbl" style="display:grid;gap:6px;font-weight:700;font-size:14px">Kode voucher <input class="field" id="cart-voucher" type="text" value="${esc(code)}" placeholder="opsional"></label>
        <div class="sum-total"><b>Total</b><span class="price">${rp(total)}</span></div>
        <a class="btn primary" id="waLink" href="#" target="_blank" rel="noopener">Pesan lewat WhatsApp</a>
        <div class="btn-row"><a class="btn" href="${TOKO.shopee}" target="_blank" rel="noopener">Shopee</a><a class="btn" href="${TOKO.tiktok}" target="_blank" rel="noopener">TikTok</a></div>
        <div class="wa-num"><span>WhatsApp penjual</span><b>+${TOKO.wa}</b></div>
        <button class="btn small ghost" type="button" id="cartCopy">Salin isi pesanan</button>
        <p class="note">Diskon voucher dihitung oleh penjual saat konfirmasi.</p>
      </div>`;
    const upd = () => { $('#waLink').href = `https://wa.me/${TOKO.wa}?text=${encodeURIComponent(text($('#cart-voucher').value.trim()))}`; };
    upd();
    $('#cart-voucher').addEventListener('input', upd);
    $('#cartCopy').addEventListener('click', () => copy(text($('#cart-voucher').value.trim())));
  }
  function init() {
    badge();
    $('#cartBtn').addEventListener('click', () => { SFX.tap(); render(); Sheet.open('#cartSheet'); });
    $('#cartBody').addEventListener('click', ev => {
      const q = ev.target.closest('[data-q]'); if (!q) return;
      const it = S.cart[+q.dataset.q]; it.qty += +q.dataset.d;
      if (it.qty <= 0) S.cart.splice(+q.dataset.q, 1);
      saveCart(); badge(); render(); SFX.tap();
    });
  }
  return { init, add };
})();

/* ---------- bottom sheet ---------- */
const Sheet = (() => {
  let cur = null, last = null;
  function open(sel) {
    close(true);
    cur = $(sel); last = document.activeElement;
    cur.hidden = false; document.body.classList.add('locked');
    requestAnimationFrame(() => { cur.classList.add('open'); const f = cur.querySelector('.x'); if (f) f.focus(); });
  }
  function close(instant) {
    if (!cur) return;
    const el = cur; cur = null;
    el.classList.remove('open'); document.body.classList.remove('locked');
    setTimeout(() => { el.hidden = true; }, instant ? 0 : 300);
    if (last && last.focus) last.focus();
  }
  document.addEventListener('click', ev => { if (ev.target.closest('[data-close]') && cur) close(); });
  document.addEventListener('keydown', ev => { if (ev.key === 'Escape') close(); });
  return { open, close };
})();

/* =========================================================
   LUMI: asisten yang membantu scroll dan memutar rak
   ========================================================= */
const SECTIONS = ['katalog', 'custom', 'deck', 'cari', 'pack', 'info'];
const LUMI_LINES = {
  katalog: { say: 'Halo, aku <b>Lumi</b>! Ketuk aku untuk <b>memutar rak</b>.', act: 'Putar rak', fn: () => Spinner.spin() },
  custom:  { say: 'Bingung pilih warna? Biar aku yang <b>acak</b>.',            act: 'Acak warna', fn: () => Custom.randomize() },
  deck:    { say: 'Rak kosong itu sedih. Mau kuisi <b>kartu acak</b>?',         act: 'Isi acak',   fn: () => Deck.randomFill() },
  cari:    { say: 'Cari kartu apa? Tulis saja, nanti dibantu carikan.',         act: 'Mulai isi',  fn: () => $('#req-name').focus() },
  pack:    { say: 'Satu <b>booster gratis</b> tiap hari. Buka sekarang?',       act: 'Buka pack',  fn: () => { const b = $('#packBtn'); if (b && !b.disabled) Pack.open(); else Lumi.say('Pack hari ini sudah dibuka. Besok lagi, ya!'); } },
  info:    { say: 'Ada pertanyaan? Chat penjual lewat WhatsApp, ya.',           act: 'Ke atas',    fn: () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }) }
};
const Lumi = (() => {
  const box = $('#lumi'), bub = $('#lumiBubble'), say$ = $('#lumiSay'), prg = $('#lumiPrg');
  const C = 2 * Math.PI * 32;
  let cur = 'katalog', hideT, lastY = scrollY, runT, entered = false;
  prg.style.strokeDasharray = C; prg.style.strokeDashoffset = C;
  function say(html, ms = 6000) {
    say$.innerHTML = html; bub.classList.remove('hide');
    clearTimeout(hideT); hideT = setTimeout(() => bub.classList.add('hide'), ms);
  }
  function setSection(id) {
    if (id === cur || !LUMI_LINES[id]) return;
    cur = id; const L = LUMI_LINES[id];
    $('#lumiAct').textContent = L.act;
    $('#lumiNext').hidden = id === 'info';
    if (entered) say(L.say);
    $$('#dock a').forEach(a => a.classList.toggle('on', a.dataset.sec === id || (id === 'info' && a.dataset.sec === 'pack')));
  }
  function act() { box.classList.remove('act'); void box.offsetWidth; box.classList.add('act'); setTimeout(() => box.classList.remove('act'), 700); }
  function next() {
    const i = SECTIONS.indexOf(cur), nx = SECTIONS[Math.min(i + 1, SECTIONS.length - 1)];
    SFX.pop(); buzz(10);
    box.classList.add('run');
    $('#' + nx).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }
  function enter() {
    entered = true; box.classList.add('in');
    $('#lumiAct').textContent = LUMI_LINES[cur].act;
    say(LUMI_LINES[cur].say, 7000);
    $$('#dock a').forEach(a => a.classList.toggle('on', a.dataset.sec === cur));
  }
  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    prg.style.strokeDashoffset = C * (1 - (max > 0 ? scrollY / max : 0));
    box.classList.toggle('flip', scrollY < lastY);
    lastY = scrollY;
    box.classList.add('run'); clearTimeout(runT); runT = setTimeout(() => box.classList.remove('run'), 180);
  }
  function init() {
    $('#lumiBtn').addEventListener('click', () => {
      SFX.unlock(); act();
      if (cur === 'katalog') { box.classList.add('dash'); setTimeout(() => box.classList.remove('dash'), 1200); }
      LUMI_LINES[cur].fn();
      if (cur !== 'deck' && cur !== 'custom' && cur !== 'pack') say(LUMI_LINES[cur].say, 3500);
    });
    $('#lumiAct').addEventListener('click', () => { act(); LUMI_LINES[cur].fn(); });
    $('#lumiNext').addEventListener('click', next);
    addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) setSection(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    SECTIONS.forEach(id => io.observe($('#' + id)));
  }
  return { init, say, enter, act };
})();

/* =========================================================
   MULAI
   ========================================================= */
function init() {
  $('#shopName').textContent = TOKO.nama; $('#footName').textContent = TOKO.nama;
  $('#introLogo').firstChild.textContent = TOKO.nama;
  $('#introLogo span').textContent = TOKO.tagline;
  $('#shopTag').textContent = `${TOKO.tagline} · cetak 3D`;
  document.title = TOKO.nama;
  $('#year').textContent = new Date().getFullYear();
  $('#links').innerHTML = [
    ['Shopee', TOKO.shopee], ['TikTok', TOKO.tiktok], ['Instagram', TOKO.instagram], ['WhatsApp', `https://wa.me/${TOKO.wa}`]
  ].map(([n, u]) => `<a class="btn" href="${u}" target="_blank" rel="noopener">${n}</a>`).join('');

  buildThemes(); applyTheme(S.el, false);
  const sb = $('#soundBtn');
  const paintSound = () => { sb.setAttribute('aria-pressed', String(S.sound)); $$('.w1,.w2', sb).forEach(p => p.style.opacity = S.sound ? 1 : 0); };
  paintSound();
  sb.addEventListener('click', () => { S.sound = !S.sound; store.set('sound', S.sound); paintSound(); SFX.tap(); toast(S.sound ? 'Suara aktif' : 'Suara mati'); });
  $('#brandBtn').addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
  document.addEventListener('click', ev => { if (ev.target.closest('.dock a')) SFX.tap(); });

  Spinner.init();
  Deck.init();
  Custom.init();
  Request.init();
  Pack.init();
  Cart.init();
  Lumi.init();
  Intro.init();
}
init();
