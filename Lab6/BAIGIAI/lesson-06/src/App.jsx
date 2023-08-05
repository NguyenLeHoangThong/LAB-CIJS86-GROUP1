import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import { products } from "./mockProducts";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [productList, setProductList] = useState(products);
  //console.log("productsInCart", productsInCart);

  const addToCartFromApp = (productItem) => {
    // productsInCart.push(productItem);
    // console.log("Products in cart: ", productsInCart);
    // setProductsInCart
    const newProductsInCart = [...productsInCart, productItem];
    setProductsInCart(newProductsInCart);
  };

  const deleteProductFromProductList = (productItem) => {
    const newProducts = productList.filter((product) => product.id !== productItem.id);
    setProductList(newProducts);
    const currentProductInCart = productsInCart.filter((product) => product.id !== productItem.id);
    setProductsInCart(currentProductInCart);
  }

  return (
    <div>
      <Cart productsInCart={productsInCart} />
      <ProductsList products={productList} addToCartFromApp={addToCartFromApp} deleteProductFromProductList={deleteProductFromProductList}/>
    </div>
  );
}

export default App;
