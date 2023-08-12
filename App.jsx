import React from "react";
import "./app.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/components/store/index";
import NavBar from "./src/components/navbar/NavBar";
import Footer from "./src/containers/footer/Footer";
import Main from "./src/containers/main/Main";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
