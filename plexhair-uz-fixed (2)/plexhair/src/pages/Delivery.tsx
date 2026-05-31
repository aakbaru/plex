import { useApp } from "../state/AppContext";

export default function Delivery() {
  const { t } = useApp();
  return (
    <div className="container-page py-10 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl">{t.delivery.title}</h1>

      <div className="mt-8 space-y-5">
        <Card title={t.delivery.taskent} text={t.delivery.taskentText} />
        <Card title={t.delivery.regions} text={t.delivery.regionsText} />
        <Card title={t.delivery.payment} text={t.delivery.paymentText} />
        <div className="bg-brand-700 text-white rounded-2xl p-6">
          <p className="text-lg font-display">{t.delivery.free}</p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl border border-brand-100 p-6">
      <h2 className="text-lg font-display">{title}</h2>
      <p className="mt-2 text-sm text-brand-800/80 leading-relaxed">{text}</p>
    </div>
  );
}
