import React, { useEffect } from "react";
import { Link } from "react-router";
import { PuffLoader } from "react-spinners";
import { useLanguage } from "../context/LanguageContext";

const NotFoundPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t("notFoundCode")} | Hua Guo Shop`;
  }, [t]);

  return (
    <main className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center">
      <div className="rounded-[2rem] border border-orange-200 bg-gradient-to-br from-white to-orange-50 px-8 py-14 shadow-[0_18px_40px_rgba(249,115,22,0.12)]">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
          <PuffLoader color="#f97316" size={56} speedMultiplier={1.1} />
        </div>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-orange-500">
          {t("notFoundCode")}
        </p>
        <h1 className="mt-3 text-4xl font-black text-stone-900">
          {t("notFoundTitle")}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
          {t("notFoundDescription")}
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-base font-bold text-white shadow-[0_12px_24px_rgba(249,115,22,0.25)] transition-all hover:-translate-y-0.5 hover:from-orange-600 hover:to-red-500"
        >
          {t("backToStorefront")}
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
