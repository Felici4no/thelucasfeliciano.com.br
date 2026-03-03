/* ─────────────────────────────────────────
   Animated particle / orb background + progress counter
   ──────────────────────────────────────── */

(function () {
  // ── Canvas setup ──────────────────────
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  let W, H, orbs;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // ── Floating orbs ─────────────────────
  const ORB_COLORS = [
    'rgba(124, 92, 252, VAL)',   // purple
    'rgba(48, 213, 200,  VAL)',  // teal
    'rgba(247, 107, 206, VAL)',  // pink
  ];

  function makeOrb(i) {
    const color = ORB_COLORS[i % ORB_COLORS.length];
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 260 + 140,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      color,
      alpha: Math.random() * 0.12 + 0.06,
    };
  }

  function initOrbs() {
    orbs = Array.from({ length: 5 }, (_, i) => makeOrb(i));
  }

  function drawOrbs() {
    ctx.clearRect(0, 0, W, H);
    for (const o of orbs) {
      const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      const c = o.color.replace('VAL', o.alpha);
      const c0 = o.color.replace('VAL', o.alpha);
      const c1 = o.color.replace('VAL', 0);
      g.addColorStop(0, c0);
      g.addColorStop(1, c1);
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();

      o.x += o.dx;
      o.y += o.dy;
      if (o.x < -o.r) o.x = W + o.r;
      if (o.x > W + o.r) o.x = -o.r;
      if (o.y < -o.r) o.y = H + o.r;
      if (o.y > H + o.r) o.y = -o.r;
    }
    requestAnimationFrame(drawOrbs);
  }

  // ── Init ──────────────────────────────
  resize();
  initOrbs();
  drawOrbs();
  window.addEventListener('resize', () => { resize(); initOrbs(); });

  // ── Progress bar animation ─────────────
  const TARGET = 42; // % — customize at will
  const fill  = document.getElementById('progress-fill');
  const label = document.getElementById('progress-value');

  let current = 0;
  function tick() {
    if (current >= TARGET) {
      fill.style.width  = TARGET + '%';
      label.textContent = TARGET + '%';
      return;
    }
    current += 0.5;
    fill.style.width  = current + '%';
    label.textContent = Math.floor(current) + '%';
    requestAnimationFrame(tick);
  }

  // Start after short delay so the page animation finishes first
  setTimeout(() => {
    fill.style.width = TARGET + '%';
    label.textContent = TARGET + '%';
  }, 400);

})();
