/* ── REVEAL ON SCROLL ── */
function revealSections() {
  document.querySelectorAll('.section').forEach(function (section) {
    var rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      section.classList.add('visible');
    }
  });
}

/* Déclenche au chargement initial ET au scroll */
document.addEventListener('DOMContentLoaded', revealSections);
window.addEventListener('scroll', revealSections, { passive: true });

/* ── BARRES DE PROGRESSION ── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.prog-fill').forEach(function (bar) {
    bar.style.width = (Number(bar.dataset.w) || 0) + '%';
  });
});

/* ── NAV ACTIVE AU SCROLL ── */
(function () {
  var anchors  = document.querySelectorAll('.nav-anchors a');
  var sections = document.querySelectorAll('.section[id]');

  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 150) current = s.id;
    });
    anchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
})();

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
});