import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import { useLanguage } from "../context/LanguageContext";
import { fetchProductById } from "../services/productsApi";

const ProductDetailPage = ({ onAddToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError("");
        const nextProduct = await fetchProductById(productId);
        setProduct(nextProduct);
      } catch (loadError) {
        setError(t("productDetailsUnavailable"));
        console.error(loadError);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId, t]);

  useEffect(() => {
    if (product?.title) {
      document.title = `${product.title} | Hua Guo Shop`;
      return;
    }

    if (loading) {
      document.title = `${t("loadingProductDetails")} | Hua Guo Shop`;
      return;
    }

    document.title = `${t("productDetailsUnavailable")} | Hua Guo Shop`;
  }, [loading, product, t]);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="inline-flex items-center gap-3 text-sm font-semibold text-orange-700">
          <ClipLoader color="#f97316" size={18} speedMultiplier={1.1} />
          {t("loadingProductDetails")}
        </div>

        <section className="mt-6 grid animate-pulse gap-8 rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_14px_32px_rgba(146,64,14,0.08)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="min-h-[420px] rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50" />

          <div className="flex flex-col">
            <div className="mb-5 flex flex-wrap gap-3">
              <div className="h-9 w-28 rounded-full bg-orange-100" />
              <div className="h-9 w-32 rounded-full bg-yellow-100" />
            </div>

            <div className="h-12 w-4/5 rounded-2xl bg-stone-200" />
            <div className="mt-4 h-4 w-full rounded-full bg-stone-100" />
            <div className="mt-3 h-4 w-11/12 rounded-full bg-stone-100" />
            <div className="mt-3 h-4 w-3/4 rounded-full bg-stone-100" />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-orange-50 p-4">
                <div className="h-4 w-16 rounded-full bg-orange-100" />
                <div className="mt-3 h-8 w-24 rounded-full bg-orange-200" />
              </div>
              <div className="rounded-2xl bg-orange-50 p-4">
                <div className="h-4 w-16 rounded-full bg-orange-100" />
                <div className="mt-3 h-8 w-28 rounded-full bg-orange-200" />
              </div>
              <div className="rounded-2xl bg-orange-50 p-4">
                <div className="h-4 w-16 rounded-full bg-orange-100" />
                <div className="mt-3 h-8 w-20 rounded-full bg-orange-200" />
              </div>
              <div className="rounded-2xl bg-orange-50 p-4">
                <div className="h-4 w-20 rounded-full bg-orange-100" />
                <div className="mt-3 h-8 w-24 rounded-full bg-orange-200" />
              </div>
            </div>

            <div className="mt-8 h-12 w-full rounded-xl bg-gradient-to-r from-orange-300 to-red-300 sm:w-44" />
          </div>
        </section>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-800"
        >
          {t("backToProducts")}
        </Link>
        <p className="mt-6 text-red-600">
          {error || t("productDetailsUnavailable")}
        </p>
      </main>
    );
  }

  const imageSrc = product.thumbnail ?? product.images?.[0];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-800"
      >
        {t("backToProducts")}
      </Link>

      <section className="mt-6 grid gap-8 rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_14px_32px_rgba(146,64,14,0.08)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="overflow-hidden rounded-2xl bg-orange-50">
          <img
            src={imageSrc}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-800">
              {product.category}
            </span>
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
              {t("ratingLabel", {
                rating: product.rating ?? t("ratingFallback"),
              })}
            </span>
          </div>

          <h1 className="text-3xl font-black text-stone-900">{product.title}</h1>
          <p className="mt-4 text-base leading-7 text-stone-600">
            {product.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-orange-50 p-4">
              <p className="text-sm text-stone-500">{t("priceLabel")}</p>
              <p className="mt-1 text-2xl font-black text-orange-700">
                ${Number(product.price ?? 0).toFixed(2)}
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-4">
              <p className="text-sm text-stone-500">{t("brandLabel")}</p>
              <p className="mt-1 text-lg font-semibold text-stone-900">
                {product.brand ?? t("unknownBrand")}
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-4">
              <p className="text-sm text-stone-500">{t("stockLabel")}</p>
              <p className="mt-1 text-lg font-semibold text-stone-900">
                {product.stock ?? 0}
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-4">
              <p className="text-sm text-stone-500">{t("discountLabel")}</p>
              <p className="mt-1 text-lg font-semibold text-stone-900">
                {t("discountValue", { value: product.discountPercentage ?? 0 })}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 text-base font-bold text-white shadow-[0_12px_26px_rgba(249,115,22,0.24)] transition-all hover:-translate-y-0.5 hover:from-orange-600 hover:to-red-500 sm:w-auto"
            onClick={() => onAddToCart(product)}
          >
            {t("addToCart")}
          </button>

          <button
            type="button"
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-orange-200 bg-white px-5 py-3 text-base font-semibold text-orange-800 transition hover:bg-orange-50 sm:w-auto"
            onClick={() => navigate(-1)}
          >
            {t("goBack")}
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
