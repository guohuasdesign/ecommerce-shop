import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Filter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="flex-1">
        <label
          htmlFor="category-filter"
          className="mb-2 block text-sm font-semibold text-orange-900"
        >
          {t("filterCategory")}
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-xl border border-orange-200 bg-white py-2.5 px-4 shadow-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/60"
        >
          <option value="">{t("allCategories")}</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label
          htmlFor="sort-filter"
          className="mb-2 block text-sm font-semibold text-orange-900"
        >
          {t("sortBy")}
        </label>
        <select
          id="sort-filter"
          value={selectedSort}
          onChange={(event) => onSortChange(event.target.value)}
          className="w-full rounded-xl border border-orange-200 bg-white py-2.5 px-4 shadow-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/60"
        >
          <option value="default">{t("sortDefault")}</option>
          <option value="price-asc">{t("sortPriceAsc")}</option>
          <option value="price-desc">{t("sortPriceDesc")}</option>
          <option value="rating-asc">{t("sortRatingAsc")}</option>
          <option value="rating-desc">{t("sortRatingDesc")}</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
