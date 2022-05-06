import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbars/IndexNavbar";
import ProductListSideBar from "../components/ProductListSideBar";
import ProductCard from "../components/ProductCard.js";
import { listProducts } from "../Redux/actions/product.js";
import spinner from "../assets/img/spinner.gif";

export default function Store() {
  const { products, loading } = useSelector((state) => state.productReducer);
  const { filters } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const getFilteredProducts = products?.filter(
    (product) =>
      product?.type === filters?.type &&
      product?.category === filters?.category &&
      product?.price > filters?.price[0] &&
      product?.price < filters?.price[1]
  );

  return (
    <>
      <Navbar />
      <ProductListSideBar />
      <div className="relative mt-48 md:ml-64">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <h5 className="text-xl font-semibold pb-4">
            Explore available {filters.type}
          </h5>
          {loading ? (
            <img
              src={spinner}
              className="flex flex-col lg:flex-row list-none lg:ml-auto"
              style={{ width: "50%", height: "50%" }}
              alt={{}}
            />
          ) : (
            <div className="products-list flex flex-wrap ">
              {getFilteredProducts.length === 0 ? (
                <h5 className="text-xl font-semibold pb-4">
                  No{" "}
                  {filters.type === "animal"
                    ? `${filters.type}s`
                    : filters.type}{" "}
                  were found! 😔
                </h5>
              ) : (
                getFilteredProducts?.map((product) => (
                  <ProductCard product={product} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
