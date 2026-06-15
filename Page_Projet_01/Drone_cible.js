function goBackOrFallback(url) {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = url;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-back').forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      goBackOrFallback('portfolio-nolan.html#projets');
    });
  });

  var progressBars = document.querySelectorAll('.prog-fill');
  progressBars.forEach(function (bar) {
    var target = Number(bar.dataset.w) || 0;
    bar.style.width = target + '%';
  });

  var anchors = document.querySelectorAll('.nav-anchors a');
  var sections = document.querySelectorAll('.section[id]');
  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 150) {
        current = section.id;
      }
    });
    anchors.forEach(function (anchor) {
      anchor.classList.toggle('active', anchor.getAttribute('href') === '#' + current);
    });
  });

  document.querySelectorAll('.section').forEach(function (section) {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.95) {
      section.classList.add('visible');
    }
  });
});
