/* ============================================================
   Site behaviour
   - bilingual switching (EN / ZH) with ?lang= and localStorage
   - header state on scroll, scroll-spy nav highlight
   - reveal-on-scroll, back-to-top button
   ============================================================ */
(function () {
    "use strict";

    /* ---------- i18n ---------- */
    var SUPPORTED = ["en", "zh"];

    function detectLang() {
        var qs;
        try { qs = new URLSearchParams(window.location.search).get("lang"); } catch (e) { qs = null; }
        if (qs && SUPPORTED.indexOf(qs) > -1) return qs;
        try {
            var saved = window.localStorage.getItem("site-lang");
            if (saved && SUPPORTED.indexOf(saved) > -1) return saved;
        } catch (e) { /* storage unavailable: ignore */ }
        var nav = (navigator.language || "en").toLowerCase();
        return nav.indexOf("zh") === 0 ? "zh" : "en";
    }

    function applyLang(lang) {
        var dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N.en);
        if (!dict) return;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (dict[key] != null) el.textContent = dict[key];
        });
        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-html");
            if (dict[key] != null) el.innerHTML = dict[key];
        });
        document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
            el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
                var i = pair.indexOf(":");
                if (i < 0) return;
                var attr = pair.slice(0, i).trim();
                var key = pair.slice(i + 1).trim();
                if (dict[key] != null) el.setAttribute(attr, dict[key]);
            });
        });

        document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
        document.body.setAttribute("data-lang", lang);
        if (dict["meta.title"]) document.title = dict["meta.title"];
        var md = document.querySelector('meta[name="description"]');
        if (md && dict["meta.description"]) md.setAttribute("content", dict["meta.description"]);
        var ogt = document.querySelector('meta[property="og:title"]');
        if (ogt && dict["meta.title"]) ogt.setAttribute("content", dict["meta.title"]);
        var ogd = document.querySelector('meta[property="og:description"]');
        if (ogd && dict["meta.description"]) ogd.setAttribute("content", dict["meta.description"]);

        var btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.textContent = lang === "zh" ? "EN" : "中文";
            btn.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
        }
    }

    var currentLang = detectLang();
    applyLang(currentLang);

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.addEventListener("click", function () {
            currentLang = currentLang === "zh" ? "en" : "zh";
            applyLang(currentLang);
            try { window.localStorage.setItem("site-lang", currentLang); } catch (e) { /* ignore */ }
        });
    }

    /* ---------- Header state on scroll ---------- */
    var head = document.querySelector(".mod-head");
    function onScrollHead() {
        if (!head) return;
        if (window.scrollY > 24) head.classList.add("scrolled");
        else head.classList.remove("scrolled");
    }
    onScrollHead();
    window.addEventListener("scroll", onScrollHead, { passive: true });

    /* ---------- Reveal on scroll ---------- */
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        var ro = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    ro.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
        revealEls.forEach(function (el) { ro.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add("in-view"); });
    }

    /* ---------- Scroll spy ---------- */
    var spySections = document.querySelectorAll("section[id]");
    var navLinks = {};
    document.querySelectorAll(".mod-head nav a[href^='#']").forEach(function (a) {
        navLinks[a.getAttribute("href").slice(1)] = a.parentElement;
    });

    function activateNav(id) {
        Object.keys(navLinks).forEach(function (key) {
            navLinks[key].classList.toggle("active", key === id);
        });
    }
    if ("IntersectionObserver" in window && spySections.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) activateNav(entry.target.id);
            });
        }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
        spySections.forEach(function (s) { spy.observe(s); });
    }

    /* ---------- Back to top ---------- */
    var gotop = document.querySelector(".gotop");
    if (gotop) {
        function onScrollTop() {
            if (window.scrollY > 300) gotop.classList.add("show");
            else gotop.classList.remove("show");
        }
        onScrollTop();
        window.addEventListener("scroll", onScrollTop, { passive: true });
        gotop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
})();
