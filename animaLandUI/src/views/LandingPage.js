/*eslint-disable*/
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { listProducts } from "../Redux/actions/product.js";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footers/Footer.js";
import Navbar from "../components/Navbars/IndexNavbar.js";
import background from "../assets/img/coverAnimaLand.jpg";
import Carousel from "../components/Carousel/Carousel.js";
import { addFilter } from "../Redux/actions/filters.js";
import { Button, Stack } from "@mui/material";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <section
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
        style={{
          background: "right",
          backgroundSize: "inherit",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h5 className="font-bold  text-5xl text-blueGray ">
                Find your buddy and grap him/her some supplies
              </h5>{" "}
              <div className="mt-12">
                <Stack direction="column" spacing={1}>
                  <Link to="/store">
                    <Button
                      sx={{
                        fontSize: "bold",
                        width: 300,
                        height: 50,
                        backgroundColor: "white",
                        color: "#334155",
                      }}
                      variant="outlined"
                      onClick={() => dispatch(addFilter("type", "animal"))}
                    >
                      BROWSE AVAILABLE ANIMALS
                    </Button>
                  </Link>
                  <Link to="/store">
                    <Button
                      sx={{
                        fontSize: "bold",
                        width: 300,
                        height: 50,
                        backgroundColor: "#334155",
                        color: "white",
                      }}
                      variant="contained"
                      onClick={() => dispatch(addFilter("type", "supplies"))}
                    >
                      BROWSE AVAILABLE SUPPLIES
                    </Button>
                  </Link>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-48 pt-4">
        <header class="bg-gold sans-serif">
          <div class="mw9 center pa4 pt5-ns ph7-l">
            <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
              <span class="bg-black  white pa1 tracked-tight">
                Explore our Products
              </span>
            </h3>
            <h4 class="f3 fw1 georgia i">
              Because our pets are members of the family!
            </h4>
            <h5 class="f6 ttu tracked black-80">
              Make yourself happy by making them happy!
            </h5>
          </div>
        </header>
        <div className=" top-0 b-auto center pb-20 pt-10 lg:pb-10 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px">
          <Carousel />
        </div>
      </section>

      <section className="header relative pb-20 pt-10 lg:pb-10 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                <span class="bg-black-90 lh-copy white pa1 tracked-tight">
                  OUR Mission
                </span>
              </h3>
              <h4 class="f3 fw1 georgia i">
                To be the most trusted and convenient destination for pet
                parents (and partners), everywhere.
              </h4>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pb-20  lg:pb-10 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("../assets/img/pattern_react.png").default}
          alt="..."
        />
      </section>

      <section>
        <div class="bg-gold sans-serif">
          <div class="mw9 center pa4 pt5-ns ph7-l">
            <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
              <span class="bg-black-90 lh-copy white pa1 tracked-tight">
                AnimaLand is the best website to sell / buy Pets and their
                Supplies!
              </span>
            </h3>

            <h5 class="f6 ttu tracked black-80">By Nacer Mediouni</h5>
          </div>
        </div>
        <div class="pa4 ph7-l georgia mw9-l center">
          <h4 class="f1 fw1 georgia i mb4">
            What Should you Pay Attention to When Looking for a Pet?
          </h4>

          <p class="f5 f4-ns lh-copy  mb4">
            Are you looking for pets for sale? For many people, having their own
            pet is a heartfelt desire and often fulfilling a long-term dream.
            But should everyone really get a pet? Which pets are suitable for
            whom and what should be considered beforehand? Or how can I locate
            pets for sale near me? Buying a pet has to be well thought out.
            Hundreds of thousands of animals sell are because their owners can
            no longer or do not want to look after them. That is why it is so
            important to look closely at certain factors before purchasing a
            pet.
          </p>

          <h4 class="f1 fw1 georgia i mb4"> 💰 Cost of Pet</h4>

          <p class="f5 f4-ns lh-copy  mb4">
            The question of the pet’s cost is critical. Suppose the potential
            pet owner may want to look for high-cost pets for sale near me or
            cheap puppies for sale near me. It is vital to check your own budget
            and offset the costs carefully.
          </p>

          <h4 class="f1 fw1 georgia i mb4">
            Affection and Attention for the Pet
          </h4>

          <p class="f5 f4-ns lh-copy  mb4">
            Before finalizing the sale pet contract, another essential point is
            whether the new pet owner can offer the pet attention and care. At
            best, they should be treated like family members. This involves
            feeding, basic care, games, etc.
          </p>

          <h4 class="f1 fw1 georgia i mb4">🐕👪 Pets and Children</h4>

          <p class="f5 f4-ns lh-copy  mb4">
            In principle, almost all pets are to be kept in a household with
            children, but concerns are appropriate for potentially dangerous
            animal species. Since children also want to play with the animals,
            free-running animals such as cats or dogs are generally very
            suitable. It is also important to make it clear to the children that
            pets are not cuddly toys. They must understand and respect the
            animals and their needs!
          </p>
        </div>
      </section>

      <section className="header relative pb-20 pt-10 lg:pb-10 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                <span class="bg-black-90 lh-copy white pa1 tracked-tight">
                  OUR Values
                </span>
              </h3>
              <h4 class="f3 pa1 fw1 georgia i">We work hard, and we win.</h4>
              <p class="f6 f5-ns lh-copy measure i pl4 bl  b--gold mb4">
                At AnimaLand, we strive to deliver the best products with the
                best service – and we want to become even better. Happy
                customers are always our #1 priority, and our team members are
                passionate about finding new ways to wow both pet owners and the
                industry at large.
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pb-20 pt-32 lg:pb-10 ms:w-5/12 md:w-5/12 px-4  -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("../assets/img/values.png").default}
          alt="..."
        />
      </section>

      <section className=" py-24 lg:pb-10 bg-black">
        <div className="container mx-auto px-4">
          {/* <div className="flex flex-wrap justify-center lg:-mt-64 -mt-52"> */}
          <div className="flex flex-wrap justify-center md:w-12/12 px-4 mr-auto ml-auto -mt-52 ">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Any Concerns?</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
