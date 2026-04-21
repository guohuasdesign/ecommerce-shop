import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { t } = useLanguage();
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-medium text-orange-900">
        {t("pageLabel", { current: currentPage, total: totalPages })}
      </p>

      <nav
        aria-label="Product pagination"
        className="flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-xl border border-orange-200 bg-white px-3 py-2 text-sm font-semibold text-orange-800 transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {t("previous")}
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            aria-current={pageNumber === currentPage ? "page" : undefined}
            className={`rounded-xl px-3 py-2 text-sm font-bold transition ${
              pageNumber === currentPage
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-[0_8px_20px_rgba(249,115,22,0.25)]"
                : "border border-orange-200 bg-white text-orange-800 hover:bg-orange-50"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-xl border border-orange-200 bg-white px-3 py-2 text-sm font-semibold text-orange-800 transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {t("next")}
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
