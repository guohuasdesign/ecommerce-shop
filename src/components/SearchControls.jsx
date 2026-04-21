import React from "react";
import { BeatLoader } from "react-spinners";
import { useLanguage } from "../context/LanguageContext";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const SearchControls = ({
  isSearching,
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
}) => {
  const { t } = useLanguage();

  return (
    <section className="rounded-[1.75rem] border border-orange-200 bg-gradient-to-br from-white to-orange-50 p-5 shadow-[0_12px_30px_rgba(249,115,22,0.08)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
            {t("controlsEyebrow")}
          </p>
          <h2 className="mt-1 text-xl font-black text-stone-900">
            {t("controlsTitle")}
          </h2>
        </div>
        <div className="min-h-8" aria-live="polite" aria-atomic="true">
          {isSearching && (
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-2 text-sm font-semibold text-orange-700">
              <BeatLoader color="#f97316" size={8} margin={2} />
              {t("searching")}
            </div>
          )}
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          selectedSort={selectedSort}
          onSortChange={onSortChange}
        />
      </div>
    </section>
  );
};

export default SearchControls;
