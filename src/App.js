import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems);
  return (
    <div className="App">
      <h4>Shopping Cart App</h4>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
};

export default App;
