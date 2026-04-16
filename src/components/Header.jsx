import React from "react";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Header = ({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  cartCount,
  onToggleCart,
}) => {
  return (
    <header className="bg-gray-800 text-white px-4 py-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Storefront
            </p>
            <h1 className="text-2xl font-bold">Shop smarter, faster</h1>
          </div>
          <button
            type="button"
            className="self-start md:self-auto bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors duration-200"
            onClick={onToggleCart}
          >
            View Cart ({cartCount})
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            inHeader
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
