import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Cart = ({
  cartItems,
  isOpen,
  onClose,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const { t } = useLanguage();

  if (!isOpen) {
    return null;
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/40 px-4 py-8">
      <div
        id="cart-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="max-w-xl ml-auto bg-white rounded-2xl shadow-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 id="cart-title" className="text-2xl font-bold text-gray-900">
              {t("cartTitle")}
            </h2>
            <p className="text-sm text-gray-500">
              {cartItems.length === 0
                ? t("cartEmptyShort")
                : t("cartTypes", { count: cartItems.length })}
            </p>
          </div>
          <button
            type="button"
            className="text-sm font-medium text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            {t("close")}
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">{t("cartEmpty")}</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-gray-200 rounded-xl p-4"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {t("eachPrice", { price: item.price.toFixed(2) })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => onDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => onIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600 hover:text-red-700"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    {t("remove")}
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">{t("total")}</span>
              <span className="text-xl font-bold text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
