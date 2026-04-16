import React from "react";

const Filter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  inHeader = false,
}) => {
  return (
    <div
      className={
        inHeader
          ? "rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
          : "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
      }
    >
      <div className={inHeader ? "" : "flex-1"}>
        <label
          htmlFor="category-filter"
          className={
            inHeader
              ? "block text-sm font-medium text-gray-200 mb-2"
              : "block text-sm font-medium text-gray-700 mb-2"
          }
        >
          Filter by category
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
          className={
            inHeader
              ? "w-full rounded-lg border border-white/15 bg-gray-900/40 py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              : "w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          }
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {!inHeader && (
        <div className="text-sm text-gray-500">
          {selectedCategory
            ? `Current: ${selectedCategory}`
            : "Showing all products"}
        </div>
      )}
    </div>
  );
};

export default Filter;
