import React from "react";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-400 via-orange-300 to-amber-400 px-6 py-10 text-white shadow-[0_24px_70px_rgba(251,146,60,0.3)] sm:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.35),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(120,53,15,0.25),_transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-12 top-6 h-40 w-40 rounded-full bg-white/15 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-14 left-12 h-36 w-36 rounded-full bg-red-500/15 blur-2xl"
      />
      <div className="relative max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-50/90">
          {t("heroEyebrow")}
        </p>
        <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
          {t("heroTitle")}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-orange-50/90 sm:text-base">
          {t("heroDescription")}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            {t("heroTagTrending")}
          </span>
          <span className="rounded-full bg-amber-950/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            {t("heroTagRatings")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
