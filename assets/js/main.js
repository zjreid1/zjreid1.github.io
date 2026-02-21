/**
 * MYCELIUM GRID — Main JS
 * Matrix rain + floating spores + nav interactions
 */

// ============================================
// MATRIX RAIN
// ============================================
(function () {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Mix of katakana, latin, and a few botanical chars for nature feel
  const chars = 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01✦◈⊕∿∾≋'.split('');

  let cols, drops, fontSize;

  function init() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    fontSize = 13;
    cols = Math.floor(canvas.width / fontSize);
    drops = Array(cols).fill(1).map(() => Math.random() * -100);
  }

  function draw() {
    // Fade effect
    ctx.fillStyle = 'rgba(10, 13, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;

      // Leading character brighter
      const colors = ['#39ff8a', '#39ff8a', '#ff6eb4', '#c8bfa8', '#00cccc'];
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
      ctx.fillText(char, x, y * fontSize);

      // Reset drop
      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  init();
  setInterval(draw, 50);
  window.addEventListener('resize', () => {
    init();
  });
})();

// ============================================
// FLOATING SPORES
// ============================================
(function () {
  const colors = ['neon', 'teal', 'amber'];
  const count = 8;

  for (let i = 0; i < count; i++) {
    const spore = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size  = Math.random() * 6 + 3;
    const delay = Math.random() * 20;
    const dur   = Math.random() * 20 + 15;
    const left  = Math.random() * 100;

    spore.className = `spore spore--${color}`;
    spore.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
    `;

    document.body.appendChild(spore);
  }
})();

// ============================================
// NAVIGATION
// ============================================
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '[close]' : '[menu]';
    });
  }

  // Mark active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace(/^\//, ''))) {
      link.classList.add('active');
    }
  });
})();

// ============================================
// TYPED CURSOR on hero (if present)
// ============================================
(function () {
  const el = document.querySelector('[data-typewriter]');
  if (!el) return;

  const phrases = el.getAttribute('data-typewriter').split('|');
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const phrase = phrases[phraseIdx];

    if (deleting) {
      el.textContent = phrase.substring(0, charIdx--);
      if (charIdx < 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
    } else {
      el.textContent = phrase.substring(0, charIdx++);
      if (charIdx > phrase.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    }

    setTimeout(tick, deleting ? 50 : 80);
  }

  tick();
})();
