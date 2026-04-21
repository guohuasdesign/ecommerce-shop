import HeroSection from "./HeroSection";
import ProductList from "./ProductList";
import SearchControls from "./SearchControls";

const Main = ({
  products,
  loading,
  error,
  isSearching,
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
  onAddToCart,
}) => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8">
      <HeroSection />
      <SearchControls
        isSearching={isSearching}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        selectedSort={selectedSort}
        onSortChange={onSortChange}
      />

      <ProductList
        products={products}
        loading={loading}
        error={error}
        isSearching={isSearching}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        onAddToCart={onAddToCart}
      />
    </main>
  );
};

export default Main;
