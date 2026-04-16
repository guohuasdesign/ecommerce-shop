import ProductList from "./ProductList";

const Main = ({
  products,
  loading,
  error,
  searchTerm,
  selectedCategory,
  onAddToCart,
}) => {
  return (
    <main className="container mx-auto px-4 py-8">
      <p className="text-lg text-gray-700 mb-4">
        Discover a wide range of products at unbeatable prices. Shop now and
        enjoy exclusive deals and discounts!
      </p>

      <ProductList
        products={products}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onAddToCart={onAddToCart}
      />
    </main>
  );
};

export default Main;
