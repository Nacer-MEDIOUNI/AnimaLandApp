import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Box } from "@mui/material";

import FooterSmall from "../../components/Footers/FooterSmall";
import AuthNavbar from "../../components/Navbars/AuthNavbar";

import { clearErrors, register } from "../../Redux/actions/user";

export default function Register() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors, success } = useSelector((state) => state.userReducer);

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(register(formData, navigate));
  };

  useEffect(() => {
    if (success) {
      toast("You're registred successfully!");
    }
    if (errors) {
      toast(errors);
    }
    dispatch(clearErrors());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AuthNavbar />
      <main>
        <section className="relative w-full h-full py-20 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full" />
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <br />
                      <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign up with credentials{" "}
                      </h6>
                      <hr className="mt-6 border-b-1 border-blueGray-300" />
                    </div>
                    <form onSubmit={handleRegister}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Name"
                          required
                          autoFocus
                          onChange={handleChange}
                          name={"name"}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          type="email"
                          name={"email"}
                          placeholder="Email"
                          required
                          onChange={handleChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name={"password"}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <Box mt={2}>
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Account Type:
                        </label>
                      </Box>
                      <Box mt={2} mb={2}>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            name="isSeller"
                            value={true}
                            type="radio"
                            onChange={handleChange}
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            required
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            Seller
                          </span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer ml-2">
                          <input
                            id="customCheckLogin"
                            name="isSeller"
                            value={false}
                            type="radio"
                            onChange={handleChange}
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            required
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            Client
                          </span>
                        </label>
                      </Box>

                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            type="checkbox"
                            required
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              className="text-lightBlue-500"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Create Account
                        </button>
                      </div>
                      <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-blueGray-400 text-center mb-3 font-bold">
                          <hr className="mt-2 mb-2 border-b-1 border-blueGray-300" />
                          <h6 className="text-6xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
                            Already have an account?{" "}
                            {
                              <Link
                                className="text-blueGray-800"
                                to="/auth/login"
                              >
                                Log in
                              </Link>
                            }
                          </h6>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
