import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const data = [
  "https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gray-600x600.jpg",
  "https://helios-i.mashable.com/imagery/reviews/07qLER2Lhqh3jGyBzBRrFBO/hero-image.fill.size_1248x702.v1623389216.jpg",
  "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1",
  "https://www.macworld.com/wp-content/uploads/2023/01/new_macbook_pink_lifestyle67.jpg?quality=50&strip=all&w=1024",
  "https://cdn.tgdd.vn/Products/Images/44/253636/Slider/apple-pro-16-m1-pro-2021-10-core-cpu-acv-1-1020x570.jpg"
]


function App() {

  const [mainImage, setMainImage] = useState(data[0]) // mặc định lấy giá trị đầu tiên của mảng data

  const handleSetMainImage = (image) => {
    setMainImage(image)
  } 

  return (
    <div className="App">
      {
        mainImage ? <img id="main-image" src={mainImage} alt="Preview image" /> : null // nếu không có mainImage thì không show ra hình ảnh to, lý do là maybe mảng data không có dữ liệu (server sập, lag, admin không đăng hình, ....)
      }

      <div>
      {
        data.map((item) => (
          <img onClick={() => handleSetMainImage(item)} className="imgs" src={item} alt="" /> 
          // đoạn này phải tạo 1 anonymous function dùng làm callback function để truyền được tham số vào bên trong hàm handleSetMainImage
          // vì đâu thể gọi handleSetMainImage(item) bình thường được, nó sẽ kích hoạt ngay khi load component (xem lại video lý thuyết phần này nếu quên)
        ))
      }
      </div>
    </div>
  );
}

export default App;
