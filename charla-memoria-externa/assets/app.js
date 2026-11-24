(function () {
  "use strict";

  var KEY = "charla-memoria-elecciones";
  var store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { store = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }

  var picks = [].slice.call(document.querySelectorAll("[data-opt]"));

  function count() {
    return Object.keys(store).filter(function (k) { return store[k]; }).length;
  }

  function paint() {
    picks.forEach(function (b) {
      var id = b.getAttribute("data-opt");
      var on = !!store[id];
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.textContent = on ? "Elegida" : "Elegir";
      var card = b.closest(".option");
      if (card) card.classList.toggle("on", on);
    });
    var c = document.getElementById("selCount");
    if (c) c.textContent = count();
  }

  picks.forEach(function (b) {
    b.addEventListener("click", function () {
      var id = b.getAttribute("data-opt");
      if (store[id]) delete store[id]; else store[id] = true;
      save();
      paint();
    });
  });
  paint();

  var only = document.getElementById("onlySel");
  if (only) {
    only.addEventListener("click", function () {
      var on = document.body.classList.toggle("only-sel");
      only.textContent = on ? "Ver todas" : "Ver solo elegidas";
      only.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  [].slice.call(document.querySelectorAll("[data-copy]")).forEach(function (b) {
    b.addEventListener("click", function () {
      var el = document.querySelector(b.getAttribute("data-copy"));
      if (!el) return;
      var txt = el.innerText.trim();
      var old = b.textContent;
      var done = function () {
        b.textContent = "Copiado";
        setTimeout(function () { b.textContent = old; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(done, function () {});
      } else {
        var ta = document.createElement("textarea");
        ta.value = txt;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });

  var bar = document.getElementById("progress");
  if (bar) {
    var upd = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    document.addEventListener("scroll", upd, { passive: true });
    upd();
  }
})();
