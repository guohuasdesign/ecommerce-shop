import { useState, useEffect } from "react";

export default function Button() {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Perform side effect here
    console.log(`Button is ${isInCart ? "in" : "out of"} cart`);

    return () => {
      // Cleanup function
      console.log("Cleanup");
    };
  }, [isInCart]);

  const handleClick = () => {
    setIsInCart(!isInCart);
  };

  return (
    <button
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 ${
        isInCart ? "bg-orange-600" : ""
      }`}
      onClick={handleClick}
    >
      {isInCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
}
