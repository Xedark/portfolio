/* ── REVEAL AU CHARGEMENT + SCROLL ── */
function revealSections() {
  document.querySelectorAll('.section').forEach(function (s) {
    if (s.getBoundingClientRect().top < window.innerHeight * 0.92) {
      s.classList.add('visible');
      s.querySelectorAll('.prog-fill').forEach(function (b) {
        if (b.dataset.w) b.style.width = b.dataset.w + '%';
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', revealSections);
window.addEventListener('scroll', revealSections, { passive: true });

/* ── NAV ACTIVE AU SCROLL ── */
document.addEventListener('DOMContentLoaded', function () {
  var links    = document.querySelectorAll('.nav-anchors a');
  var sections = document.querySelectorAll('.section[id]');

  function updateActive() {
    var current = '';
    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    links.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  }

  updateActive();
  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', updateActive, { passive: true });
});

/* ── SCROLL FLUIDE DES ANCRES ── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-anchors a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (!id.startsWith('#')) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

/* ── ONGLETS (TABS) ── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrapper = btn.closest('.tabs-wrapper');
      wrapper.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      wrapper.querySelectorAll('.tab-content').forEach(function (c) {
        c.classList.remove('active');
      });
      btn.classList.add('active');
      var target = wrapper.querySelector('#' + btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
});

/* ── BOUTON RETOUR ── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-back').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = btn.getAttribute('href');
      }
    });

});