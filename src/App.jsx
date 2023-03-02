import React from "react";
import { GlobalStyle } from "./styles/GlobelStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navber from "./components/Navber";
import Prudect from "./pages/Prudect";
import { CardContextProvaider } from "../src/state/cardContex";

function App() {
  return (
    <CardContextProvaider>
      <BrowserRouter>
        <GlobalStyle />
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="//:id" element={<Prudect />} />
        </Routes>
      </BrowserRouter>
    </CardContextProvaider>
  );
}

export default App;
