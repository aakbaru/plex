import { Link } from "react-router-dom";
import { useApp } from "../state/AppContext";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="mt-24 bg-brand-800 text-brand-50">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src="/products/logo.jpg"
              alt="PlexHair UZ"
              className="h-9 w-9 rounded-md object-cover"
            />
            <span className="font-display text-xl">PlexHair UZ</span>
          </div>
          <p className="mt-4 text-sm text-brand-100/80 max-w-md">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">{t.nav.catalog}</h4>
          <ul className="space-y-2 text-sm text-brand-100/80">
            <li><Link to="/catalog?brand=SilkPlex" className="hover:text-white">SilkPlex</Link></li>
            <li><Link to="/catalog?brand=ArganPlex" className="hover:text-white">ArganPlex</Link></li>
            <li><Link to="/catalog?brand=KeraPlex" className="hover:text-white">KeraPlex</Link></li>
            <li><Link to="/catalog?brand=ManPlex" className="hover:text-white">ManPlex</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">{t.contacts.title}</h4>
          <ul className="space-y-2 text-sm text-brand-100/80">
            <li>+998 90 109 92 69</li>
            <li>+998 90 969 92 59</li>
            <li>Telegram: @ssaburova_21</li>
            <li>Instagram: @plex_uz</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-700/60">
        <div className="container-page py-5 text-xs text-brand-100/70 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} PlexHair UZ. {t.footer.rights}</span>
          <span>Made with care in Tashkent</span>
        </div>
      </div>
    </footer>
  );
}
