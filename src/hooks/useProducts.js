import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productsApi";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");
        const items = await fetchProducts();
        setProducts(items);
      } catch (loadError) {
        setError("Could not load products.");
        console.error(loadError);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}
