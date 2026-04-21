import React from "react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

const ProductCard = ({ product, onAddToCart }) => {
  const { t } = useLanguage();
  const imageSrc = product.thumbnail ?? product.images?.[0];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-orange-100 bg-white shadow-[0_12px_26px_rgba(146,64,14,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(234,88,12,0.18)]">
      <Link to={`/products/${product.id}`} className="relative block h-56 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={product.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute right-3 top-3 rounded-full bg-orange-50/95 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-orange-700 shadow-sm">
          {product.category}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-orange-950/25 to-transparent" />
      </Link>

      <div className="p-5 flex flex-col grow">
        <Link to={`/products/${product.id}`} className="mb-2">
          <h3 className="truncate text-xl font-black text-stone-900" title={product.title}>
            {product.title}
          </h3>
        </Link>

        <p className="mb-4 grow text-sm text-stone-600 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto mb-4">
          <span className="text-2xl font-black text-orange-700">
            $
            {typeof product.price === "number"
              ? product.price.toFixed(2)
              : "0.00"}
          </span>
          <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700">
            {t("productNumber", { id: product.id })}
          </span>
        </div>

        <div className="flex gap-3">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-xl border border-orange-200 px-4 py-2 text-center font-semibold text-orange-800 transition-colors duration-200 hover:bg-orange-50"
          >
            {t("viewDetails")}
          </Link>
          <button
            type="button"
            className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 font-bold text-white shadow-[0_10px_20px_rgba(249,115,22,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:from-orange-600 hover:to-red-500"
            onClick={() => onAddToCart(product)}
          >
            {t("addToCart")}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
