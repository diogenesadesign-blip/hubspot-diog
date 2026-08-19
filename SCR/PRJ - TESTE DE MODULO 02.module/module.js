/* PRJ - Capa - PÓS E MBA · v1.0
   Auto-fit do título: reduz a fonte até caber no box.
   Fica no module.js (asset externo), CSP-safe. */
(function () {
  function fitOne(inner) {
    var t = inner.querySelector('.prj-posmba__title');
    if (!t) return;
    var size = inner.clientHeight;      // começa grande (altura do box)
    if (!size || size < 12) size = 40;
    t.style.fontSize = size + 'px';
    var guard = 500;
    while (guard-- > 0 && size > 8 &&
          (t.scrollHeight > inner.clientHeight || t.scrollWidth > inner.clientWidth)) {
      size -= 1;
      t.style.fontSize = size + 'px';
    }
  }
  function run() {
    var boxes = document.querySelectorAll('.prj-posmba__amber-inner');
    for (var i = 0; i < boxes.length; i++) fitOne(boxes[i]);
  }
  function init() {
    run();
    window.addEventListener('resize', run);
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(run); }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
