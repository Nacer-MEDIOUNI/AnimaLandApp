// import Navbar from 'components/Navbars/AdminNavbar';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { current } from "./Redux/actions/user";

import Profile from "./views/Profile.js";
import LandingPage from "./views/LandingPage.js";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import SellerStore from "./views/SellerStore";

import Store from "./views/Store";
import CartView from "./views/CartView";

import PrivateRoute from "./PrivateRouter/PrivateRoute";
import PrivateAuth from "./PrivateRouter/PrivateAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateSeller from "./PrivateRouter/PrivateSeller";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/auth/login"
            element={
              <PrivateAuth>
                <Login />
              </PrivateAuth>
            }
          />{" "}
          <Route
            path="/auth/register"
            element={
              <PrivateAuth>
                <Register />
              </PrivateAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />{" "}
          <Route
            path="/seller_store"
            element={
              <PrivateSeller>
                <SellerStore />
              </PrivateSeller>
            }
          />{" "}
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<CartView />} />
          {/* add Navigate for first page */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
