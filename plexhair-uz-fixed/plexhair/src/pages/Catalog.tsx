import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BRANDS, PRODUCTS } from "../data/products";
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useApp } from "../state/AppContext";

const CATEGORIES: Array<{ key: string; cats: Product["category"][] }> = [
  { key: "filterAll", cats: ["shampoo", "conditioner", "serum", "set", "3in1"] },
  { key: "filterShampoo", cats: ["shampoo", "3in1"] },
  { key: "filterConditioner", cats: ["conditioner"] },
  { key: "filterSerum", cats: ["serum"] },
  { key: "filterSet", cats: ["set"] },
];

export default function Catalog() {
  const { t, lang } = useApp();
  const [params, setParams] = useSearchParams();
  const brand = params.get("brand") || "";
  const [filter, setFilter] = useState<string>("filterAll");

  // FIX: reset category filter when brand changes so counts stay correct
  useEffect(() => {
    setFilter("filterAll");
  }, [brand]);

  const products = useMemo(() => {
    const cats =
      CATEGORIES.find((c) => c.key === filter)?.cats ??
      CATEGORIES[0].cats;
    return PRODUCTS.filter(
      (p) =>
        cats.includes(p.category) && (brand === "" || p.brand === brand),
    );
  }, [filter, brand]);

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl sm:text-4xl">{t.catalog.title}</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            const next = new URLSearchParams(params);
            next.delete("brand");
            setParams(next);
          }}
          className={`rounded-full px-4 py-1.5 text-sm border transition ${
            brand === ""
              ? "bg-brand-500 text-white border-brand-500"
              : "bg-white text-brand-700 border-brand-100 hover:border-brand-300"
          }`}
        >
          {t.catalog.filterAll}
        </button>
        {(Object.keys(BRANDS) as Array<keyof typeof BRANDS>).map((b) => (
          <button
            key={b}
            type="button"
            onClick={() => {
              const next = new URLSearchParams(params);
              next.set("brand", b);
              setParams(next);
            }}
            className={`rounded-full px-4 py-1.5 text-sm border transition ${
              brand === b
                ? "bg-brand-500 text-white border-brand-500"
                : "bg-white text-brand-700 border-brand-100 hover:border-brand-300"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setFilter(c.key)}
            className={`rounded-full px-3 py-1 text-xs border transition ${
              filter === c.key
                ? "bg-brand-700 text-white border-brand-700"
                : "bg-sand-50 text-brand-700 border-brand-100 hover:border-brand-300"
            }`}
          >
            {t.catalog[c.key as keyof typeof t.catalog] as string}
          </button>
        ))}
      </div>

      {brand && (
        <p className="mt-6 text-sm text-brand-800/70 max-w-2xl">
          <span className="font-semibold text-brand-700">{brand}.</span>{" "}
          {BRANDS[brand as keyof typeof BRANDS]?.tagline[lang]}
        </p>
      )}

      {products.length === 0 ? (
        <p className="mt-10 text-center text-brand-700/70">{t.catalog.empty}</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
