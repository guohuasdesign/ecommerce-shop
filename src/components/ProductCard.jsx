import React from "react";

const ProductCard = ({ product }) => {
  return (
    <article className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-blue-600 uppercase tracking-wider">
          {product.category}
        </div>
      </div>

      <div className="p-5 flex flex-col grow">
        <h3
          className="text-xl font-bold text-gray-900 mb-2 truncate"
          title={product.name}
        >
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price ? product.price.toFixed(2) : "0.00"}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
