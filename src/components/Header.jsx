import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Header = ({ cartCount, isCartOpen, onToggleCart }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-orange-200/70 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 px-4 py-5 text-white shadow-[0_16px_40px_rgba(234,88,12,0.22)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-orange-100/80">
            {t("headerStorefront")}
          </p>
          <h1 className="text-2xl font-black tracking-tight">{t("headerTitle")}</h1>
        </div>
        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex rounded-full border border-white/25 bg-white/15 p-1 backdrop-blur-sm"
          >
            <button
              type="button"
              className={`rounded-full px-3 py-1.5 text-xs font-black tracking-[0.15em] transition ${
                language === "en"
                  ? "bg-white text-orange-700"
                  : "text-white/85 hover:bg-white/10"
              }`}
              onClick={() => setLanguage("en")}
            >
              {t("languageEnglish")}
            </button>
            <button
              type="button"
              className={`rounded-full px-3 py-1.5 text-xs font-black tracking-[0.15em] transition ${
                language === "de"
                  ? "bg-white text-orange-700"
                  : "text-white/85 hover:bg-white/10"
              }`}
              onClick={() => setLanguage("de")}
            >
              {t("languageGerman")}
            </button>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/30 bg-white px-4 py-2 text-sm font-bold text-orange-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-50"
            onClick={onToggleCart}
            aria-label={t("cartButton", { count: cartCount })}
            aria-controls="cart-dialog"
            aria-expanded={isCartOpen}
          >
            {t("cartButton", { count: cartCount })}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
