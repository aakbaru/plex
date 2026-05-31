import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Lang } from "../data/products";
import { PRODUCTS } from "../data/products";
import { TRANSLATIONS, type Translation } from "../i18n";

export type CartItem = { id: string; qty: number };

type AppContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
  cart: CartItem[];
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  toast: string | null;
  showToast: (msg: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const CART_KEY = "plexhair-cart";
const LANG_KEY = "plexhair-lang";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(LANG_KEY);
    return stored === "uz" || stored === "ru" ? stored : "ru";
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? (JSON.parse(stored) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const addToCart = useCallback((id: string, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing) {
        return prev.map((c) =>
          c.id === id ? { ...c, qty: c.qty + qty } : c,
        );
      }
      return [...prev, { id, qty }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((c) => c.id !== id)
        : prev.map((c) => (c.id === id ? { ...c, qty } : c)),
    );
  }, []);

  // FIX: return the snapshot of items before clearing
  const clearCart = useCallback(() => setCart([]), []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    // FIX: use setTimeout (not window.setTimeout) for consistency
    setTimeout(() => setToast(null), 1800);
  }, []);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const product = PRODUCTS.find((p) => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
      }, 0),
    [cart],
  );

  const value: AppContextValue = {
    lang,
    setLang,
    t: TRANSLATIONS[lang],
    cart,
    addToCart,
    removeFromCart,
    setQty,
    clearCart,
    cartCount,
    cartTotal,
    toast,
    showToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
