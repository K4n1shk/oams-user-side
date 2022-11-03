import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
const userLogged = localStorage.getItem("user");
const About = () => {
    useEffect(() => {
        axios.get("http://localhost:8080/api/infos/" + userLogged)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    let verifie = res.data.isVerified;
                    let decline = res.data.isDeclined;
                    navigate("/loading", {
                        state: { isVerified: verifie, isDeclined: decline }
                    });
                }
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        religion: "",
        contact: "",
        nationality: "",
        gender: "",
        altContact: "",
        category: "",
        DOB: "",
        fatherName: "",
        motherName: "",
        fatherOcc: "",
        motherOcc: "",
        totalIncome: "",
        parentContact: "",
        country: "",
        streetAddress: "",
        locality: "",
        landmark: "",
        district: "",
        city: "",
        state: "",
        zip: "",
        pio: "",
        NRI: "",
        Pcountry: "",
        PstreetAddress: "",
        Plocality: "",
        Plandmark: "",
        Pdistrict: "",
        Pcity: "",
        Pstate: "",
        pzip: "",
        highestQualification: "",
        tenschoolName: "",
        tenBoard: "",
        tweschoolName: "",
        tweboard: "",
        twelveMarks: "",
        tenMarks: "",
        twelveYear: "",
        tenYear: "",
        JeeMRollNumber: "",
        JEEMrank: "",
        JeeARollNumber: "",
        JEEArank: "",
        GATERollNumber: "",
        GATErank: "",
        UGCNETRollNumber: "",
        UGCNETrank: "",
        branch: "",
        domicilestate: "",
        pwd: "",
        allotedinstitute: "",
        allotedCategory: "",
        remarks: "",
        roundNumber: "",
        CSABstatus: "",
        csabAllotedInstitute: "",
        paymentMode: "",
        transactionId: "",
        bankName: "",
        feeAmount: "",
        DOD: "",
        feeType: "",
        scholarshipStatus: "",
        scholarshipName: "",
        feeYear: "",
        feeSemester: "",
        preferredHostel: "",
        preferredHostelFloor: "",
        roomStyle: "",
        messFood: "",
        hostelPaymentMode: "",
        HostelTid: "",
        HBankName: "",
        HFeeAmount: "",
        HDOD: "",
    });
    const [error, setError] = useState("");

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setData({ ...data, [name]: value });
    };

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/infos";
            const res = await axios.post(url, data);
            console.log(res.data)
            console.log(res.data.data.firstName)
            let verifie = res.data.data.isVerified;
            let decline = res.data.data.isDeclined;
            console.log(verifie, decline)
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
                <form onSubmit={handleSubmit} enctypr="multipart/form-data">
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                    <p className="mt-1 text-sm text-gray-600">Personal information is information or an opinion, including information or an opinion forming part of a database, whether true or not, and whether recorded in a material form or not, about an individual whose identity is apparent, or can reasonably be ascertained, from the information or opinion.</p>
                                </div>
                            </div>
                            {/* <form onSubmit={handleSubmit}> */}
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                {/* <form onSubmit={handleSubmit}> */}
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-6">
                                                <label
                                                    htmlFor="first-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    First Name*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    value={data.firstName}
                                                    className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="John"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Last Name*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    onChange={handleChange}
                                                    value={data.lastName}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Doe"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="email-address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Email address*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={data.email}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="yourname@youremail.com"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="religion"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Religion*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="religion"
                                                    onChange={handleChange}
                                                    value={data.religion}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Hindu"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="personal-contact"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Personal Contact*
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="contact"
                                                    onChange={handleChange}
                                                    value={data.contact}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="XXXXX XXXXX"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="nationality"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Nationality*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="nationality"
                                                    onChange={handleChange}
                                                    value={data.nationality}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Indian"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="gender"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Gender*
                                                </label>
                                                <select
                                                    name="gender"
                                                    onChange={handleChange}
                                                    value={data.gender}
                                                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option>Select an option</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="alt-contact"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Alternate Contact*
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="altContact"
                                                    onChange={handleChange}
                                                    value={data.altContact}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="XXXXX XXXXX"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="country"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Category*
                                                </label>
                                                <select
                                                    name="category"
                                                    onChange={handleChange}
                                                    value={data.category}
                                                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option>Select an option</option>
                                                    <option>General</option>
                                                    <option>SC</option>
                                                    <option>ST</option>
                                                    <option>OBC</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="dob"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Date of Birth*
                                                </label>
                                                <input
                                                    type="date"
                                                    name="DOB"
                                                    onChange={handleChange}
                                                    value={data.DOB}
                                                    className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="DD-MM-YYYY"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label
                                                    htmlFor="first-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Father's Name*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fatherName"
                                                    onChange={handleChange}
                                                    value={data.fatherName}
                                                    className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Mother's Name*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="motherName"
                                                    onChange={handleChange}
                                                    value={data.motherName}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Alicia Keys"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Father's Occupation*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fatherOcc"
                                                    onChange={handleChange}
                                                    value={data.fatherOcc}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Occupation"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Mother's Occupation*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="motherOcc"
                                                    onChange={handleChange}
                                                    value={data.motherOcc}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Occupation"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Total Annual Income*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="totalIncome"
                                                    onChange={handleChange}
                                                    value={data.totalIncome}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="XX,XX,XXX"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Guardian's / Parent's Contact
                                                </label>
                                                <input
                                                    type="text"
                                                    name="parentContact"
                                                    onChange={handleChange}
                                                    value={data.parentContact}
                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200"></div>
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Present Address
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Use a present address where you can receive mail.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="country"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Country*
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autocomplete="country-name"
                                                        onChange={handleChange}
                                                        value={data.country}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option>Select an option</option>
                                                        <option>India</option>
                                                        <option>Bangladesh</option>
                                                        <option>Nepal</option>
                                                        <option>Sri Lanka</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6 sm:col-span-6">
                                                    <label
                                                        htmlFor="street-address"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Street Name*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="streetAddress"
                                                        onChange={handleChange}
                                                        value={data.streetAddress}
                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Name of street"
                                                    />{" "}
                                                </div>

                                                <div className="col-span-6 sm:col-span-6">
                                                    <label
                                                        htmlFor="locality"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Locality*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="locality"
                                                        onChange={handleChange}
                                                        value={data.locality}
                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Enter your locality"
                                                    />{" "}
                                                </div>

                                                <div className="col-span-6 sm:col-span-6">
                                                    <label
                                                        htmlFor="landmark"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Landmark*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="landmark"
                                                        onChange={handleChange}
                                                        value={data.landmark}
                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Enter a landmark"
                                                    />{" "}
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="district"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        District*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="district"
                                                        onChange={handleChange}
                                                        value={data.district}
                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Name of District"
                                                    />{" "}
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="city"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        City*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        onChange={handleChange}
                                                        value={data.city}
                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Enter name of your present city"
                                                    />{" "}
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="state"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        State*
                                                    </label>
                                                    <select
                                                        id="state"
                                                        name="state"
                                                        autocomplete="state"
                                                        onChange={handleChange}
                                                        value={data.state}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option>Select Your State</option>
                                                        <option>Andhra Pradesh</option>
                                                        <option>Arunachal Pradesh</option>
                                                        <option>Assam</option>
                                                        <option>Bihar</option>
                                                        <option>Chhattisgarh</option>
                                                        <option>Goa</option>
                                                        <option>Gujarat</option>
                                                        <option>Haryana</option>
                                                        <option>Himachal Pradesh</option>
                                                        <option>Jammu and Kashmir</option>
                                                        <option>Jharkhand</option>
                                                        <option>Karnataka</option>
                                                        <option>Kerala</option>
                                                        <option>Madhya Pradesh</option>
                                                        <option>Maharashtra</option>
                                                        <option>Manipur</option>
                                                        <option>Meghalaya</option>
                                                        <option>Mizoram</option>
                                                        <option>Nagaland</option>
                                                        <option>Odisha</option>
                                                        <option>Punjab</option>
                                                        <option>Rajasthan</option>
                                                        <option>Sikkim</option>
                                                        <option>Tamil Nadu</option>
                                                        <option>Telangana</option>
                                                        <option>Tripura</option>
                                                        <option>Uttar Pradesh</option>
                                                        <option>Uttarakhand</option>
                                                        <option>West Bengal</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="postal-code"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        ZIP / Postal code*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="zip"
                                                        onChange={handleChange}
                                                        value={data.zip}
                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="XXX XXX"
                                                    />{" "}
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="PIO"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Are you a person of international origin(PIO)?*
                                                    </label>
                                                    <select
                                                        id="pio"
                                                        name="pio"
                                                        autocomplete="pio"
                                                        onChange={handleChange}
                                                        value={data.pio}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option>Select an option</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="NRI"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Are you a Non-resident Indian(NRI)?*
                                                    </label>
                                                    <select
                                                        id="NRI"
                                                        name="NRI"
                                                        autocomplete="NRI"
                                                        onChange={handleChange}
                                                        value={data.NRI}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option>Select an option</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block" aria-hidden="true">
                            <div className="py-5">
                                <div className="border-t border-gray-200"></div>
                            </div>
                        </div>

                        <div className="mt-10 sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Permanent Address
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Give details about your Permanent Address.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="Pcountry"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Country*
                                                        </label>
                                                        <select
                                                            id="Pcountry"
                                                            name="Pcountry"
                                                            autocomplete="Pcountry-name"
                                                            onChange={handleChange}
                                                            value={data.Pcountry}
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            <option>Select an option</option>
                                                            <option>India</option>
                                                            <option>Bangladesh</option>
                                                            <option>Nepal</option>
                                                            <option>Sri Lanka</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            htmlFor="Pstreet-address"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Street Name*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="PstreetAddress"
                                                            onChange={handleChange}
                                                            value={data.PstreetAddress}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Name of street"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            htmlFor="Plocality"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Locality*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="Plocality"
                                                            onChange={handleChange}
                                                            value={data.Plocality}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Enter your locality"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            htmlFor="Plandmark"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Landmark*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="Plandmark"
                                                            onChange={handleChange}
                                                            value={data.Plandmark}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Enter a landmark"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="Pdistrict"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            District*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="Pdistrict"
                                                            onChange={handleChange}
                                                            value={data.Pdistrict}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Name of District"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="Pcity"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            City*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="Pcity"
                                                            onChange={handleChange}
                                                            value={data.Pcity}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Enter name of your permanent residence city"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="P_state"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            State*
                                                        </label>
                                                        <select
                                                            id="P_State"
                                                            name="Pstate"
                                                            autocomplete="Pstate"
                                                            onChange={handleChange}
                                                            value={data.Pstate}
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            <option>Select Your State</option>
                                                            <option>Andhra Pradesh</option>
                                                            <option>Arunachal Pradesh</option>
                                                            <option>Assam</option>
                                                            <option>Bihar</option>
                                                            <option>Chhattisgarh</option>
                                                            <option>Goa</option>
                                                            <option>Gujarat</option>
                                                            <option>Haryana</option>
                                                            <option>Himachal Pradesh</option>
                                                            <option>Jammu and Kashmir</option>
                                                            <option>Jharkhand</option>
                                                            <option>Karnataka</option>
                                                            <option>Kerala</option>
                                                            <option>Madhya Pradesh</option>
                                                            <option>Maharashtra</option>
                                                            <option>Manipur</option>
                                                            <option>Meghalaya</option>
                                                            <option>Mizoram</option>
                                                            <option>Nagaland</option>
                                                            <option>Odisha</option>
                                                            <option>Punjab</option>
                                                            <option>Rajasthan</option>
                                                            <option>Sikkim</option>
                                                            <option>Tamil Nadu</option>
                                                            <option>Telangana</option>
                                                            <option>Tripura</option>
                                                            <option>Uttar Pradesh</option>
                                                            <option>Uttarakhand</option>
                                                            <option>West Bengal</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="postal-code"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            ZIP / Postal code*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="pzip"
                                                            onChange={handleChange}
                                                            value={data.pzip}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXX XXX"
                                                        />{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:block" aria-hidden="true">
                            <div className="py-5">
                                <div className="border-t border-gray-200"></div>
                            </div>
                        </div>
                        <div className="mt-10 sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Education Qualifications
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Enter you details related to your academia.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="HsQual"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Highest Qualification*
                                                        </label>
                                                        <select
                                                            id="highestQualification"
                                                            name="highestQualification"
                                                            autocomplete="highestQualificationt"
                                                            onChange={handleChange}
                                                            value={data.highestQualification}
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            <option>Select your highest qualification</option>
                                                            <option>12th</option>
                                                            <option>Undergraduate</option>
                                                            <option>Postgraduate</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            htmlFor="tenth-school-name"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            10th School Name*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="tenschoolName"
                                                            onChange={handleChange}
                                                            value={data.tenschoolName}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Enter your 10th standard school name"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            htmlFor="tenth-board"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            10th Board*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="tenBoard"
                                                            onChange={handleChange}
                                                            value={data.tenBoard}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Enter your 10th standard school Board"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            htmlFor="twelveth-school-name"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            12th School Name*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="tweschoolName"
                                                            onChange={handleChange}
                                                            value={data.tweschoolName}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Enter your 12th standard school name"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            htmlFor="twelveth-board"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            12th Board*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="tweboard"
                                                            onChange={handleChange}
                                                            value={data.tweboard}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Enter your 12th standard school Board"
                                                        />{" "}
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="twelveth-marks"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            12th Marks(CGPA/Percentage)*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="twelveMarks"
                                                            onChange={handleChange}
                                                            value={data.twelveMarks}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="10.0 CGPA | XX %"
                                                        />{" "}
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="tenth-marks"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            10th Marks(CGPA/Percentage)*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="tenMarks"
                                                            onChange={handleChange}
                                                            value={data.tenMarks}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="10.0 CGPA | XX %"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="twelveth-year"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            12th Passout Year*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="twelveYear"
                                                            onChange={handleChange}
                                                            value={data.twelveYear}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="20XX"
                                                        />{" "}
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="tenth-year"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            10th Passout Year*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="tenYear"
                                                            onChange={handleChange}
                                                            value={data.tenYear}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="20XX"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="JEE(M) Roll Number"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Joint Entrance Exam (Mains) Roll Number*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="JeeMRollNumber"
                                                            onChange={handleChange}
                                                            value={data.JeeMRollNumber}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXXX"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="JEE(M) Rank"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Joint Entrance Exam (Mains) Rank*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="JEEMrank"
                                                            onChange={handleChange}
                                                            value={data.JEEMrank}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXXX"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="JEE(A) Roll Number"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Joint Entrance Exam (Advanced) Roll Number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="JeeARollNumber"
                                                            onChange={handleChange}
                                                            value={data.JeeARollNumber}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXXX"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="JEE(A) Rank"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Joint Entrance Exam (Advanced) Rank
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="JEEArank"
                                                            onChange={handleChange}
                                                            value={data.JEEArank}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXXX"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="GATE Roll Number"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            GATE Roll Number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="GATERollNumber"
                                                            onChange={handleChange}
                                                            value={data.GATERollNumber}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXXX"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="GATE Rank"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            GATE Rank
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="GATErank"
                                                            onChange={handleChange}
                                                            value={data.GATErank}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXXX"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="UGC/NET Roll Number"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            UGC/NET Roll Number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="UGCNETRollNumber"
                                                            onChange={handleChange}
                                                            value={data.UGCNETRollNumber}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXXX"
                                                        />{" "}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            htmlFor="UGC/NET Rank"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            UGC/NET Rank
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="UGCNETrank"
                                                            onChange={handleChange}
                                                            value={data.UGCNETrank}
                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="XXXX"
                                                        />{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:block" aria-hidden="true">
                                <div className="py-5">
                                    <div className="border-t border-gray-200"></div>
                                </div>

                                <div className="mt-10 sm:mt-0">
                                    <div className="md:grid md:grid-cols-3 md:gap-6">
                                        <div className="md:col-span-1">
                                            <div className="px-4 sm:px-0">
                                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                                    Institute Information
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    Give details related to your Institute Allotment.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-5 md:mt-0 md:col-span-2">
                                            <div className="shadow overflow-hidden sm:rounded-md">
                                                <div className="shadow overflow-hidden sm:rounded-md">
                                                    <div className="px-4 py-5 bg-white sm:p-6">
                                                        <div className="grid grid-cols-6 gap-6">
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    htmlFor="branch"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Branch Allocated*
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="branch"
                                                                    onChange={handleChange}
                                                                    value={data.branch}
                                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    placeholder="Computer Science Engineering"
                                                                />{" "}
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    htmlFor="domicile_state"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Domicile State*
                                                                </label>
                                                                <select
                                                                    id="domicile_state"
                                                                    name="domicilestate"
                                                                    autocomplete="domicilestate"
                                                                    onChange={handleChange}
                                                                    value={data.domicilestate}
                                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                >
                                                                    <option>Select Your State</option>
                                                                    <option>Andhra Pradesh</option>
                                                                    <option>Arunachal Pradesh</option>
                                                                    <option>Assam</option>
                                                                    <option>Bihar</option>
                                                                    <option>Chhattisgarh</option>
                                                                    <option>Goa</option>
                                                                    <option>Gujarat</option>
                                                                    <option>Haryana</option>
                                                                    <option>Himachal Pradesh</option>
                                                                    <option>Jammu and Kashmir</option>
                                                                    <option>Jharkhand</option>
                                                                    <option>Karnataka</option>
                                                                    <option>Kerala</option>
                                                                    <option>Madhya Pradesh</option>
                                                                    <option>Maharashtra</option>
                                                                    <option>Manipur</option>
                                                                    <option>Meghalaya</option>
                                                                    <option>Mizoram</option>
                                                                    <option>Nagaland</option>
                                                                    <option>Odisha</option>
                                                                    <option>Punjab</option>
                                                                    <option>Rajasthan</option>
                                                                    <option>Sikkim</option>
                                                                    <option>Tamil Nadu</option>
                                                                    <option>Telangana</option>
                                                                    <option>Tripura</option>
                                                                    <option>Uttar Pradesh</option>
                                                                    <option>Uttarakhand</option>
                                                                    <option>West Bengal</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    htmlFor="PwD_status"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Are you person with disabilty (PwD)?
                                                                </label>
                                                                <select
                                                                    id="pwd"
                                                                    name="pwd"
                                                                    autocomplete="pwd"
                                                                    onChange={handleChange}
                                                                    value={data.pwd}
                                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                >
                                                                    <option>Select an option</option>
                                                                    <option>Yes</option>
                                                                    <option>No</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-6">
                                                                <label
                                                                    htmlFor="alloted_institute"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Institute Allocated*
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="allotedinstitute"
                                                                    onChange={handleChange}
                                                                    value={data.allotedinstitute}
                                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    placeholder="Indian Institute of Information Technology."
                                                                />{" "}
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    htmlFor="alloted_category"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Alloted Category*
                                                                </label>
                                                                <select
                                                                    id="alloted_category"
                                                                    name="allotedCategory"
                                                                    autocomplete="alloted_category"
                                                                    onChange={handleChange}
                                                                    value={data.allotedCategory}
                                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                >
                                                                    <option>Select an option</option>
                                                                    <option>General</option>
                                                                    <option>EWS</option>
                                                                    <option>OBC</option>
                                                                    <option>SC</option>
                                                                    <option>ST</option>
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <div className="col-span-6 sm:col-span-6">
                                                                    <label
                                                                        htmlFor="remarks"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        {" "}
                                                                        Remarks{" "}
                                                                    </label>
                                                                    <textarea
                                                                        id="remarks"
                                                                        name="remarks"
                                                                        onChange={handleChange}
                                                                        value={data.remarks}
                                                                        className="mt-1 p-1 border focus:ring-indigo-1000 focus:border-indigo-1000 block w-full shadow-sm sm:text-sm border-gray-1000 rounded-md"
                                                                        placeholder="Add remarks here"
                                                                    ></textarea>
                                                                </div>
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    htmlFor="round_number"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Round Number in which Institute Allocated*
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="roundNumber"
                                                                    onChange={handleChange}
                                                                    value={data.roundNumber}
                                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    placeholder="3"
                                                                />{" "}
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    htmlFor="CSAB_status"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Participated in CSAB?
                                                                </label>
                                                                <select
                                                                    id="CSAB_status"
                                                                    name="CSABstatus"
                                                                    autocomplete="CSABstatus"
                                                                    onChange={handleChange}
                                                                    value={data.CSABstatus}
                                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                >
                                                                    <option>Select an option</option>
                                                                    <option>Yes</option>
                                                                    <option>No</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-6">
                                                                <label
                                                                    htmlFor="csab_alloted_institute"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    CSAB Institute Allocated
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="csabAllotedInstitute"
                                                                    onChange={handleChange}
                                                                    value={data.csabAllotedInstitute}
                                                                    className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    placeholder="Indian Institute of Information Technology."
                                                                />{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block" aria-hidden="true">
                                        <div className="py-5">
                                            <div className="border-t border-gray-200"></div>
                                        </div>
                                    </div>
                                    <div className="mt-10 sm:mt-0">
                                        <div className="md:grid md:grid-cols-3 md:gap-6">
                                            <div className="md:col-span-1">
                                                <div className="px-4 sm:px-0">
                                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                                        Payment Information
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-600">
                                                        Give details about fee payment.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-5 md:mt-0 md:col-span-2">
                                                <div className="shadow overflow-hidden sm:rounded-md">
                                                    <div className="shadow overflow-hidden sm:rounded-md">
                                                        <div className="px-4 py-5 bg-white sm:p-6">
                                                            <div className="grid grid-cols-6 gap-6">
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="payment_mode"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Payment Mode*
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="paymentMode"
                                                                        onChange={handleChange}
                                                                        value={data.paymentMode}
                                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        placeholder="Online/ NEFT/ Bank Transfer"
                                                                    />{" "}
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="transactionId"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Transaction ID*
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="transactionId"
                                                                        onChange={handleChange}
                                                                        value={data.transactionId}
                                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        placeholder="IDXX XXXX XXXX"
                                                                    />{" "}
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="bankName"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Bank Name*
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="bankName"
                                                                        onChange={handleChange}
                                                                        value={data.bankName}
                                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        placeholder="INDIAN BANK"
                                                                    />{" "}
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="fee_amount"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Fee amount*
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="feeAmount"
                                                                        onChange={handleChange}
                                                                        value={data.feeAmount}
                                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        placeholder="45,XXX"
                                                                    />{" "}
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="DOD"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Date of Deposit*
                                                                    </label>
                                                                    <input
                                                                        type="date"
                                                                        name="DOD"
                                                                        onChange={handleChange}
                                                                        value={data.DOD}
                                                                        className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                                                        placeholder="DD-MM-YYYY"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="fee_type"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Fee Type*
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="feeType"
                                                                        onChange={handleChange}
                                                                        value={data.feeType}
                                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        placeholder="Seat Acceptance Fee"
                                                                    />{" "}
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="scholarship_status"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Scholarship Status*
                                                                    </label>
                                                                    <select
                                                                        id="scholarship_status"
                                                                        name="scholarshipStatus"
                                                                        autocomplete="scholarship_status"
                                                                        onChange={handleChange}
                                                                        value={data.scholarshipStatus}
                                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    >
                                                                        <option>Select an option</option>
                                                                        <option>Yes</option>
                                                                        <option>No</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="scholarshipName"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Scholarship Name*
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="scholarshipName"
                                                                        onChange={handleChange}
                                                                        value={data.scholarshipName}
                                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        placeholder="Pradhan Mantri Shiksha Yojana"
                                                                    />{" "}
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="feeYear"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Year*
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="feeYear"
                                                                        onChange={handleChange}
                                                                        value={data.feeYear}
                                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        placeholder="Ist Year"
                                                                    />{" "}
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label
                                                                        htmlFor="feeSemester"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Semester*
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="feeSemester"
                                                                        onChange={handleChange}
                                                                        value={data.feeSemester}
                                                                        className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        placeholder="Ist Semester"
                                                                    />{" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-5">
                                                <div className="border-t border-gray-200"></div>
                                            </div>
                                        </div>
                                        <div className="mt-10 sm:mt-0">
                                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                                <div className="md:col-span-1">
                                                    <div className="px-4 sm:px-0">
                                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                                            Hostel Information
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gray-600">
                                                            Enter details about your preferred hostel.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-5 md:mt-0 md:col-span-2">
                                                    <div className="shadow overflow-hidden sm:rounded-md">
                                                        <div className="shadow overflow-hidden sm:rounded-md">
                                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                                <div className="grid grid-cols-6 gap-6">
                                                                    <div className="col-span-6 sm:col-span-6">
                                                                        <label
                                                                            htmlFor="preferredHostel"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Preferred Hostel*
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="preferredHostel"
                                                                            onChange={handleChange}
                                                                            value={data.preferredHostel}
                                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            placeholder="Kalam Hall of Residence"
                                                                        />{" "}
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-2">
                                                                        <label
                                                                            htmlFor="preferred_hostel_floor"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Preferred Hostel Floor*
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="preferredHostelFloor"
                                                                            onChange={handleChange}
                                                                            value={data.preferredHostelFloor}
                                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            placeholder="2"
                                                                        />{" "}
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label
                                                                            htmlFor="room_style"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Preferred Room Style*
                                                                        </label>
                                                                        <select
                                                                            id="room_style"
                                                                            name="roomStyle"
                                                                            autocomplete="roomStyle"
                                                                            onChange={handleChange}
                                                                            value={data.roomStyle}
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option>Select an option</option>
                                                                            <option>Single Occupancy(AC)</option>
                                                                            <option>Single Occupancy(Non-AC)</option>
                                                                            <option>Double Occupancy(AC)</option>
                                                                            <option>Double Occupancy(Non-AC)</option>
                                                                            <option>Triple Occupancy</option>
                                                                            <option>Other</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label
                                                                            htmlFor="mess_food"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Preferred Mess Food*
                                                                        </label>
                                                                        <select
                                                                            id="mess_food"
                                                                            name="messFood"
                                                                            autocomplete="messFood"
                                                                            onChange={handleChange}
                                                                            value={data.messFood}
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option>Select an option</option>
                                                                            <option>Vegetarian</option>
                                                                            <option>Non-Vegetarian</option>
                                                                            <option>Vegan</option>
                                                                            <option>Egg+Vegeterian</option>
                                                                            <option>Other</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label
                                                                            htmlFor="hostel_payment_mode"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Hostel Fee Payment Mode*
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="hostelPaymentMode"
                                                                            onChange={handleChange}
                                                                            value={data.hostelPaymentMode}
                                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            placeholder="Online/ NEFT/ Bank Transfer"
                                                                        />{" "}
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label
                                                                            htmlFor="HostelTid"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Transaction ID*
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="HostelTid"
                                                                            onChange={handleChange}
                                                                            value={data.HostelTid}
                                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            placeholder="IDXX XXXX XXXX"
                                                                        />{" "}
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label
                                                                            htmlFor="H_bank_name"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Bank Name*
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="HBankName"
                                                                            onChange={handleChange}
                                                                            value={data.HBankName}
                                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            placeholder="INDIAN BANK"
                                                                        />{" "}
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label
                                                                            htmlFor="HFeeAmount"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Fee amount*
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="HFeeAmount"
                                                                            onChange={handleChange}
                                                                            value={data.HFeeAmount}
                                                                            className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            placeholder="45,XXX"
                                                                        />{" "}
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label
                                                                            htmlFor="h_date_of_deposit"
                                                                            className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                            Date of Deposit*
                                                                        </label>
                                                                        <input
                                                                            type="date"
                                                                            name="HDOD"
                                                                            onChange={handleChange}
                                                                            value={data.HDOD}
                                                                            className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                                                            placeholder="DD-MM-YYYY"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                </form>
            </div>
        </>
    );
};

export default About;