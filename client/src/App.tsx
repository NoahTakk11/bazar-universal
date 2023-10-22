import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import ListProducts from "./pages/ListProducts";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";

function App() {
  return (
    <main className="flex flex-col items-center justify-center mx-5">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/items" element={<ListProducts />}></Route>
        <Route path="/items/:id" element={<ViewProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </main>
  );
}

export default App;
