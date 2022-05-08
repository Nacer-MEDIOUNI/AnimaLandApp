import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateSeller = ({ children }) => {
  const { user } = useSelector((state) => state.userReducer);
  const token = localStorage.getItem("token");
  if (user && token && user?.isSeller) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateSeller;
