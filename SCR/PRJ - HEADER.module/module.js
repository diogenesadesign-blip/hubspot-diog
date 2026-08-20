/* ============================================================
   CR - Banner Curso · IPOG
   Revela o banner com fade + slide ao entrar na viewport.
   Degradação segura: se não houver JS, IntersectionObserver ou
   se o usuário preferir menos movimento, o conteúdo já aparece
   visível (a classe crbc-anim nunca é adicionada).
   ============================================================ */
(function () {
  function init() {
    var nodes = document.querySelectorAll('.crbc-wrapper');
    if (!nodes.length) return;

    var reduz = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduz || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('crbc-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    nodes.forEach(function (n) {
      n.classList.add('crbc-anim');
      io.observe(n);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
