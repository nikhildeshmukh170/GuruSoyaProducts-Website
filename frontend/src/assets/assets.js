import white_logo from "./BL_bg-Logo.png";
import black_logo from "./WH_bg-Logo.png";
import search_icon from "./search.png";
import shopping_cart from "./shopping_cart.svg";
import all_products from "./all_products.png";
import right_arrow from "./right_arrow.svg";
import coffee_cup from "./coffee-cup.png";
import nuts from "./nuts.png";
import flour from "./power.png";
import tofu from "./tofu.png";
import papad from "./masala-papad.png";
import cookies from "./cookies.png";
import cross_icon from "./remove.png";
import add_shopping_cart from "./add_shopping_cart.svg";
import currency_rupee from "./currency_rupee.svg";
import profile_icon from "./user.png";
import bag_icon from "./bag.png";
import logout_icon from "./logout.png";
import ratingStar from "./rating_starts.png";
import offerTag from "./offer.png";
import FooterImg from "./Footer_img.png";

import item_1 from "./cafe1.jpeg";
import item_2 from "./roasted.jpeg";
import item_3 from "./flour.jpeg";
import item_4 from "./papad.jpeg"
import item_5 from "./cookies.png";
import item_6 from "./tofu.jpeg";

import soyachunks from "./HealthyMasterPouch_3.webp"
import Soyabeverages from "./soyabeverages.jpg"
import SoyaNutrient from "./Soya_Nutrient.jpg"
import SoyaMeal from "./Soya_meal.jpg"
import SoyaCookies from "./soya_cookies.jpg"

export const assets = {
  white_logo,
  black_logo,
  search_icon,
  shopping_cart,
  all_products,
  right_arrow,
  coffee_cup,
  nuts,
  flour,
  tofu,
  papad,
  cookies,
  item_1,
  add_shopping_cart,
  currency_rupee,
  soyachunks,
  cross_icon,
  profile_icon,
  bag_icon,
  logout_icon,
  ratingStar,
  offerTag,
  FooterImg
};

export const item_list = [
  {
    _id: "1",
    name: "Soya Cafe Nutrient",
    description: "Elevate your coffee experience with our Soya Café Nutrient Boost. This delicious blend combines the robust flavors of premium coffee with the health benefits of soy protein and essential nutrients. Perfect for starting your day with a burst of energy and nutrition!",
    price: "10",
    weight: "10",
    image: item_1,
    category: ""
  },
  {
    _id: "2",
    name: "Soya Roasted Namkeen",
    description: "Indulge in a guilt-free snacking experience with our Soya Roasted Namkeen. This crunchy and flavorful snack is perfect for those who love a healthy yet tasty treat. Made from high-quality soybeans, our namkeen is roasted to perfection and seasoned with a blend of aromatic spices.",
    price: "20",
    weight: "35",
    image: item_2,
    category: ""
  },
  {
    _id: "3",
    name: "Soya Flour",
    description: "Enhance your baking and cooking with our Premium Soya Flour. Made from finely ground, high-quality soybeans, this versatile flour is a fantastic addition to your pantry, offering numerous health benefits and a rich, nutty flavor.",
    price: "30",
    weight: "100",
    image: item_3,
    category: ""
  },
  {
    _id: "4",
    name: "Organic Soya Tofu",
    description: "Discover the versatility and nutritional benefits of our Organic Soya Tofu. Made from the finest organic soybeans, our tofu is a perfect addition to a variety of dishes, offering a high-protein, low-fat alternative to meat and dairy products.",
    price: "70",
    weight: "200",
    image: item_6,
    category: ""
  },
  {
    _id: "5",
    name: "Soya Udad Papad",
    description: "Enjoy the perfect blend of taste and nutrition with our Soya Urad Papad. Made from high-quality urad dal and enriched with soya, these crispy papads are an excellent addition to any meal, offering a delicious crunch and a boost of plant-based protein.",
    price: "50",
    weight: "125",
    image: item_4,
    category: ""
  },
  {
    _id: "6",
    name: "Soya Cookies",
    description: "Treat yourself to the perfect blend of taste and nutrition with our Soya Cookies. Made with high-quality soy flour and wholesome ingredients, these cookies are not only delicious but also packed with plant-based protein and fiber, making them an ideal snack for any time of the day.",
    price: "90",
    weight: "300",
    image: item_5,
    category: ""
  },
];


export const categories = [
  { id: 1, firp: 'OUR PRODUCT CATEGORIES', secp: 'Indulge your taste buds with our delightful treats.', thirp: "Experience a world of soy-based delights with Guru Soya Product. Our range offers wholesome snacks and nutritious ingredients to suit every taste bud. Dive in and savor the goodness of soy in every bite.", },
  { id: 2, title: 'Soya Snacks', imageUrl: soyachunks, },
  { id: 3, title: 'Soya beverages', imageUrl: Soyabeverages, },
  { id: 4, title: 'Soya Nutrient', imageUrl: SoyaNutrient, },
  { id: 5, title: 'Soya Meal', imageUrl: SoyaMeal, },
  { id: 6, title: 'Soya Cookies', imageUrl: SoyaCookies, },
];

export const faqs_ans = [
  {
    id:"1",
    ques:"What are Guru Soya Products?",
    ans:"Guru Soya Products are a range of plant-based food items made from soybeans. Our product line includes tofu, soy milk, soy-based meat substitutes, and more."
  },
  {
    id:"2",
    ques:"Are Guru Soya Products vegan?",
    ans:"Yes, all Guru Soya Products are 100% vegan. We use only plant-based ingredients and avoid any animal-derived components."
  },
  {
    id:"3",
    ques:"Are Guru Soya Products gluten-free?",
    ans:"While soybeans themselves are naturally gluten-free, some of our products may contain gluten due to the processing facilities they are manufactured in. We recommend checking the product labels for specific gluten-free information."
  },
  {
    id:"4",
    ques:"Where can I buy Guru Soya Products?",
    ans:"Our products are available in select grocery stores, health food stores, and supermarkets. You can also purchase them online through our website or various e-commerce platforms."
  },
  {
    id:"5",
    ques:"Can I freeze Guru Soya Products?",
    ans:"Yes, you can freeze many of our products for extended storage. Tofu, for example, can be frozen, though the texture may change slightly upon thawing. We recommend consuming frozen products within a few months for optimal taste and quality."
  },
  {
    id:"6",
    ques:"Can I cook with Guru Soya Products?",
    ans:"Absolutely! Our products are versatile and can be used in a variety of recipes. From stir-fries and curries to smoothies and desserts, the possibilities are endless. Check out our website or social media channels for recipe inspiration."
  },
  {
    id:"7",
    ques:"Are Guru Soya Products environmentally friendly?",
    ans:"Yes, soybeans have a lower environmental footprint compared to many animal-based products. We strive to minimize our environmental impact through sustainable sourcing practices and eco-friendly packaging whenever possible."
  },
];
