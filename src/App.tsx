
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import AuthLayout from "./components/layout/AuthLayout";
import BaseLayout from "./components/layout/BaseLayout";

import { GlobalStyles } from "./styles/global/GlobalStyles";
import SignUp from "./screens/auth/SignUpScreen";
import SignIn from "./screens/auth/SignInScreen";

import Home from "./screens/home/HomeScreen";
import ProductDetails from "./screens/product/ProductDetailsScreen";
import MapScreen from "./screens/map/MapScreen";
import ConfirmScreen from "./screens/user/ConfirmScreen";
import Account from "./screens/user/AccountScreen";
import Order from "./screens/user/OrderListScreen";

function App() {

  return (
    <>
    <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/turf/:id" element={<ProductDetails />} />
            <Route path="/map" element={<MapScreen />} />
            <Route path="/confirm" element={<ConfirmScreen />} />
            <Route path="/account" element={<Account />} />
            <Route path="/order" element={<Order />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="sign_up" element={<SignUp />} />
            <Route path="sign_in" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
