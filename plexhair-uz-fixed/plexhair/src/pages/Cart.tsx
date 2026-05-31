import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useApp } from "../state/AppContext";
import { formatPrice } from "../i18n";

export default function Cart() {
  const { t, lang, cart, removeFromCart, setQty, cartTotal } = useApp();

  if (cart.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl">{t.cart.title}</h1>
        <p className="mt-4 text-brand-800/70">{t.cart.empty}</p>
        <Link to="/catalog" className="btn-primary mt-6">
          {t.cart.goCatalog}
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl sm:text-4xl">{t.cart.title}</h1>

      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-3">
          {cart.map((item) => {
            const p = PRODUCTS.find((x) => x.id === item.id);
            if (!p) return null;
            return (
              <div
                key={item.id}
                className="flex gap-4 bg-white border border-brand-100 rounded-2xl p-4"
              >
                <Link to={`/product/${p.id}`} className="shrink-0">
                  <img
                    src={p.image}
                    alt={p.name[lang]}
                    className="w-24 h-32 object-cover rounded-xl bg-sand-50"
                  />
                </Link>
                <div className="flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-brand-500 font-semibold">
                    {p.brand}
                  </span>
                  <Link
                    to={`/product/${p.id}`}
                    className="text-sm font-medium leading-tight hover:text-brand-600"
                  >
                    {p.name[lang]}
                  </Link>
                  <p className="text-xs text-brand-700/70">{p.volume}</p>

                  <div className="mt-auto flex items-end justify-between">
                    <div className="inline-flex items-center bg-sand-50 border border-brand-100 rounded-full">
                      <button
                        type="button"
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="w-8 h-8 grid place-items-center text-brand-700"
                        aria-label="-"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="w-8 h-8 grid place-items-center text-brand-700"
                        aria-label="+"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">
                        {formatPrice(p.price * item.qty, lang)}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-brand-700/60 hover:text-rose-600"
                      >
                        {t.cart.remove}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="bg-white rounded-2xl border border-brand-100 p-6 h-fit sticky top-24">
          <h2 className="text-lg font-display">{t.checkout.orderSummary}</h2>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-brand-800/70 text-sm">{t.cart.total}</span>
            <span className="text-2xl font-display text-brand-700">
              {formatPrice(cartTotal, lang)}
            </span>
          </div>
          <Link to="/checkout" className="btn-primary w-full mt-5">
            {t.cart.checkout}
          </Link>
          <Link
            to="/catalog"
            className="block text-center text-sm text-brand-700 hover:text-brand-900 mt-3"
          >
            {t.cart.goCatalog}
          </Link>
        </aside>
      </div>
    </div>
  );
}
