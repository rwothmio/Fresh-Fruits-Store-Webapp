// import alphonso from "./images/mangoes/alphonso.jpg";
// import tommy from "./images/mangoes/tommy.jpg";
// import golden from "./images/apple/golden.jpg";
// import granny from "./images/apple/granny.jpg";
// import redApple from "./images/apple/red.jpg";
// import bacon from "./images/avocadoes/bacon.jpg";
// import hass from "./images/avocadoes/hass.jpg";
// import cavendish from "./images/bananas/cavendish.jpg";
// import plantain from "./images/bananas/plantain.jpg";
// import redBananas from "./images/bananas/red.jpg";
// import redGrapes from "./images/grapes/red.jpg";
// import blackGrapes from "./images/grapes/black.jpg";
// import blood from "./images/oranges/blood.jpg";
// import navel from "./images/oranges/navel.jpg";
// import satsuma from "./images/oranges/satsuma.jpg";
// import hawaiian from "./images/papaya/hawaiian.jpg";
// import maradol from "./images/papaya/maradol.jpg";
// import tainung from "./images/papaya/tainung.jpg";
// import pinkglow from "./images/pineapples/pinkglow.jpg";
// import smooth from "./images/pineapples/smooth.jpg";
// import seedless from "./images/watermelons/seedless.jpg";
// import sugarbaby from "./images/watermelons/sugarbaby.jpg";
// import yellow from "./images/watermelons/yellow.jpg";

const fruits = {
  mangoes: [
    {
      id: "mango_1f3g6e5y",
      category: 'mangoes',
      name: "Alphonso Mango",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351552/fruits_images/mangoes/alphonso_thdpap.jpg',
      price: 0.5,
      unit: "piece",
      moq: 8,
      description: `Savor the royal taste of Alphonso mangoes from our store! Renowned for their luscious sweetness and creamy texture, these golden delights are sourced from the finest orchards. Indulge in an exotic tropical experience, ideal for desserts, smoothies, or as a delicious standalone treat.`,
      rating: 5,
    },
    {
      id: "mango_7h8j1k9l",
      category: 'mangoes',
      name: "Tommy Atkins Mango",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351554/fruits_images/mangoes/tommy_mhvjro.jpg',
      price: 0.76,
      unit: "piece",
      moq: 6,
      description: `Discover the tropical goodness of Tommy Atkins mangoes! Handpicked from the best orchards, these vibrant and flavorful mangoes are a delightful balance of sweetness and tanginess. Perfect for enjoying on their own, making refreshing smoothies, or adding a burst of tropical flavor to your dishes!`,
      rating: 5,
    },
  ],
  apple: [
    {
      id: "apple_2r4t5y7u",
      category: 'apple',
      name: "Golden Delicious Apple",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351203/fruits_images/apples/golden_ir9t0z.jpg',
      price: 0.6,
      unit: "piece",
      moq: 7,
      description: `Indulge in the captivating taste of Golden Delicious apples! With a rich golden hue and a uniquely sweet, honeyed flavor, these apples are a true delight. Their crisp and juicy texture makes them perfect for enjoying fresh or adding a touch of natural sweetness to salads, baked goods, and sauces. A delectable choice for both snacking and culinary creations.`,
      rating: 5,
    },
    {
      id: "apple_6h9j0l3k",
      category: 'apple',
      name: "Red Delicious Apple",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351206/fruits_images/apples/red_lnodw8.jpg',
      price: 0.63,
      unit: "piece",
      moq: 7,
      description: `Experience the classic allure of Red Delicious apples! Their vibrant ruby-red skin conceals a juicy and sweet interior, making them a delightful treat for any occasion. Enjoy their firm texture and refreshing taste as a wholesome snack or add a pop of color to salads and desserts. A timeless favorite for apple enthusiasts!`,
      rating: 4,
    },
    {
      id: "apple_4g8e2t1y",
      category: 'apple',
      name: "Granny Smith Apple",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351204/fruits_images/apples/granny_gkbagw.jpg',
      price: 0.63,
      unit: "piece",
      moq: 7,
      description: `Tantalize your taste buds with the zesty and tart flavor of Granny Smith apples! Distinguished by their bright green skin, these apples offer a refreshing and crisp bite. Perfect for those who prefer a tangy twist, they are a versatile choice for baking, snacking, or adding a unique flair to salads and sauces. A crisp and mouthwatering apple experience awaits!`,
      rating: 5,
    },
  ],
  bananas: [
    {
      id: "banana_5g6t8y2h",
      category: 'bananas',
      name: "Cavendish Bananas",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351602/fruits_images/bananas/cavendish_ehkb9q.jpg',
      price: 0.15,
      unit: "piece",
      moq: 25,
      description: `Savor the creamy and velvety goodness of Cavendish bananas! These superior bananas are prized for their delectable sweetness and smooth texture. A perfect on-the-go snack or a delightful addition to smoothies and desserts. Packed with nutrients, they provide an instant energy boost and make a nutritious choice for a healthier lifestyle.`,
      rating: 4,
    },
    {
      id: "banana_1k3h5g2r",
      category: 'bananas',
      name: "Plantain",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351603/fruits_images/bananas/plantain_dc59rz.jpg',
      price: 0.23,
      unit: "piece",
      moq: 18,
      description: `Indulge in the rich and savory taste of Plantain bananas! Unlike their sweeter counterparts, these bananas offer a more starchy and less sweet flavor. Best when ripe and slightly softened, they are perfect for frying, baking, or grilling, adding a delightful twist to savory dishes or enjoying as a unique and delicious snack. Discover the culinary versatility of plantains today!`,
      rating: 3,
    },
    {
      id: "banana_8t2j3y9u",
      category: 'bananas',
      name: "Red Bananas",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351607/fruits_images/bananas/red_zjsnne.jpg',
      price: 0.17,
      unit: "piece",
      moq: 24,
      description: `Embark on a vibrant taste adventure with Red bananas! With their striking red to maroon skin and a sweet, creamy flavor, these bananas are a delightful tropical treat. Rich in essential nutrients, they offer a unique twist to smoothies, desserts, or simply enjoyed fresh for a wholesome and exotic snacking experience.`,
      rating: 5,
    },
  ],
  avocadoes: [
    {
      id: "avocado_5t6h2y9j",
      category: 'avocadoes',
      name: "Hass Avocado",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351642/fruits_images/avocadoes/hass_egw5ku.jpg',
      price: 0.82,
      unit: "piece",
      moq: 5,
      description: `Delight in the buttery and creamy goodness of Hass avocados! With their pebbled dark skin and luscious green flesh, these avocados are a versatile culinary delight. Packed with healthy fats and nutrients, they are perfect for creating guacamole, adding to salads, or spreading on toast. Elevate your meals with the richness of Hass avocados!`,
      rating: 4,
    },
    {
      id: "avocado_3r8t6y9k",
      category: 'avocadoes',
      name: "Bacon Avocado",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351640/fruits_images/avocadoes/bacon_wwox2e.jpg',
      price: 0.8,
      unit: "piece",
      moq: 5,
      description: `Introducing the Bacon avocado! With its distinctive oval shape and smooth green skin, this avocado variety is known for its rich and nutty flavor. Perfectly complementing your favorite dishes, from salads to sandwiches and guacamole, this creamy delight is a must-try for avocado enthusiasts. Enjoy its buttery texture and nutritious goodness!`,
      rating: 5,
    },
  ],
  grapes: [
    {
      id: "grapes_1k8t4g2h",
      category: 'grapes',
      name: "Black Grapes",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351577/fruits_images/grapes/black_ltc58i.jpg',
      price: 4.6,
      unit: "kg",
      moq: 1,
      description: `Experience the rich and luscious flavor of Black grapes! These dark, juicy grapes are a burst of sweetness with a hint of earthy undertones. Perfect for snacking, making refreshing grape juice, or adding a touch of elegance to cheese platters. A delectable and healthy treat for all occasions.`,
      rating: 4,
    },
    {
      id: "grapes_5j6y9u3r",
      category: 'grapes',
      name: "Red Grapes",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351578/fruits_images/grapes/red_h0zwn0.jpg',
      price: 4.6,
      unit: "kg",
      moq: 1,
      description: `Delight in the vibrant and sweet taste of Red grapes! With their ruby-red hue and succulent juiciness, these grapes are a delightful indulgence. Enjoy them as a refreshing snack, in fruit salads, or paired with cheese for a satisfying combination of flavors.`,
      rating: 5,
    },
  ],
  oranges: [
    {
      id: "orange_3r5t9u2h",
      category: 'oranges',
      name: "Navel Orange",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351522/fruits_images/oranges/navel_zza0qk.jpg',
      price: 0.23,
      unit: "piece",
      moq: 18,
      description: `Enjoy the refreshing and citrusy goodness of Navel oranges! Renowned for their sweet and seedless segments, these oranges are a delightful snacking option. Packed with vitamin C, they make a nourishing addition to your daily fruit intake.`,
      rating: 5,
    },
    {
      id: "orange_8t6y2r1k",
      category: 'oranges',
      name: "Blood Orange",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351521/fruits_images/oranges/blood_ysegpl.jpg',
      price: 0.21,
      unit: "piece",
      moq: 18,
      description: `Experience the unique and exotic flavor of Blood oranges! With their crimson-hued flesh and berry-like taste, these oranges add a burst of color and sweetness to any fruit bowl. Rich in antioxidants, they are a nutritious and delicious choice.`,
      rating: 5,
    },
    {
      id: "orange_1k2h3y5t",
      category: 'oranges',
      name: "Satsuma Orange",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351528/fruits_images/oranges/satsuma_r4zmcs.jpg',
      price: 0.21,
      unit: "piece",
      moq: 20,
      description: `Savor the easy-to-peel and exceptionally sweet Satsuma oranges! Known for their delightful juiciness and refreshing taste, they are a delightful snack for both adults and kids. Enjoy their bright flavor and vitamin-packed goodness.`,
      rating: 5,
    },
  ],
  papayas: [
    {
      id: "papaya_5t6j9u4h",
      category: 'papayas',
      name: "Hawaiian Papaya",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351488/fruits_images/papayas/hawaiian_hvyc1y.jpg',
      price: 1.8,
      unit: "piece",
      moq: 2,
      description: `Transport yourself to the tropics with the succulent and juicy Hawaiian papayas! A true tropical delight, these papayas are bursting with exotic flavors and vibrant color. Rich in vitamins and antioxidants, they offer a delightful tropical experience.`,
      rating: 5,
    },
    {
      id: "papaya_1k2h3y5j",
      category: 'papayas',
      name: "Maradol Papaya",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351489/fruits_images/papayas/maradol_tmuq2b.jpg',
      price: 1.85,
      unit: "piece",
      moq: 2,
      description: `Indulge in the captivating taste of Maradol papayas! With their tender, deep-orange flesh and sweet flavor, these papayas are perfect for smoothies, fruit salads, or enjoying as a guilt-free dessert. A tropical delight packed with essential nutrients.`,
      rating: 5,
    },
    {
      id: "papaya_7u8h2j1y",
      category: 'papayas',
      name: "Tainung Papaya",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351490/fruits_images/papayas/tainung_gqq7or.jpg',
      price: 1.99,
      unit: "piece",
      moq: 2,
      description: `Discover the delightful taste of Tainung papayas! With their smooth texture and mild sweetness, these papayas are perfect for adding a tropical twist to your breakfast or snacks. Rich in fiber and vitamin C, they offer a nourishing and exotic treat.`,
      rating: 3,
    },
  ],
  pineapples: [
    {
      id: "pineapple_3r7u5h9j",
      category: 'pineapples',
      name: "Smooth Cayenne Pineapple",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351463/fruits_images/pineapples/smooth_ldky9f.jpg',
      price: 2.5,
      unit: "piece",
      moq: 2,
      description: `Experience the tropical paradise with Smooth Cayenne pineapples! Juicy and sweet, these pineapples are perfect for adding a burst of flavor to fruit salads, cocktails, or grilling for a delicious caramelized dessert. A taste of the tropics in every bite!`,
      rating: 5,
    },
    {
      id: "pineapple_2k6j1h5y",
      category: 'pineapples',
      name: "Pinkglow Pineapple",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351462/fruits_images/pineapples/pinkglow_jpjfc4.jpg',
      price: 2.6,
      unit: "piece",
      moq: 2,
      description: `Indulge in the rare and exquisite Pinkglow pineapples! With their rosy-pink flesh and uniquely sweet taste, these pineapples are a true luxury. Enjoy them fresh or use them to create elegant and vibrant fruit platters.`,
      rating: 5,
    },
  ],
  watermelons: [
    {
      id: "watermelon_4j5h2y8k",
      category: 'watermelons',
      name: "Seedless Watermelon",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351427/fruits_images/watermelons/seedless_gwgrj4.jpg',
      price: 5.1,
      unit: "piece",
      moq: 1,
      description: `Stay refreshed with the sweet and hydrating Seedless watermelons! These juicy and seedless watermelons are perfect for sharing at picnics, parties, or simply enjoying on hot summer days. A guilt-free and refreshing treat for all ages.`,
      rating: 5,
    },
    {
      id: "watermelon_1y7k9j3h",
      category: 'watermelons',
      name: "Sugarbaby Watermelon",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351429/fruits_images/watermelons/sugarbaby_bw0pbs.jpg',
      price: 4.9,
      unit: "piece",
      moq: 1,
      description: `Delight in the sweet and compact Sugarbaby watermelons! With their deep red flesh and refreshing taste, these petite watermelons are an ideal choice for individuals or small gatherings. Perfectly portioned for a delicious and juicy experience.`,
      rating: 4,
    },
    {
      id: "watermelon_6j8h3y2k",
      category: 'watermelons',
      name: "Yellow Watermelon",
      img: 'https://res.cloudinary.com/ddsfqfkyb/image/upload/v1691351433/fruits_images/watermelons/yellow_pqknlk.jpg',
      price: 4.9,
      unit: "piece",
      moq: 1,
      description: `Experience the tropical twist with Yellow watermelons! With their golden-yellow flesh and sweet, honey-like flavor, these watermelons are a delightful variation of the classic fruit. Elevate your fruit platters with their unique appearance and delicious taste.`,
      rating: 5,
    },
  ],
};


export default fruits;
