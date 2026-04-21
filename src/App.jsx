import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useCart } from "./hooks/useCart";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const {
    cartItems,
    isCartOpen,
    cartCount,
    handleAddToCart,
    handleRemoveFromCart,
    handleToggleCart,
    handleCloseCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        onToggleCart={handleToggleCart}
      />
      <div className="pt-24">
        <Routes>
          <Route
            path="/"
            element={<ProductsPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage onAddToCart={handleAddToCart} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Cart
          cartItems={cartItems}
          isOpen={isCartOpen}
          onClose={handleCloseCart}
          onRemoveItem={handleRemoveFromCart}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
