import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const userLogged = localStorage.getItem("user");
const Form = () => {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    category: "General",
    fatherName: "",
    motherName: "",
    fatherOcc: "",
    motherOcc: "",
    totalIncome: "",
    parentContact: ""
  });
  const [error, setError] = useState("");

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
    setData(prevData => ({ ...prevData, isDeclined: false, isVerified: false }))
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/infos/" + userLogged;
      const res = await axios.put(url, data);
      console.log(res.data)
      console.log(res.data.data.firstName)
      let verifie = false;
      let decline = false;
      // console.log(res.message);
      navigate("/loading", {
        state: { isVerified: verifie, isDeclined: decline }
      });
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 bg-indigo-50 p-10 rounded-lg max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First Name*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          value={data.firstName}
                          className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          value={data.lastName}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address*
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleChange}
                          value={data.email}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="personal-contact" className="block text-sm font-medium text-gray-700">
                          Personal Contact*
                        </label>
                        <input
                          type="tel"
                          name="contact"
                          onChange={handleChange}
                          value={data.contact}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <select
                          name="category"
                          onChange={handleChange}
                          value={data.category}
                          className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>General</option>
                          <option>SC</option>
                          <option>ST</option>
                          <option>OBC</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Father's Name*
                        </label>
                        <input
                          type="text"
                          name="fatherName"
                          onChange={handleChange}
                          value={data.fatherName}
                          className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Mother's Name*
                        </label>
                        <input
                          type="text"
                          name="motherName"
                          onChange={handleChange}
                          value={data.motherName}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>


                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Father's Occupation*
                        </label>
                        <input
                          type="text"
                          name="fatherOcc"
                          onChange={handleChange}
                          value={data.fatherOcc}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Mother's Occupation*
                        </label>
                        <input
                          type="text"
                          name="motherOcc"
                          onChange={handleChange}
                          value={data.motherOcc}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Total Annual Income*
                        </label>
                        <input
                          type="text"
                          name="totalIncome"
                          onChange={handleChange}
                          value={data.totalIncome}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Guardian's / Parent's Contact*
                        </label>
                        <input
                          type="text"
                          name="parentContact"
                          onChange={handleChange}
                          value={data.parentContact}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      {/*
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Street Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-name"
                                                    id="street-name"
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Landmark
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-name"
                                                    id="street-name"
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Loaclity
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-name"
                                                    id="street-name"
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                    State / Province
                                                </label>
                                                <input
                                                    type="text"
                                                    name="region"
                                                    id="region"
                                                    autoComplete="address-level1"
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                    ZIP / Postal code
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
    */}
                    </div>
                  </div>
                  {error && <div className={styles.error_msg}>{error}</div>}
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;