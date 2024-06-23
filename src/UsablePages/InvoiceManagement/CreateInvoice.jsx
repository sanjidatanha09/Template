/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";

import { MdMiscellaneousServices } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import React from "react";
import "../../UsablePages/FormElements/DropDownNoSearch/CSSDrop/Drop.css";
import Flatpickr from "react-flatpickr";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" }
];



const CreateInvoice = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="margin_top">
      <div className="flex flex-col md:flex-row w-full mx-auto md:w-[100%] _gap mb-20 card_bg font_standard ">
        {/* Expanse receive list (1st part) */}
        <div
          className="card_bg md:w-8/12 lg:w-9/12 text_color rounded_primary overflow-hidden border_bg border padding_bottom"
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex flex-col md:flex-row justify-between px-5 pt-5 gap-2 md:gap-20 lg:gap-2">
            <div className="mb-3 w-[90%] md:w-full lg:w-[80%] 2xl:w-72 h-[150px] overflow-hidden ">
              <img
                className="w-full h-full object-contain md:object-contain"
                src="https://cashbaksho.com/backend/billing_invoice_logo.png"
                alt=""
              />
            </div>
            <div className="flex flex-col lg:items-end  my-4 lg:my-0 ">
              <div className="padding_top w-full">
                {/* input full width */}
                <label className="text_color text_font">
                  Date <span className="required_text_color">(required)</span>{" "}
                </label>
                <Flatpickr
                  className="card_bg border relative border_bg text_color font_standard  rounded-sm focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none mt-1"
                  placeholder="Select Date"
                  value={date}
                  dateFormat="d-m-Y"
                  onChange={(date) => setDate(date)}
                />
              </div>

              <div className="padding_top">
                {/* input full width */}
                <label className="text_color text_font">
                  Email<span className="required_text_color">(required)</span>{" "}
                </label>
                <input
                  type="email"
                  className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                  placeholder="Search Here"
                  required
                />
              </div>
              {/* <div className="flex  md:justify-end justify-between items-center  w-full gap-2">
                                <span className=" md:text-sm lg:text-lg text-black dark:text-white md:w-[31%] lg:w-[37%]">
                                    Invoice Receiver :{" "}
                                </span>
                                <input
                                    type="text"
                                    placeholder="Receiver"
                                    className="input input-bordered w-[220px] h-[40px] bg-[#f7f7f7] dark:bg-base-100 "
                                />
                            </div> */}
            </div>
          </div>

          <hr className="border_bg margin_bottom margin_top" />
          <div className="flex flex-col md:flex-row justify-between items-center _gap padding_top mx-4">
            <div className="w-full z-40">
              <label htmlFor="" className="text_color text_font">
                Billing Branch
                <span className="required_text_color">(required)</span>
              </label>
              <Dropdown
                placeholder="Select Country"
                fluid
                search
                selection
                options={countryOptions}
                className="text_field text_font card_bg marginTop_4px"
              />
            </div>
            <div className="w-full z-40">
              <label
                htmlFor=""
                className="hover:outline-none hover:border-none text_color text_font"
              >
                Invoice To
                <span className="required_text_color">(required)</span>
              </label>
              <Dropdown
                placeholder="Select Country"
                fluid
                search
                selection
                options={countryOptions}
                className="text_field text_font marginTop_4px"
              />
            </div>
          </div>

          <div className="flex marginTop_4px justify-start mx-4">
            <div className="w-[50%] pl-2">
              <h6 className="marginTop_4px">
                <span className="">Name : </span>Uttara
              </h6>
              <h6 className="marginTop_4px">
                <span className="">Mobile : </span>
                01200000000
              </h6>
              <h6 className="marginTop_4px">
                <span className="">Email : </span>
                uttara@gmail.com
              </h6>
              <h6 className="marginTop_4px">
                <span className="">Address : </span>Uttara
              </h6>
            </div>
            <div className="w-[50%] pl-2">
              <h6 className="marginTop_4px">
                <span className="">Name : </span>Uttaraa
              </h6>
              <h6 className="marginTop_4px">
                <span className=" ">Mobile : </span>
                01200000000
              </h6>
              <h6 className="marginTop_4px">
                <span className="">Email : </span>
                uttara@gmail.com
              </h6>
              <h6 className="marginTop_4px">
                <span className="">Address : </span>Uttara
              </h6>
            </div>
          </div>
          <hr className="border_bg margin_bottom margin_top" />

          {/* service item */}

          <div className="px-4">
            <h2 className="font_standard">Service Item</h2>
            <div className="gap-3 border border_bg px-2">
              <div className="flex flex-col md:flex-row justify-between items-center _gap padding_top margin_bottom">
                <div className="w-full">
                  <label htmlFor="" className="text_color text_font">
                    Service Category
                    <span className="required_text_color">(required)</span>
                  </label>
                  <Dropdown
                    placeholder="Select Country"
                    fluid
                    search
                    selection
                    options={countryOptions}
                    className="text_field text_font card_bg marginTop_4px"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="hover:outline-none hover:border-none text_color text_font"
                  >
                    Service Select
                    <span className="required_text_color">(required)</span>
                  </label>
                  <Dropdown
                    placeholder="Select Country"
                    fluid
                    search
                    selection
                    options={countryOptions}
                    className="text_field text_font marginTop_4px"
                  />
                </div>
              </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 w-[100%] _gap margin_top">
                <div className="">
                  {/* input full width */}
                  <label className="text_color text_font">
                    Service Cost
                    <span className="required_text_color">(required)</span>{" "}
                  </label>
                  <input
                    type="number"
                    className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                    placeholder="Search Here"
                    required
                  />
                </div>
                <div className="">
                  {/* input full width */}
                  <label className="text_color text_font">
                    Quantity
                    <span className="required_text_color">(required)</span>{" "}
                  </label>
                  <input
                    type="number"
                    className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                    placeholder="Search Here"
                    required
                  />
                </div>

                <div className="">
                  {/* input full width */}
                  <label className="text_color text_font">
                    Discount
                    <span className="required_text_color">(required)</span>{" "}
                  </label>
                  <input
                    type="number"
                    className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                    placeholder="Search Here"
                    required
                  />
                </div>

                <div className="">
                  {/* input full width */}
                  <label className="text_color text_font">
                    Total Price
                    <span className="required_text_color">(required)</span>{" "}
                  </label>
                  <input
                    type="number"
                    className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                    placeholder="Search Here"
                    required
                  />
                </div>
              </div>

              <div className="margin_top">
                <label htmlFor="" className="">
                  Description <span className="text-red-400">(required)</span>
                </label>
                <textarea
                  className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border   focus:outline-none marginTop_4px w-[100%] py-2 "
                  placeholder="Bio"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <button className="btn_primary margin_top ">
              Add Service
            </button>
          </div>
          <hr className="border_bg margin_top" />
          <div className="mx-4 flex flex-col items-end justify-center">
            <div className="flex flex-col lg:items-end lg:w-[40%] ">
              <div className="margin_top w-full flex _gap items-center">
                <span className="text_color font_standard w-full text-right">Service Qty</span>
                <input
                  type="text"
                  disabled
                  defaultValue='2'
                  className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                  placeholder="Search Here"
                  required
                />
              </div>

              <div className="marginTop_4px w-full flex _gap items-center">
                <span className="text_color font_standard w-full text-right">Sub Total</span>
                <input
                  type="text"
                  disabled
                  defaultValue='2000'
                  className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                  placeholder="Search Here"
                  required
                />
              </div>
              <div className="marginTop_4px w-full flex _gap items-center">
                <span className="text_color font_standard w-full text-right">Discount</span>
                <input
                  type="text"
                  disabled
                  defaultValue='1000'
                  className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                  placeholder="Search Here"
                  required
                />
              </div>
              <div className="marginTop_4px w-full flex _gap items-center">
                <span className="text_color font_standard w-full text-right">Special Discount</span>
                <input
                  type="text"
                  disabled
                  defaultValue='1000'
                  className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                  placeholder="Search Here"
                  required
                />
              </div>
              <div className="marginTop_4px w-full flex _gap items-center">
                <span className="text_color font_standard w-full text-right">Total Amount</span>
                <input
                  type="text"
                  disabled
                  defaultValue='2000'
                  className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                  placeholder="Search Here"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 lg:w-3/12 border_bg card_bg margin_bottom font_standard">
          {/* billing notes */}
          <div
            style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
            className="card_bg text_color rounded_primary overflow-hidden border_bg border"
          >
            <div className="flex border_bg card_header justify-start items-center gap-2">
              <FaAlignRight className="text-2xl" />
              <h6 className="font-bold">Billing Notes</h6>
            </div>
            <div className="padding_left padding_right margin_top">
              <label className=" ">
                Notes<span className="text-red-500">(required)</span>
              </label>
              <textarea
                className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border focus:outline-none marginTop_4px w-[100%] py-2 "
                placeholder="Bio"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <hr className="p-0 m-0 dark:invisible" />
            <div className="flex flex-col lg:flex-row w-full text-center  _gap justify-between _padding">
              <button className="btn_primary flex _gap items-center justify-center lg:flex-1">
                <HiUsers /> Client
              </button>
              <button className="btn_primary flex _gap items-center justify-center lg:flex-1">
                <MdMiscellaneousServices /> Service
              </button>
            </div>
          </div>

          {/* Invoice options (2nd part) w-[340px] */}
          <div
            style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
            className="card_bg text_color rounded_primary overflow-hidden border_bg border margin_top"
          >
            <div className="flex border_bg card_header justify-start items-center gap-2">
              <FaAlignRight className="text-2xl" />
              <h6 className="font-bold">Invoice Options</h6>
            </div>
            <div className="z-50 padding_left padding_right margin_top">
              {/* 1st Dropdown large screen */}
              <label htmlFor="" className="text_color text_font ">
                Payment Type{" "}
                <span className="required_text_color">(required)</span>
              </label>
              <Dropdown
                placeholder="Select Country"
                fluid
                search
                selection
                options={countryOptions}
                className="text_field text_font marginTop_4px"
              />
            </div>
            <div className="padding_left padding_right margin_top z-40">
              {/* 1st Dropdown large screen */}
              <label htmlFor="" className="text_color text_font ">
                Invoice Terms{" "}
                <span className="required_text_color">(required)</span>
              </label>
              <Dropdown
                placeholder="Select Country"
                fluid
                search
                selection
                options={countryOptions}
                className="text_field text_font marginTop_4px"
              />
            </div>
            <hr />
            <div className="_padding w-full text-center">
              <button className="btn_primary w-full ">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateInvoice;
