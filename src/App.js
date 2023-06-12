// Library Imports
import { Routes, Route } from "react-router-dom";
// Constat Files

// Styles

// Components
import Home from "./Routes/Home/Home.component.jsx";
import Navigation from "./Routes/Navigation/Navigation.component.jsx";
import Authentication from "./Routes/Authentication/Authentication.component.jsx";
import ShopData from "../src/Components/ShopData/ShopData.component.jsx";
import Checkout from "./Routes/Checkout/Checkout.component.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop" element={<ShopData />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
