import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import { useApp } from "../state/AppContext";
import { formatPrice } from "../i18n";

export default function ProductCard({ product }: { product: Product }) {
  const { lang, addToCart, showToast, t } = useApp();
  return (
    <div className="group bg-white rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-md transition overflow-hidden flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-sand-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name[lang]}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition"
          />
        </div>
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <span className="text-xs uppercase tracking-wide text-brand-500 font-semibold">
          {product.brand}
        </span>
        <Link
          to={`/product/${product.id}`}
          className="mt-1 text-sm font-medium leading-tight line-clamp-2 hover:text-brand-600"
        >
          {product.name[lang]}
        </Link>
        <p className="mt-1 text-xs text-brand-700/70">{product.volume}</p>
        <div className="mt-auto pt-3 flex items-end justify-between gap-2">
          <div>
            {product.oldPrice && (
              <div className="text-xs text-brand-700/60 line-through">
                {formatPrice(product.oldPrice, lang)}
              </div>
            )}
            <div className="text-base font-semibold text-brand-700">
              {formatPrice(product.price, lang)}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              addToCart(product.id);
              showToast(t.product.added);
            }}
            className="btn-primary !px-3 !py-2 text-xs"
          >
            {t.product.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
}
