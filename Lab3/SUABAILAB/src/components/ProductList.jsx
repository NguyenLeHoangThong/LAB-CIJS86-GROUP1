import React from "react";


export default function ProductList(props) {

  const { products } = props;

  console.log("props: ", props)
  
  return (
    <section className="newProducts">
      <h1>News Products</h1>
      <div className="newProducts__container">
        {products.map((item) => (
          <div className="newProducts__item">
            <div className="item__image">
              <img src={item.image1} alt="p6" />
              <div className="item__image-child">
                <img src={item.image2} alt="p5" />
              </div>
            </div>
            <div className="item__content">
              <h3>{item.title}</h3>
              <p>
                <strong>{item.sizes.join("/")}</strong>
              </p>
              <div className="item__text">
                <p>
                  <del>${item.original_price}</del>
                </p>
                <p>
                  <strong>${item.discount_price}</strong>
                </p>
              </div>
              <button>{item.button_text}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
