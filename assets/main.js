/* 纸上 · ON PAPER — 阅读进度条 */
(function () {
  var bar = document.getElementById('progress');
  if (!bar) return;
  var ticking = false;
  function update() {
    ticking = false;
    var doc = document.documentElement;
    var sc = doc.scrollTop || document.body.scrollTop;
    var mh = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (mh > 0 ? (sc / mh) * 100 : 0) + '%';
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
