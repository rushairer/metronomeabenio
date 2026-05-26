document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.js-nav-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.toggle('js-nav-open');
    });
  });
});
