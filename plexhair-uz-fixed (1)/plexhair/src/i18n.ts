import type { Lang } from "./data/products";

type Dictionary = {
  nav: { home: string; catalog: string; brands: string; delivery: string; contacts: string; cart: string };
  hero: { title: string; subtitle: string; cta: string; ctaSecondary: string };
  advantages: { title: string; items: { title: string; text: string }[] };
  brands: { title: string; view: string };
  catalog: {
    title: string;
    filterAll: string;
    filterShampoo: string;
    filterConditioner: string;
    filterSerum: string;
    filterSet: string;
    empty: string;
  };
  product: {
    addToCart: string;
    added: string;
    forHair: string;
    volume: string;
    brand: string;
    features: string;
    back: string;
    price: string;
    moreFromBrand: string;
  };
  cart: {
    title: string;
    empty: string;
    goCatalog: string;
    total: string;
    checkout: string;
    remove: string;
    qty: string;
  };
  checkout: {
    title: string;
    name: string;
    phone: string;
    city: string;
    address: string;
    comment: string;
    payment: string;
    paymentClick: string;
    paymentPayme: string;
    paymentCard: string;
    paymentCash: string;
    submit: string;
    successTitle: string;
    successText: string;
    orderSummary: string;
    backHome: string;
    sendTelegram: string;
    requiredError: string;
  };
  delivery: {
    title: string;
    taskent: string;
    taskentText: string;
    regions: string;
    regionsText: string;
    payment: string;
    paymentText: string;
    free: string;
  };
  contacts: {
    title: string;
    phone: string;
    address: string;
    addressValue: string;
    hours: string;
    hoursValue: string;
  };
  footer: { rights: string; tagline: string };
  common: { sum: string; currency: string; lang: string };
};

export const TRANSLATIONS: Record<Lang, Dictionary> = {
  ru: {
    nav: {
      home: "Главная",
      catalog: "Каталог",
      brands: "Бренды",
      delivery: "Доставка",
      contacts: "Контакты",
      cart: "Корзина",
    },
    hero: {
      title: "Профессиональный уход для ваших волос",
      subtitle:
        "Шампуни, кондиционеры и сыворотки SilkPlex, ArganPlex, KeraPlex и ManPlex с доставкой по всему Узбекистану.",
      cta: "Перейти в каталог",
      ctaSecondary: "Подобрать уход",
    },
    advantages: {
      title: "Почему выбирают PlexHair UZ",
      items: [
        {
          title: "Оригинальная продукция",
          text: "Поставки напрямую от производителя. Сертификаты и проверка качества каждой партии.",
        },
        {
          title: "Доставка по Узбекистану",
          text: "Ташкент — день в день, в регионы — 2–4 дня курьерской службой.",
        },
        {
          title: "Удобная оплата",
          text: "Click, Payme, Humo, Uzcard или наличными при получении.",
        },
        {
          title: "Профессиональная консультация",
          text: "Подберём средства под ваш тип волос — напишите нам в Telegram.",
        },
      ],
    },
    brands: {
      title: "Бренды в наличии",
      view: "Смотреть линейку",
    },
    catalog: {
      title: "Каталог",
      filterAll: "Все",
      filterShampoo: "Шампуни",
      filterConditioner: "Кондиционеры",
      filterSerum: "Сыворотки",
      filterSet: "Наборы",
      empty: "Товары не найдены",
    },
    product: {
      addToCart: "В корзину",
      added: "Добавлено в корзину",
      forHair: "Для волос",
      volume: "Объём",
      brand: "Бренд",
      features: "Особенности",
      back: "Назад в каталог",
      price: "Цена",
      moreFromBrand: "Другие товары бренда",
    },
    cart: {
      title: "Корзина",
      empty: "Ваша корзина пока пуста",
      goCatalog: "Перейти в каталог",
      total: "Итого",
      checkout: "Оформить заказ",
      remove: "Удалить",
      qty: "Кол-во",
    },
    checkout: {
      title: "Оформление заказа",
      name: "Имя и фамилия",
      phone: "Номер телефона",
      city: "Город",
      address: "Адрес доставки",
      comment: "Комментарий к заказу",
      payment: "Способ оплаты",
      paymentClick: "Click",
      paymentPayme: "Payme",
      paymentCard: "Карта Humo / Uzcard",
      paymentCash: "Наличные при получении",
      submit: "Подтвердить заказ",
      successTitle: "Спасибо за заказ!",
      successText:
        "Мы свяжемся с вами в течение 15 минут для подтверждения. Хорошего дня!",
      orderSummary: "Ваш заказ",
      backHome: "На главную",
      sendTelegram: "Отправить заказ в Telegram",
      requiredError: "Пожалуйста, заполните обязательные поля",
    },
    delivery: {
      title: "Доставка и оплата",
      taskent: "Доставка по Ташкенту",
      taskentText: "В день заказа при оформлении до 16:00. Стоимость 30 000 сум.",
      regions: "Доставка в регионы",
      regionsText:
        "BTS, Yandex Delivery, Uzbekistan Post — 2–4 рабочих дня. Стоимость от 35 000 сум.",
      payment: "Способы оплаты",
      paymentText:
        "Click, Payme, переводом на Humo / Uzcard или наличными курьеру.",
      free: "Бесплатная доставка по Ташкенту при заказе от 500 000 сум.",
    },
    contacts: {
      title: "Контакты",
      phone: "Телефон",
      address: "Адрес",
      addressValue: "г. Ташкент, ул. Амира Темура 15",
      hours: "Часы работы",
      hoursValue: "Пн–Сб: 9:00–20:00, Вс: 10:00–18:00",
    },
    footer: {
      rights: "Все права защищены.",
      tagline: "Профессиональный уход для волос с доставкой по Узбекистану.",
    },
    common: {
      sum: "сум",
      currency: "UZS",
      lang: "Язык",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      catalog: "Katalog",
      brands: "Brendlar",
      delivery: "Yetkazib berish",
      contacts: "Kontaktlar",
      cart: "Savat",
    },
    hero: {
      title: "Sochlaringiz uchun professional parvarish",
      subtitle:
        "SilkPlex, ArganPlex, KeraPlex va ManPlex shampun va parvarish vositalari butun O'zbekiston bo'ylab yetkazib beriladi.",
      cta: "Katalogga o'tish",
      ctaSecondary: "Parvarishni tanlash",
    },
    advantages: {
      title: "Nega PlexHair UZ?",
      items: [
        {
          title: "Original mahsulot",
          text: "To'g'ridan-to'g'ri ishlab chiqaruvchidan. Har bir partiya sifati tekshiriladi.",
        },
        {
          title: "O'zbekiston bo'ylab yetkazib berish",
          text: "Toshkentga — kun ichida, viloyatlarga — 2–4 kun ichida kuryer orqali.",
        },
        {
          title: "Qulay to'lov",
          text: "Click, Payme, Humo, Uzcard yoki naqd kuryerga.",
        },
        {
          title: "Professional maslahat",
          text: "Soch turingizga mos vositani tanlab beramiz — Telegramga yozing.",
        },
      ],
    },
    brands: {
      title: "Mavjud brendlar",
      view: "Liniyani ko'rish",
    },
    catalog: {
      title: "Katalog",
      filterAll: "Hammasi",
      filterShampoo: "Shampunlar",
      filterConditioner: "Konditsionerlar",
      filterSerum: "Zardoblar",
      filterSet: "To'plamlar",
      empty: "Mahsulot topilmadi",
    },
    product: {
      addToCart: "Savatga",
      added: "Savatga qo'shildi",
      forHair: "Soch turi",
      volume: "Hajm",
      brand: "Brend",
      features: "Xususiyatlari",
      back: "Katalogga qaytish",
      price: "Narx",
      moreFromBrand: "Brendning boshqa mahsulotlari",
    },
    cart: {
      title: "Savat",
      empty: "Savatingiz bo'sh",
      goCatalog: "Katalogga o'tish",
      total: "Jami",
      checkout: "Buyurtma berish",
      remove: "O'chirish",
      qty: "Soni",
    },
    checkout: {
      title: "Buyurtmani rasmiylashtirish",
      name: "Ism va familiya",
      phone: "Telefon raqami",
      city: "Shahar",
      address: "Yetkazib berish manzili",
      comment: "Izoh",
      payment: "To'lov turi",
      paymentClick: "Click",
      paymentPayme: "Payme",
      paymentCard: "Humo / Uzcard karta",
      paymentCash: "Qabul qilganda naqd",
      submit: "Buyurtmani tasdiqlash",
      successTitle: "Buyurtma uchun rahmat!",
      successText:
        "15 daqiqa ichida tasdiqlash uchun bog'lanamiz. Yaxshi kun!",
      orderSummary: "Buyurtmangiz",
      backHome: "Bosh sahifaga",
      sendTelegram: "Buyurtmani Telegramga yuborish",
      requiredError: "Iltimos, majburiy maydonlarni to'ldiring",
    },
    delivery: {
      title: "Yetkazib berish va to'lov",
      taskent: "Toshkent bo'ylab yetkazib berish",
      taskentText:
        "Soat 16:00 gacha buyurtma berilsa, kun ichida. Narxi 30 000 so'm.",
      regions: "Viloyatlarga yetkazib berish",
      regionsText:
        "BTS, Yandex Delivery, O'zbekiston Pochtasi — 2–4 ish kuni. Narxi 35 000 so'mdan.",
      payment: "To'lov usullari",
      paymentText:
        "Click, Payme, Humo / Uzcard kartaga o'tkazish yoki kuryerga naqd.",
      free: "500 000 so'mdan buyurtmaga Toshkent bo'ylab bepul yetkazib berish.",
    },
    contacts: {
      title: "Kontaktlar",
      phone: "Telefon",
      address: "Manzil",
      addressValue: "Toshkent sh., Amir Temur ko'chasi 15",
      hours: "Ish vaqti",
      hoursValue: "Du–Sh: 9:00–20:00, Yak: 10:00–18:00",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      tagline:
        "O'zbekiston bo'ylab yetkazib berish bilan professional soch parvarishi.",
    },
    common: {
      sum: "so'm",
      currency: "UZS",
      lang: "Til",
    },
  },
};

export type Translation = Dictionary;

export function formatPrice(value: number, lang: Lang): string {
  const sum = TRANSLATIONS[lang].common.sum;
  return `${value.toLocaleString("ru-RU")} ${sum}`;
}
