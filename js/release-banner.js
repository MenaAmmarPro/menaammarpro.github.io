/* Uniroid release banner — "notification system" v1 (honest, no push server).
 * Fetches the version feed from the app repo and shows a dismissible banner
 * when there is a release the visitor has not seen yet.
 * All sister sites share the menaammarpro.github.io origin, so one dismissal
 * hides the banner everywhere. If the feed cannot be fetched, nothing shows.
 * Usage (in any page, before </body>):
 *   <script src="_love-theme/release-banner.js"></script>
 */
(function () {
  "use strict";
  if (window.__UNIROID_BANNER__) return;
  window.__UNIROID_BANNER__ = true;

  var FEED_URL =
    "https://raw.githubusercontent.com/MenaAmmarPro/uniroid/main/feed.json";
  var SEEN_KEY = "uniroid-seen-release";

  function seenVersion() {
    try { return localStorage.getItem(SEEN_KEY); } catch (e) { return null; }
  }
  function markSeen(version) {
    try { localStorage.setItem(SEEN_KEY, version); } catch (e) { /* private mode */ }
  }

  function injectStyles() {
    var st = document.createElement("style");
    st.textContent =
      ".uniroid-banner{position:relative;z-index:60;margin:10px auto 0;max-width:" +
      "760px;font-family:inherit;border-radius:18px;padding:14px 16px;" +
      "display:flex;gap:12px;align-items:center;" +
      "background:linear-gradient(135deg,rgba(244,114,150,.16),rgba(255,255,255,.06));" +
      "border:1px solid rgba(244,114,150,.45);box-shadow:0 8px 24px rgba(244,114,150,.15);" +
      "backdrop-filter:blur(6px)}" +
      ".uniroid-banner .u-logo{width:40px;height:40px;border-radius:10px;flex:none;" +
      "background:linear-gradient(135deg,#f47296,#e05a80);display:flex;align-items:" +
      "center;justify-content:center;color:#fff;font-size:20px}" +
      ".uniroid-banner .u-body{flex:1;min-width:0}" +
      ".uniroid-banner .u-title{font-weight:700;color:#e05a80;margin:0 0 2px;" +
      "font-size:.95rem}" +
      ".uniroid-banner .u-sub{margin:0;font-size:.85rem;opacity:.85;" +
      "overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
      ".uniroid-banner a.u-btn{flex:none;text-decoration:none;font-weight:600;" +
      "font-size:.85rem;padding:8px 14px;border-radius:999px;" +
      "background:linear-gradient(135deg,#f47296,#e05a80);color:#fff;white-space:nowrap}" +
      ".uniroid-banner button.u-x{flex:none;background:none;border:none;cursor:" +
      "pointer;font-size:18px;color:inherit;opacity:.6;padding:4px 6px;line-height:1}" +
      "@media (max-width:560px){.uniroid-banner .u-sub{white-space:normal}}";
    document.head.appendChild(st);
  }

  function render(feed) {
    var rel = (feed.releases && feed.releases[0]) || {};
    var version = feed.latestVersion || rel.version || "";
    if (!version || seenVersion() === version) return; // already seen / nothing new

    var wrap = document.createElement("div");
    wrap.className = "uniroid-banner";
    var title = rel.title || ("Uniroid " + version + " is out!");
    var sub = rel.notes || "Our all-in-one app — tools, games and our story.";
    var install = feed.install ||
      "https://github.com/MenaAmmarPro/uniroid/releases/latest/download/app-release.apk";

    wrap.innerHTML =
      '<span class="u-logo">💗</span>' +
      '<div class="u-body"><p class="u-title"></p><p class="u-sub"></p></div>' +
      '<a class="u-btn" target="_blank" rel="noopener">Get the app</a>' +
      '<button class="u-x" aria-label="Dismiss">✕</button>';
    wrap.querySelector(".u-title").textContent = title;
    wrap.querySelector(".u-sub").textContent = sub;
    wrap.querySelector(".u-btn").href = install;
    wrap.querySelector(".u-x").addEventListener("click", function () {
      markSeen(version);
      wrap.remove();
    });

    var host = document.getElementById("uniroid-banner-host") ||
      document.body;
    if (host === document.body) { host.prepend(wrap); } else { host.appendChild(wrap); }
  }

  function init() {
    injectStyles();
    fetch(FEED_URL, { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (feed) { if (feed) render(feed); })
      .catch(function () { /* offline / no feed — stay silent */ });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
