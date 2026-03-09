/* ============================================================
   Language Switcher — Ali Mushkil Kusha
   Handles navigation between EN / Urdu / Roman Urdu versions
   ============================================================ */

(function () {
  'use strict';

  // Determine current language from the path
  function getCurrentLang() {
    var path = window.location.pathname;
    if (path.indexOf('/ur/') !== -1) return 'ur';
    if (path.indexOf('/ru/') !== -1) return 'ru';
    return 'en';
  }

  // Build equivalent URL for target language
  function buildLangUrl(targetLang) {
    var loc = window.location;
    var path = loc.pathname;
    var currentLang = getCurrentLang();

    // Strip current language prefix to get the base path
    var basePath;
    if (currentLang === 'ur') {
      basePath = path.replace(/\/ur\//, '/');
    } else if (currentLang === 'ru') {
      basePath = path.replace(/\/ru\//, '/');
    } else {
      basePath = path;
    }

    // Build new path
    if (targetLang === 'en') {
      return basePath;
    }

    // For ur/ru, insert the language folder after the root
    // Handle both /index.html and /pages/xyz.html patterns
    var parts = basePath.split('/');
    // Find where the site root is and insert language folder after it
    // basePath could be like /index.html or /pages/biography.html
    // We need: /ur/index.html or /ur/pages/biography.html

    // Simple approach: insert /ur/ or /ru/ before the first meaningful segment
    var lastSlash = basePath.lastIndexOf('/');
    var dir = basePath.substring(0, lastSlash + 1);
    var file = basePath.substring(lastSlash + 1);

    // Check if we're already at the root level or in /pages/
    if (dir.endsWith('/pages/')) {
      // /pages/biography.html → /ur/pages/biography.html
      var rootDir = dir.replace('/pages/', '/');
      return rootDir + targetLang + '/pages/' + file;
    } else {
      // /index.html → /ur/index.html
      return dir + targetLang + '/' + file;
    }
  }

  // Initialize
  function init() {
    var currentLang = getCurrentLang();
    var buttons = document.querySelectorAll('.lang-btn');

    buttons.forEach(function (btn) {
      var lang = btn.getAttribute('data-lang');

      // Mark active
      btn.classList.toggle('active', lang === currentLang);

      // Click handler
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (lang === currentLang) return;

        // Save preference
        try { localStorage.setItem('amk-lang', lang); } catch (e) { /* ignore */ }

        // Navigate
        window.location.href = buildLangUrl(lang);
      });
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
