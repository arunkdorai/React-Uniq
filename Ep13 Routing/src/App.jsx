import Home from "./components/Home";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import TodoApp from "./components/TodoApp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let user = "Arun"
  return (
    <div className="app">
      <Router>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to={`/login/${user}`}>Login</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/todoapp">TodoApp</Link></li>
      </ol>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/products" element={<Products />} >
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todoapp" element={<TodoApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
