import React, { useState } from "react";
import CategoryBar from "../Components/CategoryBar";
import ProductList from "../Components/ProductList";


export default function Home() {
  const categories = ["Pizza","Chips & Dips","Burgers","Kebab & Wraps","Kebab & Trays","Hoagies","Chicken", "Desserts", "Drinks", "Sides",];
  const allProducts = [
    { id: 1, name: "Apache Dynamite", image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg", category: "Pizza" },
    { id: 2, name: "Chicken Apache", image: "https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg", category: "Pizza" },
    { id: 3, name: "Chicken Apache", image: "https://images.pexels.com/photos/3229357/pexels-photo-3229357.jpeg", category: "Pizza" },
    { id: 4, name: "Chicken Apache", image: "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg", category: "Pizza" },
    { id: 5, name: "Chicken Apache", image: "https://images.pexels.com/photos/1566836/pexels-photo-1566836.jpeg", category: "Pizza" },
    { id: 6, name: "Chicken Apache", image: "https://images.pexels.com/photos/1435900/pexels-photo-1435900.jpeg", category: "Pizza" },
    { id: 7, name: "Chicken Apache", image: "https://images.pexels.com/photos/1878344/pexels-photo-1878344.jpeg", category: "Pizza" },
    { id: 8, name: "Chicken Apache", image: "https://images.pexels.com/photos/1527602/pexels-photo-1527602.jpeg", category: "Pizza" },
    { id: 9, name: "Chicken Apache", image: "https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg", category: "Pizza" },
    { id: 10, name: "Chicken Apache", image: "https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg", category: "Pizza" },
    { id: 11, name: "Chicken Apache", image: "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg", category: "Pizza" },
    { id: 12, name: "Chicken Apache", image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg", category: "Pizza" },

    { id: 13, name: "Beef Burger", image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg", category: "Burgers" },
    { id: 14, name: "Beef Burger", image: "https://images.pexels.com/photos/1199959/pexels-photo-1199959.jpeg", category: "Burgers" },
    { id: 15, name: "Beef Burger", image: "https://images.pexels.com/photos/2987564/pexels-photo-2987564.jpeg", category: "Burgers" },
    { id: 16, name: "Beef Burger", image: "https://images.pexels.com/photos/3630141/pexels-photo-3630141.jpeg", category: "Burgers" },
    { id: 17, name: "Beef Burger", image: "https://images.pexels.com/photos/2015097/pexels-photo-2015097.jpeg", category: "Burgers" },
    { id: 18, name: "Beef Burger", image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg", category: "Burgers" },

    { id: 19, name: "Chocolate Cake", image: "https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg", category: "Desserts" },
    { id: 20, name: "Chocolate Cake", image: "https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg", category: "Desserts" },
    { id: 21, name: "Chocolate Cake", image: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg", category: "Desserts" },
     { id: 22, name: "Chocolate Cake", image: "https://images.pexels.com/photos/34143446/pexels-photo-34143446.jpeg", category: "Desserts" },
    { id: 23, name: "Chocolate Cake", image: "https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg", category: "Desserts" },
    { id: 24, name: "Chocolate Cake", image: "https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg", category: "Desserts" },

      { id: 25, name: "Drink", image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg", category: "Drinks" },
    { id: 26, name: "Drink", image: "https://images.pexels.com/photos/461415/pexels-photo-461415.jpeg", category: "Drinks" },
      { id: 27, name: "Drink", image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg", category: "Drinks" },
     { id: 28, name: "Drink", image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg", category: "Drinks" },
    { id: 29, name: "Drink", image: "https://images.pexels.com/photos/128242/pexels-photo-128242.jpeg", category: "Drinks" },
     { id: 30, name: "Drink", image: "https://images.pexels.com/photos/736188/pexels-photo-736188.jpeg", category: "Drinks" },

     { id: 31, name: "Chicken", image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg", category: "Chicken" },
     { id: 32, name: "Chicken", image: "https://images.pexels.com/photos/32936796/pexels-photo-32936796.jpeg", category: "Chicken" },
     { id: 33, name: "Chicken", image: "https://images.pexels.com/photos/4715682/pexels-photo-4715682.jpeg", category: "Chicken" },
     { id: 34, name: "Chicken", image: "https://images.pexels.com/photos/7438982/pexels-photo-7438982.jpeg", category: "Chicken" },
     { id: 35, name: "Chicken", image: "https://images.pexels.com/photos/12381147/pexels-photo-12381147.jpeg", category: "Chicken" },


  { id: 36, name: "Chips", image: "https://images.pexels.com/photos/6004783/pexels-photo-6004783.jpeg", category: "Chips & Dips" },
  { id: 37, name: "Dips", image: "https://images.pexels.com/photos/6004197/pexels-photo-6004197.jpeg", category: "Chips & Dips" },
  { id: 38, name: "Chips", image: "https://images.pexels.com/photos/6004184/pexels-photo-6004184.jpeg", category: "Chips & Dips" },
  { id: 39, name: "Dips", image: "https://images.pexels.com/photos/8157917/pexels-photo-8157917.jpeg", category: "Chips & Dips" },
  { id: 40, name: "Chips", image: "https://images.pexels.com/photos/5738085/pexels-photo-5738085.jpeg", category: "Chips & Dips" },
  { id: 41, name: "Chips", image: "https://images.pexels.com/photos/33428755/pexels-photo-33428755.jpeg", category: "Chips & Dips" }
];



    



  const [selected, setSelected] = useState("Pizza");

  const filteredProducts = allProducts.filter(
    (p) => p.category === selected
  );

  return (
    <div className="home">
      <CategoryBar
        categories={categories}
        selected={selected}
        onSelect={setSelected}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}
