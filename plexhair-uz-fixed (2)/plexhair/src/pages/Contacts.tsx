import { useApp } from "../state/AppContext";

export default function Contacts() {
  const { t } = useApp();
  return (
    <div className="container-page py-10 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl">{t.contacts.title}</h1>

      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        <Item title={t.contacts.phone} value="+998 90 109 92 69" link="tel:+998901099269" />
        <Item title={t.contacts.phone} value="+998 90 969 92 59" link="tel:+998909699259" />
        <Item title="Telegram" value="@ssaburova_21" link="https://t.me/ssaburova_21" external />
        <Item title="Instagram" value="@plex_uz" link="https://instagram.com/plex_uz" external />
      </div>
    </div>
  );
}

function Item({
  title,
  value,
  link,
  external,
}: {
  title: string;
  value: string;
  link?: string;
  external?: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl border border-brand-100 p-5">
      <div className="text-xs uppercase tracking-wide text-brand-700/60">{title}</div>
      {link ? (
        <a
          href={link}
          className="block mt-1 text-base text-brand-800 hover:text-brand-600"
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        >
          {value}
        </a>
      ) : (
        <div className="mt-1 text-base text-brand-800">{value}</div>
      )}
    </div>
  );
}
