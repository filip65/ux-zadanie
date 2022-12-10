export interface Restaurant {
  slug: string;
  name: string;
  rating: number;
  image: string;
  description: string;
  delivery: {
    cost: number;
    time: {
      from: string;
      to: string;
    };
    duration: string;
  };
  menu: { name: string; meals: Meal[] }[];
}

export interface Meal {
  name: string;
  ingredients: string;
  price: number;
  extra?: { name: string; price: number }[];
  image: string;
}

export const getRestaurantBySlug = (slug?: string) =>
  allRestaurants?.find((item) => item.slug === slug);

export const allRestaurants: Restaurant[] = [
  {
    slug: "kebab-haus",
    name: "Kebab Haus",
    rating: 4.8,
    image: "/images/kebab.jpg",
    description: "Najlepší kebab v meste! 🍢  Durum, pide alebo šalát 😍",
    delivery: {
      cost: 1.9,
      time: {
        from: "8:00",
        to: "22:00",
      },
      duration: "15 - 30min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "napoli",
    name: "Napoli",
    rating: 4.3,
    image: "/images/pasta.jpg",
    description: "najlepsie",
    delivery: {
      cost: 2.2,
      time: {
        from: "8:30",
        to: "16:00",
      },
      duration: "30 - 45min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
];

export const topRestaurants: Restaurant[] = [
  {
    slug: "kebab-haus",
    name: "Kebab Haus",
    rating: 4.8,
    image: "/images/kebab.jpg",
    description: "Najlepší kebab v meste! 🍢  Durum, pide alebo šalát 😍",
    delivery: {
      cost: 1.9,
      time: {
        from: "8:00",
        to: "22:00",
      },
      duration: "15 - 30min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "napoli",
    name: "Napoli",
    rating: 4.3,
    image: "/images/pasta.jpg",
    description: "najlepsie",
    delivery: {
      cost: 2.2,
      time: {
        from: "8:30",
        to: "16:00",
      },
      duration: "30 - 45min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "kebab-haus",
    name: "Kebab Haus",
    rating: 4.8,
    image: "/images/kebab.jpg",
    description: "Najlepší kebab v meste! 🍢  Durum, pide alebo šalát 😍",
    delivery: {
      cost: 1.9,
      time: {
        from: "8:00",
        to: "22:00",
      },
      duration: "15 - 30min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
];

export const nearRestaurants: Restaurant[] = [
  {
    slug: "kebab-haus",
    name: "Kebab Haus",
    rating: 4.8,
    image: "/images/kebab.jpg",
    description: "Najlepší kebab v meste! 🍢  Durum, pide alebo šalát 😍",
    delivery: {
      cost: 1.9,
      time: {
        from: "8:00",
        to: "22:00",
      },
      duration: "15 - 30min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "napoli",
    name: "Napoli",
    rating: 4.3,
    image: "/images/pasta.jpg",
    description: "najlepsie",
    delivery: {
      cost: 2.2,
      time: {
        from: "8:30",
        to: "16:00",
      },
      duration: "30 - 45min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "kebab-haus",
    name: "Kebab Haus",
    rating: 4.8,
    image: "/images/kebab.jpg",
    description: "Najlepší kebab v meste! 🍢  Durum, pide alebo šalát 😍",
    delivery: {
      cost: 1.9,
      time: {
        from: "8:00",
        to: "22:00",
      },
      duration: "15 - 30min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "napoli",
    name: "Napoli",
    rating: 4.3,
    image: "/images/pasta.jpg",
    description: "najlepsie",
    delivery: {
      cost: 2.2,
      time: {
        from: "8:30",
        to: "16:00",
      },
      duration: "30 - 45min",
    },
    menu: [
      {
        name: "Kebab",
        meals: [
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
          {
            name: "MENU Kebab tanier s hranolkami",
            ingredients:
              "kurací/teľací, hranolky, zeleninová obloha, cibuľa, paradajky, dresing",
            price: 10.49,
            image: "/images/kebab.jpg",
            extra: [
              { name: "Jalapeno", price: 0.4 },
              { name: "Cibula", price: 1.4 },
              { name: "Paprika", price: 0.9 },
              { name: "Uhorka", price: 0.4 },
            ],
          },
        ],
      },
    ],
  },
];
