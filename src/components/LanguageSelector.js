"use client";

import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "it", name: "Italian", nativeName: "Italiano" },
    { code: "pt", name: "Portuguese", nativeName: "Português" },
    { code: "ru", name: "Russian", nativeName: "Русский" },
    { code: "ja", name: "Japanese", nativeName: "日本語" },
    { code: "ko", name: "Korean", nativeName: "한국어" },
    { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文" },
    { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "繁體中文" },
    { code: "ar", name: "Arabic", nativeName: "العربية" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
    { code: "th", name: "Thai", nativeName: "ไทย" },
    { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
  ];

  useEffect(() => {
    const hideGoogleTranslateElements = () => {
      const style = document.createElement("style");
      style.textContent = `
        .goog-te-banner-frame { display: none !important; }
        .goog-te-gadget { display: none !important; }
        .goog-te-combo { display: none !important; }
        .goog-te-gadget-simple { display: none !important; }
        .goog-te-gadget-icon { display: none !important; }
        body { top: 0px !important; }
        #google_translate_element { display: none !important; }
        .skiptranslate { display: none !important; }
      `;
      document.head.appendChild(style);

      const bannerFrame = document.querySelector(".goog-te-banner-frame");
      if (bannerFrame) {
        bannerFrame.remove();
      }

      document.body.style.top = "0px";
    };

    hideGoogleTranslateElements();

    const checkCurrentLanguage = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLang = urlParams.get("lang");
      const hash = window.location.hash;

      if (queryLang) {
        const validLanguage = languages.find((lang) => lang.code === queryLang);
        if (validLanguage) {
          setCurrentLang(queryLang);
          if (queryLang !== "en") {
            const domain =
              window.location.hostname === "localhost"
                ? ""
                : `; domain=${window.location.hostname}`;
            document.cookie = `googtrans=/en/${queryLang}; path=/${domain}`;
          }
          return;
        }
      }

      if (hash && hash !== "#") {
        const cleanHash = hash.substring(1);
        const hashLanguage = languages.find((lang) => lang.code === cleanHash);
        if (hashLanguage) {
          setCurrentLang(cleanHash);
          if (cleanHash !== "en") {
            const domain =
              window.location.hostname === "localhost"
                ? ""
                : `; domain=${window.location.hostname}`;
            document.cookie = `googtrans=/en/${cleanHash}; path=/${domain}`;
          }
          const url = new URL(window.location);
          url.searchParams.set("lang", cleanHash);
          url.hash = "";
          window.location.replace(url.toString());
          return;
        }
      }

      if (hash.includes("#googtrans")) {
        const parts = hash.split("/");
        if (parts.length >= 3) {
          const lang = parts[2];
          setCurrentLang(lang);
          const url = new URL(window.location);
          url.searchParams.set("lang", lang);
          url.hash = "";
          window.location.replace(url.toString());
        }
      } else {
        const cookies = document.cookie.split(";");
        for (let cookie of cookies) {
          const [name, value] = cookie.trim().split("=");
          if (name === "googtrans") {
            const parts = value.split("/");
            if (parts.length >= 2) {
              setCurrentLang(parts[1]);
              const url = new URL(window.location);
              url.searchParams.set("lang", parts[1]);
              url.hash = "";
              window.location.replace(url.toString());
            }
          }
        }
      }
    };

    checkCurrentLanguage();

    const handleHashChange = () => {
      hideGoogleTranslateElements();
      checkCurrentLanguage();
    };

    window.addEventListener("hashchange", handleHashChange);

    const cleanupInterval = setInterval(hideGoogleTranslateElements, 1000);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      clearInterval(cleanupInterval);
    };
  }, []);

  const handleLanguageChange = (langCode) => {
    if (langCode === "en") {
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setCurrentLang("en");

      const url = new URL(window.location);
      url.searchParams.delete("lang");
      url.hash = "";
      window.location.href = url.toString();
    } else {
      setCurrentLang(langCode);

      const domain =
        window.location.hostname === "localhost"
          ? ""
          : `; domain=${window.location.hostname}`;
      document.cookie = `googtrans=/en/${langCode}; path=/${domain}`;

      const url = new URL(window.location);
      url.searchParams.set("lang", langCode);
      url.hash = "";
      window.location.href = url.toString();

      if (typeof window.googleTranslateElementInit === "undefined") {
        window.googleTranslateElementInit = function () {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "en,es,fr,de,it,pt,ru,ja,ko,zh-CN,zh-TW,ar,hi,th,vi",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        };
      }

      if (!window.google || !window.google.translate) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.head.appendChild(script);
      }
    }

    setIsDropdownOpen(false);
  };

  const getCurrentLanguageName = () => {
    const current = languages.find((lang) => lang.code === currentLang);
    return current ? current.nativeName : "English";
  };

  return (
    <div className="relative notranslate">
      <div
        id="google_translate_element"
        className="notranslate"
        style={{ display: "none" }}
      />

      <div className="relative notranslate">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 text-sm font-medium transition-colors py-2 notranslate"
          style={{
            color: "var(--color-text-tertiary)",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "var(--color-text-primary)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "var(--color-text-tertiary)";
          }}
        >
          <Globe size={16} />
          <span className="notranslate">{getCurrentLanguageName()}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            } notranslate`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            className="absolute top-full right-0 mt-2 w-64 rounded-lg shadow-lg border z-50 max-h-96 overflow-y-auto notranslate"
            style={{
              backgroundColor: "var(--color-nav-bg)",
              borderColor: "var(--color-border-primary)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="py-2 notranslate">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center justify-between group notranslate"
                  style={{
                    color:
                      currentLang === language.code
                        ? "var(--color-green-secondary)"
                        : "var(--color-text-tertiary)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (currentLang !== language.code) {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.08)";
                      e.target.style.color = "var(--color-text-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    if (currentLang !== language.code) {
                      e.target.style.color = "var(--color-text-tertiary)";
                    }
                  }}
                >
                  <div className="notranslate">
                    <div
                      className="font-medium notranslate"
                      style={{ color: "inherit" }}
                    >
                      {language.nativeName}
                    </div>
                    <div
                      className="text-xs mt-1 notranslate"
                      style={{
                        color: "var(--color-text-quaternary)",
                        opacity: 0.8,
                      }}
                    >
                      {language.name}
                    </div>
                  </div>
                  {currentLang === language.code && (
                    <svg
                      className="w-4 h-4 notranslate"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: "var(--color-green-secondary)" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40 notranslate"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSelector;
