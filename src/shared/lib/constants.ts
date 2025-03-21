

export const categories = [
    {
        name: 'Пиццы',
    },
    {
        name: 'Завтрак',
    },
    {
        name: 'Закуски',
    },
    {
        name: 'Коктейли',
    },
    {
        name: 'Напитки',
    },
]

export const ingredients = [
    {
      name: 'Сырный бортик',
      price: 179,
      imageUrl: '/products/product_1.png',
    },
    {
      name: 'Сливочная моцарелла',
      price: 79,
      imageUrl: '/products/product_2.png',
    },
    {
      name: 'Сыры чеддер и пармезан',
      price: 79,
      imageUrl: '/products/product_3.png',
    },
    {
      name: 'Острый перец халапеньо',
      price: 59,
      imageUrl: '/products/product_4.png',
    },
    {
      name: 'Нежный цыпленок',
      price: 79,
      imageUrl: '/products/product_5.png',
    },
    {
      name: 'Шампиньоны',
      price: 59,
      imageUrl: '/products/product_6.png',
    },
    {
      name: 'Ветчина',
      price: 79,
      imageUrl: '/products/product_7.png',
    },
    {
      name: 'Пикантная пепперони',
      price: 79,
      imageUrl: '/products/product_8.png',
    },
    {
      name: 'Острая чоризо',
      price: 79,
      imageUrl: '/products/product_9.png',
    },
    {
      name: 'Маринованные огурчики',
      price: 59,
      imageUrl: '/products/product_10.png',
    },
    {
      name: 'Свежие томаты',
      price: 59,
      imageUrl: '/products/product_11.png',
    },
    {
      name: 'Красный лук',
      price: 59,
      imageUrl: '/products/product_12.png',
    },
    {
      name: 'Сочные ананасы',
      price: 59,
      imageUrl: '/products/product_13.png',
    },
    {
      name: 'Итальянские травы',
      price: 39,
      imageUrl: '/products/product_14.png',
    },
    {
      name: 'Сладкий перец',
      price: 59,
      imageUrl: '/products/product_15.png',
    },
    {
      name: 'Кубики брынзы',
      price: 79,
      imageUrl: '/products/product_16.png',
    },
    {
      name: 'Митболы',
      price: 79,
      imageUrl: '/products/product_17.png',
    },
  ].map((obj, index) => ({ id: index + 1, ...obj }));

  export const products = [
    {
      name: 'Омлет с ветчиной и грибами',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
      categoryId: 2,
    },
    {
      name: 'Омлет с пепперони',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
      categoryId: 2,
    },
    {
      name: 'Кофе Латте',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
      categoryId: 2,
    },
    {
      name: 'Дэнвич ветчина и сыр',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
      categoryId: 3,
    },
    {
      name: 'Куриные наггетсы',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
      categoryId: 3,
    },
    {
      name: 'Картофель из печи с соусом 🌱',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
      categoryId: 3,
    },
    {
      name: 'Додстер',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
      categoryId: 3,
    },
    {
      name: 'Острый Додстер 🌶️🌶️',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
      categoryId: 3,
    },
    {
      name: 'Банановый молочный коктейль',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
      categoryId: 4,
    },
    {
      name: 'Карамельное яблоко молочный коктейль',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
      categoryId: 4,
    },
    {
      name: 'Молочный коктейль с печеньем Орео',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
      categoryId: 4,
    },
    {
      name: 'Классический молочный коктейль 👶',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
      categoryId: 4,
    },
    {
      name: 'Ирландский Капучино',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
      categoryId: 5,
    },
    {
      name: 'Кофе Карамельный капучино',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
      categoryId: 5,
    },
    {
      name: 'Кофе Кокосовый латте',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
      categoryId: 5,
    },
    {
      name: 'Кофе Американо',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
      categoryId: 5,
    },
    {
      name: 'Кофе Латте',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
      categoryId: 5,
    },
  ];