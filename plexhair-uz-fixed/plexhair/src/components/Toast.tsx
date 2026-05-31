import { useApp } from "../state/AppContext";

export default function Toast() {
  const { toast } = useApp();
  return (
    // FIX: add role="status" aria-live="polite" so screen readers announce the toast
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-brand-700 text-white text-sm rounded-full px-5 py-2.5 shadow-lg">
        {toast}
      </div>
    </div>
  );
}
