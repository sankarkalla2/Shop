import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "../success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<ProductList />} path="/products" />
        <Route element={<ProductList />} path="/products/:category"></Route>
        <Route element={<Product />} path="/product/:id"></Route>
        <Route element={<Cart />} path="/cart"></Route>
        <Route element={<Success />} path="/success"></Route>
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
