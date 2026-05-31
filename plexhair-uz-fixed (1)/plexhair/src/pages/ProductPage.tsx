import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useApp } from "../state/AppContext";
import { formatPrice } from "../i18n";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const { t, lang, addToCart, showToast } = useApp();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container-page py-20 text-center">
        <p>{t.catalog.empty}</p>
        <Link to="/catalog" className="btn-primary mt-6 inline-flex">
          {t.product.back}
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter(
    (p) => p.brand === product.brand && p.id !== product.id,
  ).slice(0, 4);

  return (
    <div className="container-page py-10">
      <Link
        to="/catalog"
        className="inline-flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900"
      >
        <span aria-hidden>←</span> {t.product.back}
      </Link>

      <div className="mt-6 grid lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl overflow-hidden border border-brand-100">
          <div className="aspect-[3/4] bg-sand-50">
            <img
              src={product.image}
              alt={product.name[lang]}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-wide text-brand-500 font-semibold">
            {product.brand}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl leading-tight">
            {product.name[lang]}
          </h1>
          <p className="mt-3 text-brand-800/80">{product.short[lang]}</p>

          <div className="mt-6 flex items-baseline gap-3">
            {product.oldPrice && (
              <span className="text-lg text-brand-700/60 line-through">
                {formatPrice(product.oldPrice, lang)}
              </span>
            )}
            <span className="text-3xl font-display text-brand-700">
              {formatPrice(product.price, lang)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              addToCart(product.id);
              showToast(t.product.added);
            }}
            className="btn-primary mt-6 px-7 py-3 text-base"
          >
            {t.product.addToCart}
          </button>

          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-2xl border border-brand-100 p-4">
              <dt className="text-brand-700/60 text-xs uppercase tracking-wide">
                {t.product.volume}
              </dt>
              <dd className="mt-1 font-medium">{product.volume}</dd>
            </div>
            <div className="bg-white rounded-2xl border border-brand-100 p-4">
              <dt className="text-brand-700/60 text-xs uppercase tracking-wide">
                {t.product.forHair}
              </dt>
              <dd className="mt-1 font-medium">{product.forHair[lang]}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <h3 className="text-lg">{t.product.features}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {product.features[lang].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-brand-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm text-brand-900/80 leading-relaxed whitespace-pre-line">
            {product.description[lang]}
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl">{t.product.moreFromBrand}</h2>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
