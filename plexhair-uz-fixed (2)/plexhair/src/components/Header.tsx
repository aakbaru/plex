import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useApp } from "../state/AppContext";

export default function Header() {
  const { t, lang, setLang, cartCount } = useApp();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // FIX: close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLink = (to: string, label: string) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `block py-2 lg:py-0 text-sm font-medium transition ${
          isActive ? "text-brand-600" : "text-brand-900 hover:text-brand-600"
        }`
      }
      end={to === "/"}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-30 bg-sand-50/90 backdrop-blur border-b border-brand-100">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/products/logo.jpg"
            alt="PlexHair UZ"
            className="h-9 w-9 rounded-md object-cover"
          />
          <span className="font-display text-xl tracking-tight">
            PlexHair <span className="text-brand-500">UZ</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLink("/", t.nav.home)}
          {navLink("/catalog", t.nav.catalog)}
          {navLink("/delivery", t.nav.delivery)}
          {navLink("/contacts", t.nav.contacts)}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-full bg-white border border-brand-100 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setLang("ru")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "ru"
                  ? "bg-brand-500 text-white"
                  : "text-brand-700 hover:bg-brand-50"
              }`}
              aria-pressed={lang === "ru"}
            >
              RU
            </button>
            <button
              type="button"
              onClick={() => setLang("uz")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "uz"
                  ? "bg-brand-500 text-white"
                  : "text-brand-700 hover:bg-brand-50"
              }`}
              aria-pressed={lang === "uz"}
            >
              UZ
            </button>
          </div>

          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-brand-100 hover:border-brand-300 transition"
            aria-label={`${t.nav.cart}${cartCount > 0 ? ` (${cartCount})` : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h9.4a1.5 1.5 0 0 0 1.473-1.213l1.36-6.94a.75.75 0 0 0-.736-.897H5.106M7.5 14.25 5.106 5.2M7.5 14.25 6.045 18a1.5 1.5 0 0 0 1.398 2.05h10.057M9 21a.75.75 0 1 1-1.5 0A.75.75 0 0 1 9 21Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span aria-hidden className="absolute -top-1 -right-1 bg-brand-500 text-white text-[10px] font-semibold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-brand-100"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-100 bg-sand-50">
          <div className="container-page py-3 space-y-1">
            {navLink("/", t.nav.home)}
            {navLink("/catalog", t.nav.catalog)}
            {navLink("/delivery", t.nav.delivery)}
            {navLink("/contacts", t.nav.contacts)}
            <div className="flex items-center gap-2 pt-2 sm:hidden">
              <button
                type="button"
                onClick={() => setLang("ru")}
                aria-pressed={lang === "ru"}
                className={`px-3 py-1 rounded-full text-xs ${
                  lang === "ru" ? "bg-brand-500 text-white" : "bg-white border border-brand-100"
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang("uz")}
                aria-pressed={lang === "uz"}
                className={`px-3 py-1 rounded-full text-xs ${
                  lang === "uz" ? "bg-brand-500 text-white" : "bg-white border border-brand-100"
                }`}
              >
                UZ
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
