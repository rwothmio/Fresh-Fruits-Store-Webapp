import React from "react";
import "./app.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./src/containers/main/Main";
import BuyPage from "./src/containers/buy-page/BuyPage";
import { Provider } from "react-redux";
import store from "./src/components/store/index";
import NavBar from "./src/components/navbar/NavBar";
import CartContainer from "./src/containers/cart-checkout/CartContainer";
import SearchPage from "./src/containers/search-page/SearchPage";
import Footer from "./src/containers/footer/Footer";
import About from "./src/containers/about-page/About";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/p/:id" element={<BuyPage />}></Route>
          <Route path="/cart" element={<CartContainer />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/about" element={<About />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
