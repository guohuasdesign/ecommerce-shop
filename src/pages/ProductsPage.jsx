import React, { useEffect, useRef, useState } from "react";
import Main from "../components/Main";
import { useLanguage } from "../context/LanguageContext";
import { useProducts } from "../hooks/useProducts";

const ProductsPage = ({ onAddToCart }) => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("default");
  const [isSearching, setIsSearching] = useState(false);
  const { products, loading, error } = useProducts();
  const previousControlsRef = useRef({
    searchTerm: "",
    selectedCategory: "",
    selectedSort: "default",
  });

  const categories = [...new Set(products.map((product) => product.category))]
    .filter(Boolean)
    .sort((firstCategory, secondCategory) =>
      firstCategory.localeCompare(secondCategory),
    );

  useEffect(() => {
    document.title = `${t("catalogTitle")} | Hua Guo Shop`;
  }, [language, t]);

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

    if (!controlsChanged || loading) {
      return;
    }

    setIsSearching(true);
    const timeoutId = window.setTimeout(() => {
      setIsSearching(false);
    }, 350);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [searchTerm, selectedCategory, selectedSort, loading]);

  return (
    <Main
      products={products}
      loading={loading}
      error={error}
      isSearching={isSearching}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      selectedSort={selectedSort}
      onSortChange={setSelectedSort}
      onAddToCart={onAddToCart}
    />
  );
};

export default ProductsPage;
