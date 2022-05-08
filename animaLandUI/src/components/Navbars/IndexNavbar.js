/*eslint-disable*/
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Badge } from "@mui/material";
import spinner from "../../assets/img/spinner.gif";
import UserDropdown from "../Dropdowns/UserDropdown.js";
import SellerDropdown from "../Dropdowns/SellerDropdown.js";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { isLoad, user } = useSelector((state) => state.userReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const token = localStorage.getItem("token");
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex   lg:w-auto lg:static lg:block lg:justify-start">
            <div className="w-full relative flex  flex-wrap lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/"
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                AnimaLand
              </Link>
              <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-1">
                <i class="fa-solid fa-magnifying-glass-arrow-right fa-beat"></i>
              </span>
              {/* <input
                type="text"
                placeholder="Search ..."
                style={{ width: "auto" }}
                class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
              /> */}
              <Link to="/store">
                <IconButton
                  sx={{
                    marginLeft: 1,
                    color: "#ffc107",
                  }}
                >
                  <StorefrontIcon />
                </IconButton>
              </Link>
            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start " +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {isLoad ? (
                <img
                  src={spinner}
                  className="flex flex-col lg:flex-row list-none lg:ml-auto"
                  style={{ width: "auto", height: "auto" }}
                />
              ) : token ? (
                <>
                  <ul className="flex flex-col lg:flex-row list-none mr-auto">
                    <li className="flex items-center ">
                      <Link className="cart-icon-container" to="/cart">
                        {cartItems?.length > 0 && (
                          <Badge
                            className="cart-badge"
                            badgeContent={cartItems.length}
                            color="primary"
                          />
                        )}
                        <IconButton
                          sx={{
                            marginRight: 2,
                            color: "#ffc107",
                          }}
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
                      </Link>
                    </li>

                    <li className="flex items-center">
                      {user.isSeller ? <SellerDropdown /> : <UserDropdown />}
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <li className="flex items-center">
                    <Link to="/cart">
                      {cartItems.length > 0 && (
                        <Badge
                          badgeContent={cartItems.length}
                          color="primary"
                        />
                      )}
                      <IconButton
                        sx={{
                          marginRight: 2,
                          color: "#ffc107",
                        }}
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </Link>
                  </li>

                  <li className="flex items-center">
                    <Link to="/auth/login">
                      <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        Log in
                      </button>
                    </Link>
                  </li>

                  <li className="flex items-center">
                    <Link to="/auth/register">
                      <button
                        className="bg-blueGray-800 active:bg-blueGray-50 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        Create account
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
