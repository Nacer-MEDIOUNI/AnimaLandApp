import React, { useEffect } from "react";

// components
import Navbar from "../components/Navbars/IndexNavbar";
import { useDispatch } from "react-redux";
import { listProducts } from "../Redux/actions/product.js";
import SellerCardTable from "../components/Cards/SellerCardTable";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="relative mt-48 ">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <h5 className="text-xl font-semibold pb-4">My products</h5>
          <div className="products-list flex flex-wrap ">
            <SellerCardTable />
          </div>
        </div>
      </div>
    </>
  );
}
