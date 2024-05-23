import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <h4>Shopping Cart App</h4>
      <Auth />
    </div>
  );
};

export default App;
