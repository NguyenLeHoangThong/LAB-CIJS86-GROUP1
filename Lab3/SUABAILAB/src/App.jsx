import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import p6Image from "./assets/img/p6.jpg";
import p5Image from "./assets/img/p5.jpg";


function App() {

  const data = [
    {
      image1: p6Image,
      image2: p5Image,
      title: "My product is the best 123",
      sizes: ["XL", "XL", "XL"],
      original_price: 1000,
      discount_price: 700,
      button_text: "Add to cart",
    },
    {
      image1: p6Image,
      image2: p5Image,
      title: "My product is the best 123",
      sizes: ["XL", "XL", "XL"],
      original_price: 1000,
      discount_price: 700,
      button_text: "Add to cart",
    },

    {
      image1: p6Image,
      image2: p5Image,
      title: "My product is the best 123",
      sizes: ["XL", "XL", "XL"],
      original_price: 1000,
      discount_price: 700,
      button_text: "Add to cart",
    },
    {
      image1: p6Image,
      image2: p5Image,
      title: "My product is the best 123",
      sizes: ["XL", "XL", "XL"],
      original_price: 1000,
      discount_price: 700,
      button_text: "Add to cart",
    },
    {
      image1: p6Image,
      image2: p5Image,
      title: "My product is the best 123",
      sizes: ["XL", "XL", "XL"],
      original_price: 1000,
      discount_price: 700,
      button_text: "Add to cart",
    },
  ];

  return (
    <>
        <Header />

        <section className="carousel"></section>

        <ProductList products={data}/>


    </>
  );
}

export default App;
