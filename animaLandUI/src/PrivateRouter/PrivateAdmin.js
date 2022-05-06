import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateAdmin = ({ children }) => {
  const { user } = useSelector((state) => state.userReducer);
  const token = localStorage.getItem("token");
  if (user && token && user?.isAdmin) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateAdmin;
