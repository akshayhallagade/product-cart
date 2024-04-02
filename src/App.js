import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./page/ProductPage";
import Header from "./components/Header";
import Cart from "./page/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
