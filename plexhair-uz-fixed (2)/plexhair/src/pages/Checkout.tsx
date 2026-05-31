import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useApp } from "../state/AppContext";
import { formatPrice } from "../i18n";

type Payment = "click" | "payme" | "card" | "cash";

export default function Checkout() {
  const { t, lang, cart, cartTotal, clearCart } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // FIX: capture order snapshot before cart is cleared
  const [orderSnapshot, setOrderSnapshot] = useState<{
    items: typeof cart;
    total: number;
    form: typeof form;
  } | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    // FIX: city default depends on lang - use empty string so placeholder guides the user
    city: "",
    address: "",
    comment: "",
    payment: "click" as Payment,
  });

  if (cart.length === 0 && !submitted) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl">{t.checkout.title}</h1>
        <p className="mt-4 text-brand-800/70">{t.cart.empty}</p>
        <Link to="/catalog" className="btn-primary mt-6">
          {t.cart.goCatalog}
        </Link>
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError(t.checkout.requiredError);
      return;
    }
    setError(null);
    // FIX: snapshot cart & total BEFORE clearing, so buildTelegramMessage works after
    setOrderSnapshot({ items: cart, total: cartTotal, form });
    setSubmitted(true);
    clearCart();
  }

  function buildTelegramMessage(): string {
    const snap = orderSnapshot;
    if (!snap) return "";
    const lines = [
      `Новый заказ — PlexHair UZ`,
      ``,
      `Имя: ${snap.form.name}`,
      `Телефон: ${snap.form.phone}`,
      `Город: ${snap.form.city || "—"}`,
      `Адрес: ${snap.form.address}`,
      `Оплата: ${snap.form.payment}`,
      snap.form.comment ? `Комментарий: ${snap.form.comment}` : "",
      ``,
      `Заказ:`,
      ...snap.items.map((c) => {
        const p = PRODUCTS.find((x) => x.id === c.id);
        if (!p) return "";
        // FIX: use current lang instead of hardcoded "ru"
        return `• ${p.name[lang]} × ${c.qty} = ${formatPrice(p.price * c.qty, lang)}`;
      }),
      ``,
      `Итого: ${formatPrice(snap.total, lang)}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  if (submitted) {
    const tgMessage = encodeURIComponent(buildTelegramMessage());
    return (
      <div className="container-page py-20 text-center max-w-xl mx-auto">
        <div className="w-16 h-16 mx-auto rounded-full bg-brand-50 text-brand-600 grid place-items-center text-3xl">
          ✓
        </div>
        <h1 className="mt-6 text-3xl">{t.checkout.successTitle}</h1>
        <p className="mt-3 text-brand-800/70">{t.checkout.successText}</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href={`https://t.me/ssaburova_21?text=${tgMessage}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            {t.checkout.sendTelegram}
          </a>
          <Link to="/" className="btn-outline">
            {t.checkout.backHome}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl sm:text-4xl">{t.checkout.title}</h1>

      <form onSubmit={handleSubmit} className="mt-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label={t.checkout.name}
              required
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Field
              label={t.checkout.phone}
              required
              type="tel"
              placeholder="+998 __ ___ __ __"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
            />
          </div>
          <Field
            label={t.checkout.city}
            placeholder={lang === "ru" ? "Ташкент" : "Toshkent"}
            value={form.city}
            onChange={(v) => setForm({ ...form, city: v })}
          />
          <Field
            label={t.checkout.address}
            required
            value={form.address}
            onChange={(v) => setForm({ ...form, address: v })}
          />
          <Field
            label={t.checkout.comment}
            value={form.comment}
            onChange={(v) => setForm({ ...form, comment: v })}
            textarea
          />

          <div>
            <label className="text-sm font-medium text-brand-800">
              {t.checkout.payment}
            </label>
            <div className="mt-2 grid sm:grid-cols-2 gap-2">
              {(
                [
                  ["click", t.checkout.paymentClick],
                  ["payme", t.checkout.paymentPayme],
                  ["card", t.checkout.paymentCard],
                  ["cash", t.checkout.paymentCash],
                ] as Array<[Payment, string]>
              ).map(([key, label]) => (
                <label
                  key={key}
                  className={`cursor-pointer rounded-2xl border p-3 flex items-center gap-3 transition ${
                    form.payment === key
                      ? "border-brand-500 bg-brand-50"
                      : "border-brand-100 bg-white hover:border-brand-300"
                  }`}
                >
                  <input
                    type="radio"
                    className="accent-brand-500"
                    name="payment"
                    checked={form.payment === key}
                    onChange={() => setForm({ ...form, payment: key })}
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {error && (
            <p className="text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-3 py-2">
              {error}
            </p>
          )}
        </div>

        <aside className="bg-white rounded-2xl border border-brand-100 p-6 h-fit sticky top-24">
          <h2 className="text-lg font-display">{t.checkout.orderSummary}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {cart.map((c) => {
              const p = PRODUCTS.find((x) => x.id === c.id);
              if (!p) return null;
              return (
                <li key={c.id} className="flex justify-between gap-3">
                  <span className="text-brand-900/80 line-clamp-1">
                    {p.name[lang]} × {c.qty}
                  </span>
                  <span className="shrink-0 font-medium">
                    {formatPrice(p.price * c.qty, lang)}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 border-t border-brand-100 pt-4 flex items-baseline justify-between">
            <span className="text-brand-800/70 text-sm">{t.cart.total}</span>
            <span className="text-2xl font-display text-brand-700">
              {formatPrice(cartTotal, lang)}
            </span>
          </div>
          <button type="submit" className="btn-primary w-full mt-5">
            {t.checkout.submit}
          </button>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-brand-800">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      {textarea ? (
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-1 block w-full rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="mt-1 block w-full rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      )}
    </label>
  );
}
