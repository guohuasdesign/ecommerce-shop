import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    headerStorefront: "Storefront",
    headerTitle: "Shop smarter, faster",
    cartButton: "View Cart ({count})",
    languageEnglish: "EN",
    languageGerman: "DE",
    heroEyebrow: "Flash Deals Marketplace",
    heroTitle: "Hot picks, bold discounts, and that add-to-cart feeling.",
    heroDescription:
      "Explore high-energy product picks, sort the winners fast, and jump from browsing to buying without losing momentum.",
    heroTagTrending: "Trending right now",
    heroTagRatings: "Best ratings, best rush",
    controlsEyebrow: "Search controls",
    controlsTitle: "Find the products worth the click.",
    searching: "Searching",
    searchLabel: "Search products",
    searchPlaceholder: "Search products...",
    filterCategory: "Filter by category",
    sortBy: "Sort by",
    sortDefault: "Default",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    sortRatingAsc: "Rating: Low to High",
    sortRatingDesc: "Rating: High to Low",
    allCategories: "All categories",
    catalogTitle: "Product Catalog",
    updatingResults: "Updating results...",
    loadingProducts: "Loading products...",
    loadingProductsHint: "Bringing the hottest picks onto the page.",
    noProductsTitle: "No products matched that search.",
    noProductsHint: "Try a different keyword, category, or sort option.",
    pageLabel: "Page {current} of {total}",
    previous: "Previous",
    next: "Next",
    viewDetails: "View Details",
    addToCart: "Add to Cart",
    productNumber: "#{id}",
    notFoundCode: "404",
    notFoundTitle: "This page ran off with the flash deals.",
    notFoundDescription:
      "The page you tried to open does not exist, moved, or never made it to the storefront. Let's get you back to the products people are actually buying.",
    backToStorefront: "Back to storefront",
    backToProducts: "Back to products",
    loadingProductDetails: "Loading product details...",
    productDetailsUnavailable: "Product details are unavailable.",
    ratingLabel: "Rating: {rating}",
    ratingFallback: "N/A",
    priceLabel: "Price",
    brandLabel: "Brand",
    stockLabel: "Stock",
    discountLabel: "Discount",
    unknownBrand: "Unknown",
    discountValue: "{value}% off",
    goBack: "Go Back",
    cartTitle: "Your Cart",
    cartEmptyShort: "No products added yet.",
    cartTypes: "{count} product types in cart",
    close: "Close",
    cartEmpty: "Your cart is empty.",
    eachPrice: "${price} each",
    remove: "Remove",
    total: "Total",
    footerText: "© 2026 E-commerce onlineshop of Hua Guo",
  },
  de: {
    headerStorefront: "Storefront",
    headerTitle: "Smarter und schneller shoppen",
    cartButton: "Warenkorb ({count})",
    languageEnglish: "EN",
    languageGerman: "DE",
    heroEyebrow: "Flash-Deals Marktplatz",
    heroTitle: "Heiße Produkte, starke Rabatte und genau dieses Kaufgefühl.",
    heroDescription:
      "Entdecke energiegeladene Produkt-Highlights, sortiere die besten Angebote schnell und springe ohne Umwege vom Stöbern zum Kaufen.",
    heroTagTrending: "Gerade im Trend",
    heroTagRatings: "Beste Bewertungen, mehr Kaufrausch",
    controlsEyebrow: "Suche & Filter",
    controlsTitle: "Finde die Produkte, auf die sich der Klick lohnt.",
    searching: "Suche läuft",
    searchLabel: "Produkte suchen",
    searchPlaceholder: "Produkte suchen...",
    filterCategory: "Nach Kategorie filtern",
    sortBy: "Sortieren nach",
    sortDefault: "Standard",
    sortPriceAsc: "Preis: niedrig nach hoch",
    sortPriceDesc: "Preis: hoch nach niedrig",
    sortRatingAsc: "Bewertung: niedrig nach hoch",
    sortRatingDesc: "Bewertung: hoch nach niedrig",
    allCategories: "Alle Kategorien",
    catalogTitle: "Produktkatalog",
    updatingResults: "Ergebnisse werden aktualisiert...",
    loadingProducts: "Produkte werden geladen...",
    loadingProductsHint: "Die spannendsten Angebote kommen gleich auf die Seite.",
    noProductsTitle: "Keine Produkte passen zu dieser Suche.",
    noProductsHint:
      "Versuche ein anderes Stichwort, eine andere Kategorie oder Sortierung.",
    pageLabel: "Seite {current} von {total}",
    previous: "Zurück",
    next: "Weiter",
    viewDetails: "Details ansehen",
    addToCart: "In den Warenkorb",
    productNumber: "#{id}",
    notFoundCode: "404",
    notFoundTitle: "Diese Seite ist mit den Flash-Deals verschwunden.",
    notFoundDescription:
      "Die angeforderte Seite existiert nicht, wurde verschoben oder hat es nie in den Shop geschafft. Bring dich zurück zu den Produkten, die wirklich gekauft werden.",
    backToStorefront: "Zurück zum Shop",
    backToProducts: "Zurück zu den Produkten",
    loadingProductDetails: "Produktdetails werden geladen...",
    productDetailsUnavailable: "Produktdetails sind nicht verfügbar.",
    ratingLabel: "Bewertung: {rating}",
    ratingFallback: "k. A.",
    priceLabel: "Preis",
    brandLabel: "Marke",
    stockLabel: "Bestand",
    discountLabel: "Rabatt",
    unknownBrand: "Unbekannt",
    discountValue: "{value}% Rabatt",
    goBack: "Zurück",
    cartTitle: "Dein Warenkorb",
    cartEmptyShort: "Noch keine Produkte hinzugefügt.",
    cartTypes: "{count} Produktarten im Warenkorb",
    close: "Schließen",
    cartEmpty: "Dein Warenkorb ist leer.",
    eachPrice: "${price} pro Stück",
    remove: "Entfernen",
    total: "Gesamt",
    footerText: "© 2026 E-Commerce-Onlineshop von Hua Guo",
  },
};

const LanguageContext = createContext(null);

function formatMessage(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return window.localStorage.getItem("language") ?? "en";
  });

  useEffect(() => {
    window.localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations.en;

    return {
      language,
      setLanguage,
      t(key, values) {
        const template = dictionary[key] ?? translations.en[key] ?? key;
        return formatMessage(template, values);
      },
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
