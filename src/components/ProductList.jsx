import React, { useEffect, useRef } from "react";
import { ClipLoader } from "react-spinners";
import { useSearchParams } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

const PRODUCTS_PER_PAGE = 8;

const ProductList = ({
  products,
  loading,
  error,
  isSearching,
  searchTerm,
  selectedCategory,
  selectedSort,
  onAddToCart,
}) => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const previousControlsRef = useRef({
    searchTerm,
    selectedCategory,
    selectedSort,
  });
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      const matchesSearch = normalizedSearchTerm
        ? product.title.toLowerCase().includes(normalizedSearchTerm) ||
          product.description.toLowerCase().includes(normalizedSearchTerm)
        : true;

      return matchesCategory && matchesSearch;
    })
    .sort((firstProduct, secondProduct) => {
      if (selectedSort === "price-asc") {
        return (firstProduct.price ?? 0) - (secondProduct.price ?? 0);
      }

      if (selectedSort === "price-desc") {
        return (secondProduct.price ?? 0) - (firstProduct.price ?? 0);
      }

      if (selectedSort === "rating-asc") {
        return (firstProduct.rating ?? 0) - (secondProduct.rating ?? 0);
      }

      if (selectedSort === "rating-desc") {
        return (secondProduct.rating ?? 0) - (firstProduct.rating ?? 0);
      }

      return 0;
    });
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );
  const pageParam = Number(searchParams.get("page"));
  const currentPage =
    Number.isInteger(pageParam) && pageParam > 0
      ? Math.min(pageParam, totalPages)
      : 1;
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  useEffect(() => {
    const previousControls = previousControlsRef.current;
    const controlsChanged =
      previousControls.searchTerm !== searchTerm ||
      previousControls.selectedCategory !== selectedCategory ||
      previousControls.selectedSort !== selectedSort;

    previousControlsRef.current = {
      searchTerm,
      selectedCategory,
      selectedSort,
    };

    if (!controlsChanged) {
      return;
    }

    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);
      nextParams.delete("page");
      return nextParams;
    });
  }, [searchTerm, selectedCategory, selectedSort, setSearchParams]);

  useEffect(() => {
    if (pageParam === currentPage || (!searchParams.has("page") && currentPage === 1)) {
      return;
    }

    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);

      if (currentPage === 1) {
        nextParams.delete("page");
      } else {
        nextParams.set("page", String(currentPage));
      }

      return nextParams;
    });
  }, [currentPage, pageParam, searchParams, setSearchParams]);

  function handlePageChange(nextPage) {
    const safeNextPage = Math.min(Math.max(nextPage, 1), totalPages);

    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);

      if (safeNextPage === 1) {
        nextParams.delete("page");
      } else {
        nextParams.set("page", String(safeNextPage));
      }

      return nextParams;
    });
  }
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-black text-stone-900">{t("catalogTitle")}</h2>
        <div className="min-h-8" aria-live="polite" aria-atomic="true">
          {isSearching && !loading && (
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
              <ClipLoader color="#f97316" size={18} speedMultiplier={1.1} />
              {t("updatingResults")}
            </div>
          )}
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-orange-200 bg-white/90 px-6 py-14 text-center shadow-[0_12px_30px_rgba(249,115,22,0.08)]">
          <ClipLoader color="#f97316" size={44} speedMultiplier={1.1} />
          <p className="mt-5 text-base font-semibold text-stone-700">
            {t("loadingProducts")}
          </p>
          <p className="mt-2 text-sm text-stone-500">
            {t("loadingProductsHint")}
          </p>
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && filteredProducts.length === 0 && (
        <div className="rounded-[1.5rem] border border-orange-200 bg-white/90 px-6 py-12 text-center shadow-[0_12px_30px_rgba(249,115,22,0.08)]">
          <p className="text-lg font-bold text-stone-800">
            {t("noProductsTitle")}
          </p>
          <p className="mt-2 text-sm text-stone-500">
            {t("noProductsHint")}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {!loading && !error && filteredProducts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};

export default ProductList;
