import { Link } from "react-router-dom";
import { useApp } from "../state/AppContext";
import { BRANDS, PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { t, lang } = useApp();
  const featured = PRODUCTS.filter((p) => p.category === "set");

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-sand-50 to-sand-100">
        <div className="container-page py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              {lang === "ru" ? "Доставка по всему Узбекистану" : "O'zbekiston bo'ylab yetkazib berish"}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display leading-tight tracking-tight">
              {t.hero.title}
            </h1>
            <p className="mt-5 text-lg text-brand-800/80 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/catalog" className="btn-primary">
                {t.hero.cta}
              </Link>
              <a href="#brands" className="btn-outline">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <dt className="text-2xl font-display text-brand-700">4</dt>
                <dd className="text-xs text-brand-800/70">
                  {lang === "ru" ? "бренда в наличии" : "brend mavjud"}
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-display text-brand-700">15+</dt>
                <dd className="text-xs text-brand-800/70">
                  {lang === "ru" ? "видов продукции" : "mahsulot turi"}
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-display text-brand-700">24/7</dt>
                <dd className="text-xs text-brand-800/70">
                  {lang === "ru" ? "приём заказов онлайн" : "online buyurtma"}
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-brand-200/40 rounded-[3rem] blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {/* FIX: add meaningful alt text for hero images (accessibility) */}
              <img
                src="/products/silkplex-set.jpg"
                alt="SilkPlex набор — шампунь, сыворотка, кондиционер"
                className="rounded-3xl aspect-[3/4] object-cover w-full shadow-xl"
              />
              <img
                src="/products/arganplex-set.jpg"
                alt="ArganPlex набор — с аргановым маслом"
                className="rounded-3xl aspect-[3/4] object-cover w-full shadow-xl mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="container-page py-16">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <h2 className="text-3xl sm:text-4xl">{t.brands.title}</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(Object.keys(BRANDS) as Array<keyof typeof BRANDS>).map((b) => (
            <Link
              key={b}
              to={`/catalog?brand=${b}`}
              className="group rounded-3xl overflow-hidden bg-white border border-brand-100 hover:shadow-md transition"
            >
              <div className={`${BRANDS[b].color} aspect-[4/5] overflow-hidden`}>
                <img
                  src={BRANDS[b].image}
                  alt={`${b} — ${BRANDS[b].tagline[lang]}`}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-[1.03] transition"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl">{b}</h3>
                <p className="text-sm text-brand-800/70 mt-1 line-clamp-2">
                  {BRANDS[b].tagline[lang]}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm text-brand-600 font-medium">
                  {t.brands.view}
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-3xl sm:text-4xl">{t.advantages.title}</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.advantages.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-brand-100 p-6"
            >
              <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-800/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
          <h2 className="text-3xl sm:text-4xl">
            {lang === "ru" ? "Хиты — наборы" : "Hit — to'plamlar"}
          </h2>
          <Link to="/catalog" className="btn-outline">
            {t.nav.catalog}
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
