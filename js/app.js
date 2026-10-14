"use strict";

/*
 * menaammarpro.github.io — the hub.
 *
 * The shared theme (js/theme-main.js) already runs the starfield, theme
 * toggle, mobile nav and scroll reveal. This file only adds the hub's own
 * touches: a downloadable calendar-free footer line and the PWA registration.
 */

(function () {
  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function start() {
    setYear();
    registerServiceWorker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
