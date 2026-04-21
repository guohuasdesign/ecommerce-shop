import React from "react";
import { useLanguage } from "../context/LanguageContext";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <label
        htmlFor="product-search"
        className="mb-2 text-sm font-semibold text-orange-900"
      >
        {t("searchLabel")}
      </label>
      <input
        id="product-search"
        type="text"
        placeholder={t("searchPlaceholder")}
        className="w-full rounded-xl border border-orange-200 bg-white py-2.5 px-4 shadow-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/60"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
