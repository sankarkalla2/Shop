import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<ProductList />} path="/products" />
        <Route element={<ProductList />} path="/products/:category"></Route>
        <Route element={<Product />} path="/product/:id"></Route>
        <Route element={<Cart />} path="/cart"></Route>
        {!user ? (
          <Route element={<Login />} path="/login" />
        ) : (
          <Route path="login" element={<Navigate to="/" />} />
        )}
        {!user ? (
          <Route element={<Register />} path="/register" />
        ) : (
          <Route path="register" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
