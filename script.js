/* ─────────────────────────────────────────
   Newspaper animated rule lines + progress counter
   ──────────────────────────────────────── */

(function () {
  // ── Canvas setup ──────────────────────
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // ── Horizontal rule lines ──────────────
  const LINES = [];
  const LINE_COUNT = 28;

  function initLines() {
    LINES.length = 0;
    for (let i = 0; i < LINE_COUNT; i++) {
      LINES.push({
        y: (H / LINE_COUNT) * i + Math.random() * (H / LINE_COUNT),
        speed: (Math.random() * 0.15 + 0.04) * (Math.random() < 0.5 ? 1 : -1),
        width: Math.random() * 0.6 + 0.2,
        alpha: Math.random() * 0.4 + 0.1,
        length: Math.random() * W * 0.5 + W * 0.3,
        x: Math.random() * W,
      });
    }
  }

  function drawLines() {
    ctx.clearRect(0, 0, W, H);
    for (const l of LINES) {
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + l.length, l.y);
      ctx.strokeStyle = `rgba(10,10,10,${l.alpha})`;
      ctx.lineWidth = l.width;
      ctx.stroke();

      l.x += l.speed;
      if (l.x + l.length < 0) l.x = W;
      if (l.x > W) l.x = -l.length;
    }
    requestAnimationFrame(drawLines);
  }

  // ── Init ──────────────────────────────
  resize();
  initLines();
  drawLines();
  window.addEventListener('resize', () => { resize(); initLines(); });

  // ── Progress bar animation ─────────────
  const TARGET = 42;
  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('progress-value');

  setTimeout(() => {
    fill.style.width = TARGET + '%';
    label.textContent = TARGET + '%';
  }, 400);

})();
