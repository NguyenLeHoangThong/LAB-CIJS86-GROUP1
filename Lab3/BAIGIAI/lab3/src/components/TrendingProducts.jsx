import React from "react";

export default function TrendingProducts(props) {
  const { trendingProducts } = props;

  return (
    <section className="trending-product section" style={{ marginTop: "12px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Product</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {trendingProducts.map((item) => (
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-product">
                <div className="product-image">
                  <img src={item.imgUrl} alt="#" />
                  <div className="button">
                    <a href="product-details.html" className="btn">
                      <i className="lni lni-cart"></i> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">{item.category}</span>
                  <h4 className="title">
                    <a href="product-grids.html">{item.name}</a>
                  </h4>
                  <ul className="review">
                    {
                      // xử lí tạo sao đơn giản nhất, render ra 5 ngôi sao, index nào < số rate thì là ngôi sao full màu, ngược lại là ngôi sao rỗng màu
                      Array.from(Array(5).keys()).map((start, index) => { // tạo 1 mảng giả có 5 phần tử
                        if (index < item.rate) {
                          return (
                            <li>
                              <i className="lni lni-star-filled"></i>
                            </li>
                          );
                        } else {
                          return (
                            <li>
                              <i className="lni lni-star"></i>
                            </li>
                          );
                        }
                      })
                    }
                    <li>
                      <span>{item.reviews} Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$199.00</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
