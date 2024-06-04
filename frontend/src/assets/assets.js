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
  logout_icon
};

export const item_list = [
  {
    item_id: "1",
    item_name: "Soya Cafe Nutrient",
    item_discription: "Elevate your coffee experience with our Soya Café Nutrient Boost. This delicious blend combines the robust flavors of premium coffee with the health benefits of soy protein and essential nutrients. Perfect for starting your day with a burst of energy and nutrition!",
    item_rate: "10",
    item_weight: "10",
    item_image: item_1,
  },
  {
    item_id: "2",
    item_name: "Soya Roasted Namkeen",
    item_discription: "Indulge in a guilt-free snacking experience with our Soya Roasted Namkeen. This crunchy and flavorful snack is perfect for those who love a healthy yet tasty treat. Made from high-quality soybeans, our namkeen is roasted to perfection and seasoned with a blend of aromatic spices.",
    item_rate: "20",
    item_weight: "35",
    item_image: item_2,
  },
  {
    item_id: "3",
    item_name: "Soya Flour",
    item_discription: "Enhance your baking and cooking with our Premium Soya Flour. Made from finely ground, high-quality soybeans, this versatile flour is a fantastic addition to your pantry, offering numerous health benefits and a rich, nutty flavor.",
    item_rate: "30",
    item_weight: "100",
    item_image: item_3,
  },
  {
    item_id: "4",
    item_name: "Organic Soya Tofu",
    item_discription: "Discover the versatility and nutritional benefits of our Organic Soya Tofu. Made from the finest organic soybeans, our tofu is a perfect addition to a variety of dishes, offering a high-protein, low-fat alternative to meat and dairy products.",
    item_rate: "70",
    item_weight: "200",
    item_image: item_6,
  },
  {
    item_id: "5",
    item_name: "Soya Udad Papad",
    item_discription: "Enjoy the perfect blend of taste and nutrition with our Soya Urad Papad. Made from high-quality urad dal and enriched with soya, these crispy papads are an excellent addition to any meal, offering a delicious crunch and a boost of plant-based protein.",
    item_rate: "50",
    item_weight: "125",
    item_image: item_4,
  },
  {
    item_id: "6",
    item_name: "Soya Cookies",
    item_discription: "Treat yourself to the perfect blend of taste and nutrition with our Soya Cookies. Made with high-quality soy flour and wholesome ingredients, these cookies are not only delicious but also packed with plant-based protein and fiber, making them an ideal snack for any time of the day.",
    item_rate: "90",
    item_weight: "300",
    item_image: item_5,
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
