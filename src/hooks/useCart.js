import { useState } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleAddToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  }

  function handleRemoveFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    );
  }

  function handleToggleCart() {
    setIsCartOpen((currentOpenState) => !currentOpenState);
  }

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  function handleIncreaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function handleDecreaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== productId) {
          return item;
        }

        if (item.quantity === 1) {
          return [];
        }

        return { ...item, quantity: item.quantity - 1 };
      }),
    );
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return {
    cartItems,
    isCartOpen,
    cartCount,
    handleAddToCart,
    handleRemoveFromCart,
    handleToggleCart,
    handleCloseCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };
}
