import './App.css';
import Footer from './components/Footer';
import TrendingProducts from './components/TrendingProducts';
import Product1 from "./assets/images/products/product-1.jpg";

function App() {
  const data = [
    {
      imgUrl: Product1,
      category: "Watches",
      name: "Xiaomi Mi Band 5",
      rate: 4, // 4 sao
      reviews: 4, // 4 người review,
      price: 199.0,
    },
    {
        imgUrl: Product1,
        category: "Watches",
        name: "Xiaomi Mi Band 5",
        rate: 4, // 4 sao
        reviews: 4, // 4 người review,
        price: 199.0,
      },
      {
        imgUrl: Product1,
        category: "Watches",
        name: "Xiaomi Mi Band 5",
        rate: 4, // 4 sao
        reviews: 4, // 4 người review,
        price: 199.0,
      },
      {
        imgUrl: Product1,
        category: "Watches",
        name: "Xiaomi Mi Band 5",
        rate: 4, // 4 sao
        reviews: 4, // 4 người review,
        price: 199.0,
      },
      {
        imgUrl: Product1,
        category: "Watches",
        name: "Xiaomi Mi Band 5",
        rate: 3, // 4 sao
        reviews: 4, // 4 người review,
        price: 199.0,
      },
  ];

  return (
    <div className="App">
      
      <TrendingProducts trendingProducts={data} />

      <Footer />
      
    </div>
  );
}

export default App;
