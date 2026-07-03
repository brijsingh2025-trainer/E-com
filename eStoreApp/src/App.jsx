import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
//import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/products"
          element={<ProductList />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;