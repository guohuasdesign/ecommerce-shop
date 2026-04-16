import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const imageSrc = product.thumbnail ?? product.images?.[0];

  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={product.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-red-600 uppercase tracking-wider">
          {product.category}
        </div>
      </div>

      <div className="p-5 flex flex-col grow">
        <h3
          className="text-xl font-bold text-gray-900 mb-2 truncate"
          title={product.title}
        >
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto mb-4">
          <span className="text-2xl font-bold text-gray-900">
            $
            {typeof product.price === "number"
              ? product.price.toFixed(2)
              : "0.00"}
          </span>
          <span className="text-sm text-gray-500">#{product.id}</span>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
