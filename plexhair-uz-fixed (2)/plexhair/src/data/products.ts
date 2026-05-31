export type Lang = "ru" | "uz";

export type Product = {
  id: string;
  brand: "SilkPlex" | "ArganPlex" | "KeraPlex" | "ManPlex";
  category: "shampoo" | "conditioner" | "serum" | "set" | "3in1";
  image: string;
  volume: string;
  price: number;
  oldPrice?: number;
  name: Record<Lang, string>;
  short: Record<Lang, string>;
  description: Record<Lang, string>;
  features: Record<Lang, string[]>;
  forHair: Record<Lang, string>;
};

export const BRANDS: Record<
  Product["brand"],
  { tagline: Record<Lang, string>; color: string; image: string }
> = {
  SilkPlex: {
    tagline: {
      ru: "Шёлк и витамины — увлажнение для всех типов волос",
      uz: "Ipak va vitaminlar — barcha soch turlari uchun namlik",
    },
    color: "bg-sand-100",
    image: "/products/silkplex-set.jpg",
  },
  ArganPlex: {
    tagline: {
      ru: "Аргановое масло — восстановление сухих и окрашенных волос",
      uz: "Argan moyi — quruq va bo'yalgan sochlarni tiklaydi",
    },
    color: "bg-orange-100",
    image: "/products/arganplex-set.jpg",
  },
  KeraPlex: {
    tagline: {
      ru: "Кератин — обновление для окрашенных и повреждённых волос",
      uz: "Keratin — bo'yalgan va shikastlangan sochlarni yangilaydi",
    },
    color: "bg-rose-100",
    image: "/products/keraplex-set.jpg",
  },
  ManPlex: {
    tagline: {
      ru: "Мужская линия — алоэ и крапива для густых и сильных волос",
      uz: "Erkaklar uchun — aloe va qichitqi quyuq va kuchli sochlar uchun",
    },
    color: "bg-slate-200",
    image: "/products/manplex-set.jpg",
  },
};

export const PRODUCTS: Product[] = [
  {
    id: "silkplex-set",
    brand: "SilkPlex",
    category: "set",
    image: "/products/silkplex-set.jpg",
    volume: "340 мл + 89 мл + 340 мл",
    price: 440000,
    name: {
      ru: "SilkPlex набор: шампунь + сыворотка + кондиционер",
      uz: "SilkPlex to'plam: shampun + zardob + konditsioner",
    },
    short: {
      ru: "Полный комплекс ухода с шёлком и витаминами для всех типов волос.",
      uz: "Ipak va vitaminlar bilan to'liq parvarish to'plami.",
    },
    description: {
      ru: "Набор SilkPlex Silk & Vitamins — это полноценный домашний уход для волос всех типов. Шампунь мягко очищает без сульфатов, кондиционер увлажняет и разглаживает, а сыворотка дарит шелковистый блеск. Без парабенов и глютена, формула pH ~5.5.",
      uz: "SilkPlex Silk & Vitamins to'plami — barcha soch turlari uchun to'liq uy parvarishi. Shampun sulfatsiz tozalaydi, konditsioner namlaydi va silliqlaydi, zardob ipak yaltiroqligini beradi. Paraben va glutensiz, pH ~5.5.",
    },
    features: {
      ru: [
        "Без сульфатов, парабенов и глютена",
        "Подходит для всех типов волос",
        "Произведено в США",
        "Объём 340 + 89 + 340 мл",
      ],
      uz: [
        "Sulfat, paraben va glutensiz",
        "Barcha soch turlariga mos",
        "AQShda ishlab chiqarilgan",
        "Hajm 340 + 89 + 340 ml",
      ],
    },
    forHair: { ru: "Все типы волос", uz: "Barcha soch turlari" },
  },
  {
    id: "silkplex-shampoo",
    brand: "SilkPlex",
    category: "shampoo",
    image: "/products/silkplex-shampoo.jpg",
    volume: "340 мл",
    price: 140000,
    name: {
      ru: "SilkPlex увлажняющий шампунь",
      uz: "SilkPlex namlovchi shampun",
    },
    short: {
      ru: "Бессульфатный шампунь с шёлком и витаминами.",
      uz: "Sulfatsiz, ipak va vitaminli shampun.",
    },
    description: {
      ru: "Мягкое очищение без сульфатов сохраняет естественный гидробаланс. Шёлковые протеины и витамины делают волосы гладкими, блестящими и послушными. pH ~5.5.",
      uz: "Sulfatsiz yumshoq tozalash tabiiy namlikni saqlaydi. Ipak proteinlari va vitaminlar sochni silliq, yaltiroq va boshqariladigan qiladi. pH ~5.5.",
    },
    features: {
      ru: ["340 мл", "pH ~5.5", "Без сульфатов и парабенов"],
      uz: ["340 ml", "pH ~5.5", "Sulfat va parabensiz"],
    },
    forHair: { ru: "Все типы волос", uz: "Barcha soch turlari" },
  },
  {
    id: "silkplex-conditioner",
    brand: "SilkPlex",
    category: "conditioner",
    image: "/products/silkplex-conditioner.jpg",
    volume: "340 мл",
    price: 140000,
    name: {
      ru: "SilkPlex увлажняющий кондиционер",
      uz: "SilkPlex namlovchi konditsioner",
    },
    short: {
      ru: "Глубокое увлажнение и мягкость каждый день.",
      uz: "Chuqur namlik va har kuni yumshoqlik.",
    },
    description: {
      ru: "Кондиционер с pH ~3.5 закрывает кутикулу, разглаживает и снимает статику. Формула с шёлком и витаминами насыщает волосы влагой и питанием.",
      uz: "pH ~3.5 li konditsioner soch kutikulalarini yopadi va silliqlaydi. Ipak va vitaminlar formulasi sochni nam va oziq moddalarga to'yintiradi.",
    },
    features: {
      ru: ["340 мл", "pH ~3.5", "Без парабенов и глютена"],
      uz: ["340 ml", "pH ~3.5", "Paraben va glutensiz"],
    },
    forHair: { ru: "Все типы волос", uz: "Barcha soch turlari" },
  },
  {
    id: "silkplex-serum",
    brand: "SilkPlex",
    category: "serum",
    image: "/products/silkplex-serum.jpg",
    volume: "89 мл",
    price: 160000,
    name: {
      ru: "SilkPlex увлажняющая сыворотка",
      uz: "SilkPlex namlovchi zardob",
    },
    short: {
      ru: "Несмываемый уход для блеска и гладкости.",
      uz: "Yaltiroqlik va silliqlik uchun yuvilmaydigan parvarish.",
    },
    description: {
      ru: "Лёгкая сыворотка с шёлком и витаминами защищает волосы от сухости, придаёт блеск и облегчает расчёсывание. Используется на влажные или сухие волосы.",
      uz: "Ipak va vitaminlarli yengil zardob sochni quruqlikdan himoya qiladi, yaltiroqlik beradi va taroqlashni osonlashtiradi. Nam yoki quruq sochga ishlatiladi.",
    },
    features: {
      ru: ["89 мл", "Несмываемый уход", "Без парабенов"],
      uz: ["89 ml", "Yuvilmaydigan parvarish", "Parabensiz"],
    },
    forHair: { ru: "Все типы волос", uz: "Barcha soch turlari" },
  },

  {
    id: "arganplex-set",
    brand: "ArganPlex",
    category: "set",
    image: "/products/arganplex-set.jpg",
    volume: "355 мл + 100 мл + 355 мл",
    price: 440000,
    name: {
      ru: "ArganPlex набор для сухих и окрашенных волос",
      uz: "ArganPlex to'plam quruq va bo'yalgan sochlar uchun",
    },
    short: {
      ru: "Восстанавливающий комплекс с аргановым маслом и шёлком.",
      uz: "Argan moyi va ipakli tiklovchi to'plam.",
    },
    description: {
      ru: "ArganPlex Silk & Argan Oil — линия для интенсивного восстановления сухих и окрашенных волос. Аргановое масло и шёлковые протеины питают, придают блеск и эластичность.",
      uz: "ArganPlex Silk & Argan Oil — quruq va bo'yalgan sochlarni intensiv tiklash liniyasi. Argan moyi va ipak proteinlari oziqlantiradi va yaltiroqlik beradi.",
    },
    features: {
      ru: [
        "Аргановое масло + шёлк",
        "Для сухих и окрашенных волос",
        "Без сульфатов и парабенов",
        "Объём 355 + 100 + 355 мл",
      ],
      uz: [
        "Argan moyi + ipak",
        "Quruq va bo'yalgan sochlar uchun",
        "Sulfat va parabensiz",
        "Hajm 355 + 100 + 355 ml",
      ],
    },
    forHair: { ru: "Сухие, окрашенные волосы", uz: "Quruq, bo'yalgan sochlar" },
  },
  {
    id: "arganplex-shampoo",
    brand: "ArganPlex",
    category: "shampoo",
    image: "/products/arganplex-shampoo.jpg",
    volume: "355 мл",
    price: 140000,
    name: {
      ru: "ArganPlex восстанавливающий шампунь",
      uz: "ArganPlex tiklovchi shampun",
    },
    short: {
      ru: "Шампунь с аргановым маслом для сухих и окрашенных волос.",
      uz: "Argan moyili shampun, quruq va bo'yalgan sochlar uchun.",
    },
    description: {
      ru: "Бессульфатная формула бережно очищает волосы и восстанавливает структуру за счёт арганового масла и шёлка. pH ~5.5.",
      uz: "Sulfatsiz formula sochni avaylab tozalaydi va argan moyi orqali tiklaydi. pH ~5.5.",
    },
    features: {
      ru: ["355 мл", "Аргановое масло", "Без сульфатов"],
      uz: ["355 ml", "Argan moyi", "Sulfatsiz"],
    },
    forHair: { ru: "Сухие, окрашенные волосы", uz: "Quruq, bo'yalgan sochlar" },
  },
  {
    id: "arganplex-conditioner",
    brand: "ArganPlex",
    category: "conditioner",
    image: "/products/arganplex-conditioner.jpg",
    volume: "355 мл",
    price: 140000,
    name: {
      ru: "ArganPlex восстанавливающий кондиционер",
      uz: "ArganPlex tiklovchi konditsioner",
    },
    short: {
      ru: "Питательный кондиционер с аргановым маслом.",
      uz: "Argan moyili oziqlantiruvchi konditsioner.",
    },
    description: {
      ru: "Запечатывает кутикулу и возвращает волосам мягкость, упругость и блеск. Идеален после окрашивания и термоукладки.",
      uz: "Soch kutikulalarini yopadi va yumshoqlik, elastiklik hamda yaltiroqlikni qaytaradi.",
    },
    features: {
      ru: ["355 мл", "pH ~3.5", "Без парабенов"],
      uz: ["355 ml", "pH ~3.5", "Parabensiz"],
    },
    forHair: { ru: "Сухие, окрашенные волосы", uz: "Quruq, bo'yalgan sochlar" },
  },
  {
    id: "arganplex-serum",
    brand: "ArganPlex",
    category: "serum",
    image: "/products/arganplex-serum.jpg",
    volume: "100 мл",
    price: 160000,
    name: {
      ru: "ArganPlex восстанавливающая сыворотка",
      uz: "ArganPlex tiklovchi zardob",
    },
    short: {
      ru: "Несмываемая сыворотка с аргановым маслом.",
      uz: "Argan moyili yuvilmaydigan zardob.",
    },
    description: {
      ru: "Защищает кончики от сечения, питает и придаёт зеркальный блеск. Подходит для ежедневного применения.",
      uz: "Soch uchlarini bo'linishdan himoya qiladi va oyna kabi yaltiroqlik beradi.",
    },
    features: {
      ru: ["100 мл", "Несмываемый уход", "Без парабенов"],
      uz: ["100 ml", "Yuvilmaydigan parvarish", "Parabensiz"],
    },
    forHair: { ru: "Сухие, окрашенные волосы", uz: "Quruq, bo'yalgan sochlar" },
  },

  {
    id: "keraplex-set",
    brand: "KeraPlex",
    category: "set",
    image: "/products/keraplex-set.jpg",
    volume: "340 мл + 340 мл",
    price: 440000,
    name: {
      ru: "KeraPlex набор: шампунь + кондиционер",
      uz: "KeraPlex to'plam: shampun + konditsioner",
    },
    short: {
      ru: "Кератиновый комплекс для окрашенных и повреждённых волос.",
      uz: "Bo'yalgan va shikastlangan sochlar uchun keratinli to'plam.",
    },
    description: {
      ru: "KeraPlex Silk & Keratin восстанавливает волосы изнутри, укрепляет структуру и сохраняет цвет. Без сульфатов, парабенов и глютена.",
      uz: "KeraPlex Silk & Keratin sochni ichidan tiklaydi va rangni saqlaydi. Sulfat, paraben va glutensiz.",
    },
    features: {
      ru: ["Кератин + шёлк", "Сохраняет цвет", "Без сульфатов и парабенов"],
      uz: ["Keratin + ipak", "Rangni saqlaydi", "Sulfat va parabensiz"],
    },
    forHair: { ru: "Окрашенные, повреждённые", uz: "Bo'yalgan, shikastlangan" },
  },
  {
    id: "keraplex-shampoo",
    brand: "KeraPlex",
    category: "shampoo",
    image: "/products/keraplex-shampoo.jpg",
    volume: "340 мл",
    price: 140000,
    name: {
      ru: "KeraPlex обновляющий шампунь",
      uz: "KeraPlex yangilovchi shampun",
    },
    short: {
      ru: "Шампунь с кератином для окрашенных волос.",
      uz: "Bo'yalgan sochlar uchun keratinli shampun.",
    },
    description: {
      ru: "Бережно очищает и сохраняет насыщенность цвета. Кератин восстанавливает повреждённые участки волоса.",
      uz: "Avaylab tozalaydi va rangni saqlaydi. Keratin shikastlangan joylarni tiklaydi.",
    },
    features: {
      ru: ["340 мл", "pH ~5.5", "Без сульфатов"],
      uz: ["340 ml", "pH ~5.5", "Sulfatsiz"],
    },
    forHair: { ru: "Окрашенные, повреждённые", uz: "Bo'yalgan, shikastlangan" },
  },
  {
    id: "keraplex-conditioner",
    brand: "KeraPlex",
    category: "conditioner",
    image: "/products/keraplex-conditioner.jpg",
    volume: "340 мл",
    price: 140000,
    name: {
      ru: "KeraPlex обновляющий кондиционер",
      uz: "KeraPlex yangilovchi konditsioner",
    },
    short: {
      ru: "Кондиционер с кератином для блеска и силы.",
      uz: "Yaltiroqlik va kuch uchun keratinli konditsioner.",
    },
    description: {
      ru: "Закрывает чешуйки, сохраняет цвет и возвращает волосам прочность и эластичность.",
      uz: "Soch tarozilarini yopadi, rangni saqlaydi va kuch hamda elastiklikni qaytaradi.",
    },
    features: {
      ru: ["340 мл", "pH ~3.5", "Без парабенов"],
      uz: ["340 ml", "pH ~3.5", "Parabensiz"],
    },
    forHair: { ru: "Окрашенные, повреждённые", uz: "Bo'yalgan, shikastlangan" },
  },

  {
    id: "manplex-set",
    brand: "ManPlex",
    category: "set",
    image: "/products/manplex-set.jpg",
    volume: "340 мл + 89 мл",
    price: 440000,
    name: {
      ru: "ManPlex набор 3-в-1 + сыворотка для волос и бороды",
      uz: "ManPlex 3-in-1 to'plam + soch va soqol uchun zardob",
    },
    short: {
      ru: "Мужская линия: шампунь, кондиционер, гель для душа и сыворотка.",
      uz: "Erkaklar uchun: shampun, konditsioner, dush geli va zardob.",
    },
    description: {
      ru: "ManPlex Aloe & Nettle — экспресс-уход для мужчин. 3-в-1 экономит время в душе, а сыворотка укрепляет волосы и бороду, делая их гуще и сильнее.",
      uz: "ManPlex Aloe & Nettle — erkaklar uchun tezkor parvarish. 3-in-1 dushda vaqtni tejaydi, zardob soch va soqolni mustahkamlaydi.",
    },
    features: {
      ru: [
        "Шампунь + кондиционер + гель",
        "Алоэ и крапива",
        "Без сульфатов и парабенов",
      ],
      uz: [
        "Shampun + konditsioner + gel",
        "Aloe va qichitqi",
        "Sulfat va parabensiz",
      ],
    },
    forHair: { ru: "Мужской уход", uz: "Erkaklar uchun" },
  },
  {
    id: "manplex-3in1",
    brand: "ManPlex",
    category: "3in1",
    image: "/products/manplex-3in1.jpg",
    volume: "340 мл",
    price: 140000,
    name: {
      ru: "ManPlex 3-в-1: шампунь, кондиционер, гель для душа",
      uz: "ManPlex 3-in-1: shampun, konditsioner, dush geli",
    },
    short: {
      ru: "Один флакон для всего тела и головы.",
      uz: "Bitta shisha — butun tana va bosh uchun.",
    },
    description: {
      ru: "Алоэ и крапива укрепляют волосы и кожу головы, делают волосы гуще и сильнее. Свежий мужской аромат.",
      uz: "Aloe va qichitqi soch va bosh terisini mustahkamlaydi, sochni quyuqroq qiladi.",
    },
    features: {
      ru: ["340 мл", "pH ~5.5", "Без сульфатов"],
      uz: ["340 ml", "pH ~5.5", "Sulfatsiz"],
    },
    forHair: { ru: "Мужской уход", uz: "Erkaklar uchun" },
  },
  {
    id: "manplex-serum",
    brand: "ManPlex",
    category: "serum",
    image: "/products/manplex-serum.jpg",
    volume: "89 мл",
    price: 160000,
    name: {
      ru: "ManPlex сыворотка для волос и бороды",
      uz: "ManPlex soch va soqol uchun zardob",
    },
    short: {
      ru: "Питает волосы и бороду, делает их густыми.",
      uz: "Soch va soqolni oziqlantiradi, quyuqroq qiladi.",
    },
    description: {
      ru: "Сыворотка с алоэ и крапивой укрепляет волосяные фолликулы, увлажняет кожу и помогает бороде выглядеть ухоженно.",
      uz: "Aloe va qichitqi zardobi soch follikulalarini mustahkamlaydi va soqolni parvarishlaydi.",
    },
    features: {
      ru: ["89 мл", "Для волос и бороды", "Без парабенов"],
      uz: ["89 ml", "Soch va soqol uchun", "Parabensiz"],
    },
    forHair: { ru: "Мужской уход", uz: "Erkaklar uchun" },
  },
];
