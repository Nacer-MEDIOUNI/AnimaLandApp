/*eslint-disable*/
import * as React from "react";

import { Link } from "react-router-dom";

import UserDropdown from "../Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                >
                  AnimaLand
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-end">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <UserDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
