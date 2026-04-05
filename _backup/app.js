/* ═══════════════════════════════════════════════════════════
   LUCAS FELICIANO — APP.JS
   SPA router · Web Audio engine · Visualizer · Library · Links
═══════════════════════════════════════════════════════════ */

'use strict';

// ─── DATA: TRACKS ────────────────────────────────────────────
const TRACKS = [
    { id: 't1', title: 'Lado A — Origem', sub: '2021', freq: [220, 330, 440], wave: 'sine', color: '#7a9e8e', dur: 187 },
    { id: 't2', title: 'Deriva', sub: '2022', freq: [174.6, 261.6, 349.2], wave: 'triangle', color: '#a07860', dur: 214 },
    { id: 't3', title: 'Silêncio Estendido', sub: '2022', freq: [196, 293.7, 392], wave: 'sine', color: '#708498', dur: 248 },
    { id: 't4', title: 'Retorno', sub: '2023', freq: [246.9, 370.4, 493.9], wave: 'triangle', color: '#8e7a9a', dur: 165 },
    { id: 't5', title: 'Margem', sub: '2023', freq: [164.8, 247.2, 329.6], wave: 'sine', color: '#9a8a6a', dur: 201 },
    { id: 't6', title: 'Último Registro', sub: '2024', freq: [185, 277.5, 370], wave: 'triangle', color: '#7a8070', dur: 236 },
];

// ─── DATA: LINKS ─────────────────────────────────────────────
const SOCIALS = [
    { title: 'Instagram', sub: '@lucasfeliciano — fotos e bastidores', href: 'https://instagram.com' },
    { title: 'LinkedIn', sub: 'Perfil profissional', href: 'https://linkedin.com' },
    { title: 'GitHub', sub: 'Código e protótipos', href: 'https://github.com' },
    { title: 'Email', sub: 'lucas@email.com', href: 'mailto:lucas@email.com' },
];

const PROJECTS = [
    { title: 'Vitrola Virtual', sub: 'Player interativo em HTML/CSS/JS', href: '../index.html' },
    { title: 'Portfólio Sonoro', sub: 'Documentação afetiva em áudio', href: '#' },
    { title: 'Design System', sub: 'Tokens e componentes reutilizáveis', href: '#' },
];

// ─── STATE ────────────────────────────────────────────────────
const state = {
    currentPage: 'home',
    currentTrack: null,
    isPlaying: false,
    elapsed: 0,
    tickTimer: null,
    startCtxTime: 0,
    audioCtx: null,
    analyser: null,
    masterGain: null,
    oscillators: [],
    animFrame: null,
    vizW: 0, vizH: 0,
    // Background wave fields
    bgFrame: null,
    bgAmp: 0,        // current smoothed amplitude (0-1)
    bgTargetAmp: 0,  // target amplitude
    bgW: 0,
    bgH: 0,
    bgTime: 0,
};

// ─── DOM REFERENCES ───────────────────────────────────────────
const $ = id => document.getElementById(id);

const pages = document.querySelectorAll('.page');
const playBtn = $('playBtn');
const prevBtn = $('prevBtn');
const nextBtn = $('nextBtn');
const playerTitle = $('playerTitle');
const playerSub = $('playerSub');
const progressFill = $('progressFill');
const progressThumb = $('progressThumb');
const progressBar = $('progressBar');
const timeElapsed = $('timeElapsed');
const timeDuration = $('timeDuration');
const trackList = $('trackList');
const socialList = $('socialList');
const projectList = $('projectList');
const vizCanvas = $('vizCanvas');
const vizCtx = vizCanvas.getContext('2d');

// ─── SPA ROUTER ───────────────────────────────────────────────
function navigate(target) {
    if (target === state.currentPage) return;

    const fromEl = document.querySelector(`[data-page="${state.currentPage}"]`);
    const toEl = document.querySelector(`[data-page="${target}"]`);
    if (!fromEl || !toEl) return;

    // Disable current page
    fromEl.classList.add('leaving');
    fromEl.addEventListener('animationend', () => {
        fromEl.classList.remove('leaving');
        fromEl.style.opacity = '0';
        fromEl.style.pointerEvents = 'none';
        fromEl.setAttribute('aria-hidden', 'true');
    }, { once: true });

    // Activate target page
    toEl.style.opacity = '';
    toEl.style.pointerEvents = '';
    toEl.removeAttribute('aria-hidden');
    toEl.classList.add('entering');
    toEl.addEventListener('animationend', () => {
        toEl.classList.remove('entering');
        toEl.style.opacity = '1';
        toEl.style.pointerEvents = 'auto';
        // Scroll to top
        toEl.scrollTop = 0;
    }, { once: true });

    state.currentPage = target;
}

// Wire nav buttons (Home → pages)
document.querySelectorAll('[data-target]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.target));
});

// ─── AUDIO CONTEXT ────────────────────────────────────────────
function ensureAudioCtx() {
    if (state.audioCtx) return;
    state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    state.analyser = state.audioCtx.createAnalyser();
    state.analyser.fftSize = 256;
    state.analyser.smoothingTimeConstant = 0.8;
    state.masterGain = state.audioCtx.createGain();
    state.masterGain.gain.value = 0;
    state.masterGain.connect(state.analyser);
    state.analyser.connect(state.audioCtx.destination);
}

// ─── OSCILLATOR ENGINE ────────────────────────────────────────
function startOscillators(track) {
    if (!state.audioCtx) return;
    stopOscillators(false);

    state.oscillators = track.freq.map((f, i) => {
        const osc = state.audioCtx.createOscillator();
        const gain = state.audioCtx.createGain();
        osc.type = track.wave;
        osc.frequency.value = f;
        gain.gain.value = i === 0 ? 0.20 : i === 1 ? 0.09 : 0.04;
        osc.connect(gain);
        gain.connect(state.masterGain);
        osc.start();
        return { osc, gain };
    });

    // Fade in
    const t = state.audioCtx.currentTime;
    state.masterGain.gain.cancelScheduledValues(t);
    state.masterGain.gain.setValueAtTime(0, t);
    state.masterGain.gain.linearRampToValueAtTime(0.9, t + 0.5);

    state.startCtxTime = state.audioCtx.currentTime - state.elapsed;
}

function stopOscillators(fadeOut = true) {
    if (!state.audioCtx || state.oscillators.length === 0) return;
    const t = state.audioCtx.currentTime;

    if (fadeOut && state.masterGain) {
        state.masterGain.gain.cancelScheduledValues(t);
        state.masterGain.gain.setValueAtTime(state.masterGain.gain.value, t);
        state.masterGain.gain.linearRampToValueAtTime(0, t + 0.35);
        const oscs = [...state.oscillators];
        setTimeout(() => oscs.forEach(({ osc }) => { try { osc.stop(); } catch (_) { } }), 400);
    } else {
        state.oscillators.forEach(({ osc }) => { try { osc.stop(); } catch (_) { } });
        if (state.masterGain) state.masterGain.gain.value = 0;
    }
    state.oscillators = [];
}

// ─── SELECT TRACK ─────────────────────────────────────────────
function selectTrack(index) {
    const track = TRACKS[index];
    if (!track) return;

    const same = state.currentTrack === index;
    if (same) { togglePlay(); return; }

    // Stop previous
    stopOscillators(true);
    clearInterval(state.tickTimer);
    state.isPlaying = false;
    state.elapsed = 0;

    state.currentTrack = index;

    // Update player UI
    playerTitle.textContent = track.title;
    timeDuration.textContent = fmtTime(track.dur);
    timeElapsed.textContent = '0:00';
    progressFill.style.width = '0%';
    progressThumb.style.left = '0%';

    // Update track list active state
    document.querySelectorAll('.track-item').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

    // Update visualizer accent color
    vizCanvas.style.setProperty('--accent', track.color);

    // Play
    setTimeout(() => startPlay(), 160);
}

function startPlay() {
    if (state.currentTrack === null) return;
    ensureAudioCtx();
    if (state.audioCtx.state === 'suspended') state.audioCtx.resume();
    startOscillators(TRACKS[state.currentTrack]);
    setPlayState(true);
}

function togglePlay() {
    if (state.currentTrack === null) {
        selectTrack(0);
        return;
    }
    if (state.isPlaying) {
        // Pause: store elapsed
        state.elapsed = state.audioCtx
            ? state.audioCtx.currentTime - state.startCtxTime
            : state.elapsed;
        stopOscillators(true);
        setPlayState(false);
    } else {
        startPlay();
    }
}

// ─── PLAY STATE ───────────────────────────────────────────────
function setPlayState(playing) {
    state.isPlaying = playing;

    playBtn.querySelector('.icon-play').classList.toggle('hidden', playing);
    playBtn.querySelector('.icon-pause').classList.toggle('hidden', !playing);

    if (playing) {
        startViz();
        startTick();
        bgWavePlay();
    } else {
        cancelAnimationFrame(state.animFrame);
        clearInterval(state.tickTimer);
        clearViz();
        bgWavePause();
    }
}

// ─── PROGRESS TICK ────────────────────────────────────────────
function startTick() {
    clearInterval(state.tickTimer);
    const track = TRACKS[state.currentTrack];
    state.tickTimer = setInterval(() => {
        if (!state.isPlaying || !state.audioCtx) return;
        const elapsed = Math.min(state.audioCtx.currentTime - state.startCtxTime, track.dur);
        const pct = (elapsed / track.dur) * 100;
        progressFill.style.width = pct + '%';
        progressThumb.style.left = pct + '%';
        timeElapsed.textContent = fmtTime(elapsed);
        if (elapsed >= track.dur) {
            clearInterval(state.tickTimer);
            state.elapsed = 0;
            advanceTrack(1);
        }
    }, 200);
}

function advanceTrack(dir) {
    const next = ((state.currentTrack ?? -1) + dir + TRACKS.length) % TRACKS.length;
    selectTrack(next);
}

// ─── PROGRESS BAR CLICK ───────────────────────────────────────
progressBar.addEventListener('click', e => {
    if (state.currentTrack === null) return;
    const track = TRACKS[state.currentTrack];
    const rect = progressBar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    state.elapsed = pct * track.dur;
    progressFill.style.width = (pct * 100) + '%';
    progressThumb.style.left = (pct * 100) + '%';
    timeElapsed.textContent = fmtTime(state.elapsed);
    if (state.isPlaying && state.audioCtx) {
        state.startCtxTime = state.audioCtx.currentTime - state.elapsed;
    }
});

// ─── CONTROLS ─────────────────────────────────────────────────
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => advanceTrack(-1));
nextBtn.addEventListener('click', () => advanceTrack(1));

// ─── KEYBOARD ─────────────────────────────────────────────────
document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowRight') advanceTrack(1);
    if (e.code === 'ArrowLeft') advanceTrack(-1);
});

// ─── VISUALIZER ───────────────────────────────────────────────
function resizeViz() {
    const block = document.querySelector('.visualizer-block');
    if (!block) return;
    const { width, height } = block.getBoundingClientRect();
    vizCanvas.width = Math.round(width * devicePixelRatio);
    vizCanvas.height = Math.round(height * devicePixelRatio);
    vizCanvas.style.width = width + 'px';
    vizCanvas.style.height = height + 'px';
    state.vizW = vizCanvas.width;
    state.vizH = vizCanvas.height;
}

function startViz() {
    cancelAnimationFrame(state.animFrame);
    drawViz();
}

function drawViz() {
    state.animFrame = requestAnimationFrame(drawViz);
    const { vizW: W, vizH: H } = state;
    if (!W || !H) return;
    vizCtx.clearRect(0, 0, W, H);

    if (!state.analyser || !state.isPlaying) return;

    const bufLen = state.analyser.frequencyBinCount;
    const data = new Uint8Array(bufLen);
    state.analyser.getByteFrequencyData(data);

    const track = TRACKS[state.currentTrack];
    const rgb = hexToRgb(track ? track.color : '#7a9e8e');

    // Bar count: fill width
    const barCount = 48;
    const gap = Math.round(W * 0.006);
    const barW = Math.max(2, Math.floor((W - (barCount - 1) * gap) / barCount));
    const maxH = H * 0.85;

    for (let i = 0; i < barCount; i++) {
        const binIdx = Math.floor((i / barCount) * bufLen);
        const val = data[binIdx] / 255;
        const bH = Math.max(2, val * maxH);
        const x = i * (barW + gap);
        const y = (H - bH) / 2;

        vizCtx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${0.2 + val * 0.55})`;
        vizCtx.beginPath();
        vizCtx.roundRect(x, y, barW, bH, 2);
        vizCtx.fill();
    }
}

function clearViz() {
    vizCtx.clearRect(0, 0, state.vizW, state.vizH);

    // Draw gentle idle bars (static, minimal)
    if (state.currentTrack === null) return;
    const track = TRACKS[state.currentTrack];
    const rgb = hexToRgb(track.color);
    const W = state.vizW, H = state.vizH;
    const barCount = 48;
    const gap = Math.round(W * 0.006);
    const barW = Math.max(2, Math.floor((W - (barCount - 1) * gap) / barCount));

    for (let i = 0; i < barCount; i++) {
        const h = H * 0.12 + Math.sin(i * 0.42) * H * 0.06;
        const x = i * (barW + gap);
        const y = (H - h) / 2;
        vizCtx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`;
        vizCtx.beginPath();
        vizCtx.roundRect(x, y, barW, h, 2);
        vizCtx.fill();
    }
}

function hexToRgb(hex) {
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16),
    };
}

// ─── BACKGROUND WAVE ENGINE ───────────────────────────────────
const bgCanvas = $('bgWaveCanvas');
const bgCtx = bgCanvas.getContext('2d');

// 4 organic wave layers: each has its own
// color, speed (px/s), amplitude fraction, y-center fraction, phase offset
const WAVE_LAYERS = [
    // sage green
    { r: 138, g: 166, b: 142, speed: 38, amp: 0.12, yFrac: 0.38, phase: 0.00, freq: 0.0038 },
    // dusty blue
    { r: 110, g: 138, b: 168, speed: 24, amp: 0.10, yFrac: 0.55, phase: 1.20, freq: 0.0044 },
    // lavender
    { r: 162, g: 148, b: 182, speed: 52, amp: 0.09, yFrac: 0.68, phase: 2.50, freq: 0.0034 },
    // burnt amber
    { r: 192, g: 168, b: 132, speed: 18, amp: 0.08, yFrac: 0.24, phase: 4.10, freq: 0.0050 },
];

function resizeBg() {
    const dpr = Math.min(devicePixelRatio, 2); // cap at 2x for perf
    bgCanvas.width = Math.round(window.innerWidth * dpr);
    bgCanvas.height = Math.round(window.innerHeight * dpr);
    state.bgW = bgCanvas.width;
    state.bgH = bgCanvas.height;
}

function bgWavePlay() {
    state.bgTargetAmp = 1;
    bgCanvas.classList.add('wave-active');
    cancelAnimationFrame(state.bgFrame);
    drawBg();
}

function bgWavePause() {
    state.bgTargetAmp = 0.08; // idle — almost invisible
    // Keep canvas visible (don't remove class) so it fades slowly,
    // but amp target drops to near zero → waves become barely perceptible
}

let lastBgTime = 0;
function drawBg(ts = 0) {
    state.bgFrame = requestAnimationFrame(drawBg);
    const dt = Math.min((ts - lastBgTime) / 1000, 0.05); // seconds, capped
    lastBgTime = ts;
    state.bgTime += dt;

    const W = state.bgW, H = state.bgH;
    if (!W || !H) return;

    // Smooth amplitude toward target
    const lerpSpeed = state.isPlaying ? 0.025 : 0.012;
    state.bgAmp += (state.bgTargetAmp - state.bgAmp) * lerpSpeed;

    // Get live audio boost when playing
    let audioBoost = 0;
    if (state.analyser && state.isPlaying) {
        const buf = new Uint8Array(state.analyser.frequencyBinCount);
        state.analyser.getByteFrequencyData(buf);
        const avg = buf.reduce((a, b) => a + b, 0) / buf.length;
        audioBoost = (avg / 255) * 0.28; // subtle reactive push
    }

    const totalAmp = state.bgAmp + audioBoost;

    bgCtx.clearRect(0, 0, W, H);

    // Reduce wave count & detail on mobile for perf
    const isMobile = W < 900;
    const layersToRender = isMobile ? WAVE_LAYERS.slice(0, 3) : WAVE_LAYERS;
    const steps = isMobile ? 120 : 200;

    layersToRender.forEach(layer => {
        const waveH = H * layer.amp * totalAmp;
        const cy = H * layer.yFrac;
        const phaseX = state.bgTime * layer.speed;

        bgCtx.beginPath();
        bgCtx.moveTo(0, H); // start bottom-left

        for (let s = 0; s <= steps; s++) {
            const t = s / steps;
            const x = t * W;
            // Two overlapping sines give an organic irregular wave
            const y = cy
                + Math.sin(t * Math.PI * 2 * 3 * layer.freq * W + phaseX * 0.6 + layer.phase)
                * waveH
                + Math.sin(t * Math.PI * 2 * 5 * layer.freq * W - phaseX * 0.35 + layer.phase * 1.4)
                * waveH * 0.45;
            bgCtx.lineTo(x, y);
        }

        bgCtx.lineTo(W, H);
        bgCtx.closePath();

        // Max alpha 0.11 — very transparent, matte look
        const alpha = Math.max(0, Math.min(0.11, 0.04 + totalAmp * 0.07));
        bgCtx.fillStyle = `rgba(${layer.r},${layer.g},${layer.b},${alpha})`;
        bgCtx.fill();
    });
}

// ─── FORMAT TIME ──────────────────────────────────────────────
function fmtTime(s) {
    s = Math.max(0, Math.floor(s ?? 0));
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
}

// ─── RENDER TRACK LIST ────────────────────────────────────────
function renderTracks() {
    trackList.innerHTML = '';
    TRACKS.forEach((t, i) => {
        const li = document.createElement('li');
        li.className = 'track-item';
        li.setAttribute('role', 'listitem');
        li.setAttribute('tabindex', '0');
        li.setAttribute('aria-label', t.title);
        li.innerHTML = `
      <span class="track-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="track-info">
        <span class="track-name">${t.title}</span>
        <span class="track-meta">${t.sub}</span>
      </div>
      <span class="track-playing-dot"></span>
      <span class="track-dur">${fmtTime(t.dur)}</span>
    `;
        li.addEventListener('click', () => selectTrack(i));
        li.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectTrack(i); }
        });
        trackList.appendChild(li);
    });
}

// ─── RENDER LINKS ─────────────────────────────────────────────
function renderLinks() {
    function makeItem({ title, sub, href }) {
        const a = document.createElement('a');
        a.className = 'link-item';
        a.href = href;
        a.target = href.startsWith('http') ? '_blank' : '_self';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `
      <div class="link-item-text">
        <span class="link-item-title">${title}</span>
        <span class="link-item-sub">${sub}</span>
      </div>
      <span class="link-item-arrow">↗</span>
    `;
        return a;
    }

    SOCIALS.forEach(s => socialList.appendChild(makeItem(s)));
    PROJECTS.forEach(p => projectList.appendChild(makeItem(p)));
}

// ─── RESIZE ───────────────────────────────────────────────────
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resizeViz(); resizeBg(); }, 80);
}, { passive: true });

// ─── INIT ─────────────────────────────────────────────────────
function init() {
    renderTracks();
    renderLinks();
    setTimeout(resizeViz, 60);
    resizeBg();
    drawBg(); // start idle wave loop immediately

    // Stagger nav button entrance
    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(10px)';
        btn.style.transition = `opacity 0.45s ${0.3 + i * 0.1}s var(--ease-out), transform 0.45s ${0.3 + i * 0.1}s var(--ease-out)`;
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 50);
    });
}

document.addEventListener('DOMContentLoaded', init);
