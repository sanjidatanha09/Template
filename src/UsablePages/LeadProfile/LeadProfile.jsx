/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { FaExclamationTriangle } from "react-icons/fa";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { Dropdown } from "semantic-ui-react";
import TableModal from "../Table/TableModal";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
];

const LeadProfile = () => {
  const [popOpen, setPopOpen] = useState(false);
  return (
    <div className="margin_top text_color">
      <h1 className="text_color font_large">Personal Profile</h1>
      <div className="flex flex-col md:flex-row gap-7 ">
        <div className="flex flex-col md:w-[40%] lg:w-[30%] gap-7">
          <div className="card_bg w-full shadow-2xl rounded_secondary border border_bg overflow-hidden">
            <div className="card_header paddingTop_4px paddingBottom_4px">
              <h1 className="text_color font_standard mx-auto ">Green House Hotel & Tours (Budget Hotel Nearest Dhaka Airport)</h1>
            </div>
            <div>
              <img
                className="w-[100%] h-[250px] rounded_secondary border _padding"
                src="https://mylead.xyz/uploads/organization_image/1711446930.png"
                alt="girls-image"
              />
            </div>
            {/* superAdmin title */}
            <div className="text-center margin_top ">
              <h1 className="text_primary font_standard">
                Khan Tassen Islam
              </h1>
            </div>
            {/* WB-MR-0012 button */}
            <div className="bg_status_primary font_standard max-w-fit mx-auto">
              WB-MR-0012
            </div>
            <div className="flex justify-between items-center margin_top text_color padding_left padding_right w-full gap-4">
              <div className="border border-dashed border_bg w-[50%] text-center padding_top padding_bottom">
                <h6 className="font_standard text-center font-bold">1200tk</h6>
                <p className="font_standard">Installation Charge</p>
              </div>
              <div className="border border_bg border-dashed w-[50%] text-center padding_top padding_bottom">
                <h6 className="font_standard font-bold">tk</h6>
                <p className="font_standard">Monthly Charge</p>
              </div>
            </div>
            {/* Details start*/}
            <div className="flex justify-between items-center margin_top margin_bottom">
              <h1 className="font_title px-2">Details</h1>
            </div>
            <hr className="border_bg" />

            <div className="_padding ">
              <h6 className="font_standard flex justify-start _gap6px ">
                <span className="font_standard font-bold ">Email : </span>
                uttara@gmail.com
              </h6>
              <h6 className="font_standard flex justify-start _gap6px marginTop_4px">
                <span className=" font-bold">Mobile : </span>
                01200000000
              </h6>
              <h6 className="font_standard flex justify-start _gap6px marginTop_4px">
                <span className=" font-bold">Telephone : </span>
                uttara@gmail.com
              </h6>
              <h6 className="font_standard flex justify-start _gap6px marginTop_4px">
                <span className=" font-bold w-[25%] md:w-[30%] lg:w-[20%]">Address :</span>
                <span className="w-[75%] md:w-[70%] lg:w-[80%]">
                  Jalal Plaza (2nd floor), 84, CDA Avenue, Muradpur, Chittagong,
                  Chattogram 4000
                </span>
              </h6>
              <h6 className="font_standard flex justify-start _gap6px marginTop_4px">
                <span className=" font-bold">District : </span>
                Chittagong
              </h6>
              <h6 className="font_standard flex justify-start _gap6px marginTop_4px">
                <span className=" font-bold">Interest : </span>40%
              </h6>
              <h6 className="font_standard flex justify-start _gap6px marginTop_4px">
                <span className="font-bold ">Google Map : </span>Map Link
              </h6>
            </div>
          </div>
          <div className="card_bg shadow-2xl rounded_secondary border border_bg overflow-hidden margin_bottom ">
            <div className=" flex justify-between items-center px-2 border-b border_bg mb-10">
              <h1 className="font-bold p-3">Status</h1>
              <button className="btn_warning">
                Processing
              </button>
            </div>
            <hr className="border_bg" />
            <div className="px-2">
              <button className="btn_info w-full marginTop_4px marginBottom_4px">
                Change Status
              </button>
            </div>
          </div>
        </div>

        {/* 2nd part */}

        <div className="md:w-[60%] lg:w-[70%] font_standard ">
          <div className=" mb-5">
            <Tab.Group>
              <Tab.List className="flex justify-start  items-start margin_bottom rounded_secondary text_color  top_header_bg">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "my-auto  btn_tableNormal font-bold",
                      " focus:outline-none ",
                      selected
                        ? "font_title btn_table font-bold duration-500 border h-full"
                        : " "
                    )
                  }
                >
                  Contact
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "my-auto  btn_tableNormal font-bold",
                      " focus:outline-none ",
                      selected
                        ? "font_title btn_table font-bold duration-500 border h-full"
                        : " "
                    )
                  }
                >
                  Contact
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "my-auto  btn_tableNormal font-bold",
                      " focus:outline-none ",
                      selected
                        ? "font_title btn_table font-bold duration-500 border h-full"
                        : " "
                    )
                  }
                >
                  Contact
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "my-auto  btn_tableNormal font-bold",
                      " focus:outline-none ",
                      selected
                        ? "font_title btn_table font-bold duration-500 border h-full"
                        : " "
                    )
                  }
                >
                  Contact
                </Tab>
                {/* <Tab
                  className={({ selected }) =>
                    classNames(
                      " rounded-sm py-2 font-semibold leading-5 m-2",
                      " focus:outline-none",
                      selected
                        ? "bg-blue-500 text-white w-24"
                        : " hover:bg-white/[0.12] hover:text-gray-500 dark:hover:bg-blue-500 dark:hover:text-white w-24"
                    )
                  }
                >
                  Payment
                </Tab> */}
              </Tab.List>
              <Tab.Panels className="mt-[28px] shadow-2xl border border_bg rounded_secondary">
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border dark:border-gray-400 border-primary3 ",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
                    className="border dark:border-none rounded-md dark:bg-[#2F3349] p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none w-full">
                      <div className="flex flex-col top_header_bg md:flex-row md:items-center md:justify-between gap-2 md:gap-0 mb-4 w-full ">
                        <div className="flex">
                          <button className=" font_title btn_table text_color font-bold duration-500">
                            All(0)
                          </button>
                          <button className="font_title btn_table text_color font-bold duration-500">
                            Active(1)
                          </button>
                          <button className="font_title btn_table text_color font-bold duration-500">
                            Inactive(0)
                          </button>
                        </div>
                        <TableModal />
                      </div>
                    </div>
                    <div className="overflow-x-auto min-h-[30vh] ">
                      <table className="table border border_bg ">
                        {/* head */}
                        <thead className="h-[40px]">
                          <tr className="uppercase text-center h-[40px] table_header_bg font-bold text_color font_title">
                            <th className="font_standard table_border border">Name</th>
                            <th className="font_standard table_border border">
                              status
                            </th>
                            <th className="font_standard table_border border">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" text-center">
                          <tr>
                            <td
                              className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                            >
                              Beauty
                            </td>
                            <td className="border ">
                              <button className="rounded-sm bg_status_success font-semibold border-none font_standard">
                                Active
                              </button>
                            </td>
                            <td className="border ">
                              <button className="rounded-md border-none py-0 px-2 relative">
                                {/* <FilterDropdown /> */}
                                <BsThreeDotsVertical
                                  onClick={() => setPopOpen(!popOpen)}
                                  className="text-2xl font-bold text_color"
                                />
                                <div
                                  className={`card_bg w-44 border border_bg absolute opacity-0 ${popOpen && "opacity-100"
                                    } right-[14px] top-[24px] rounded-md rounded-tr-sm`}
                                >
                                  <ul className="text_color text-left">
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      {" "}
                                      <MdEdit /> Edit
                                    </li>
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      <MdDelete /> Delete
                                    </li>
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      <IoMdEye /> View
                                    </li>
                                  </ul>
                                </div>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border dark:border-gray-400 border-primary3 ",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
                    className="border dark:border-none rounded-md dark:bg-[#2F3349] p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none w-full">
                      <div className="flex flex-col top_header_bg md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:bg-gray-500 bg-[#DDDBFB] mb-4 w-full ">
                        <div className="flex">
                          <button className=" font_title btn_table text_color font-bold duration-500">
                            All(0)
                          </button>
                          <button className="font_title btn_table text_color font-bold duration-500">
                            Active(1)
                          </button>
                          <button className="font_title btn_table text_color font-bold duration-500">
                            Inactive(0)
                          </button>
                        </div>
                        <TableModal />
                      </div>
                    </div>
                    <div className="overflow-x-auto min-h-[30vh] ">
                      <table className="table border border_bg ">
                        {/* head */}
                        <thead className="h-[40px]">
                          <tr className="uppercase text-center h-[40px] table_header_bg font-bold text_color font_title">
                            <th className="font_standard table_border border">Name</th>
                            <th className="font_standard table_border border">
                              status
                            </th>
                            <th className="font_standard table_border border">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" text-center">
                          <tr>
                            <td
                              className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                            >
                              Beauty
                            </td>
                            <td className="border ">
                              <button className="rounded-sm bg_status_success font-semibold border-none font_standard">
                                Active
                              </button>
                            </td>
                            <td className="border ">
                              <button className="rounded-md border-none py-0 px-2 relative">
                                {/* <FilterDropdown /> */}
                                <BsThreeDotsVertical
                                  onClick={() => setPopOpen(!popOpen)}
                                  className="text-2xl font-bold text_color"
                                />
                                <div
                                  className={`card_bg w-44 border border_bg absolute opacity-0 ${popOpen && "opacity-100"
                                    } right-[14px] top-[24px] rounded-md rounded-tr-sm`}
                                >
                                  <ul className="text_color text-left">
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      {" "}
                                      <MdEdit /> Edit
                                    </li>
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      <MdDelete /> Delete
                                    </li>
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      <IoMdEye /> View
                                    </li>
                                  </ul>
                                </div>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border dark:border-gray-400 border-primary3 ",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
                    className="border dark:border-none rounded-md dark:bg-[#2F3349] p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none w-full">
                      <div className="flex flex-col top_header_bg md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:bg-gray-500 bg-[#DDDBFB] mb-4 w-full ">
                        <div className="flex">
                          <button className=" font_title btn_table text_color font-bold duration-500">
                            All(0)
                          </button>
                          <button className="font_title btn_table text_color font-bold duration-500">
                            Active(1)
                          </button>
                          <button className="font_title btn_table text_color font-bold duration-500">
                            Inactive(0)
                          </button>
                        </div>
                        <TableModal />
                      </div>
                    </div>
                    <div className="overflow-x-auto min-h-[30vh] ">
                      <table className="table border border_bg ">
                        {/* head */}
                        <thead className="h-[40px]">
                          <tr className="uppercase text-center h-[40px] table_header_bg font-bold text_color font_title">
                            <th className="font_standard table_border border">Name</th>
                            <th className="font_standard table_border border">
                              status
                            </th>
                            <th className="font_standard table_border border">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" text-center">
                          <tr>
                            <td
                              className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                            >
                              Beauty
                            </td>
                            <td className="border ">
                              <button className="rounded-sm bg_status_success font-semibold border-none font_standard">
                                Active
                              </button>
                            </td>
                            <td className="border ">
                              <button className="rounded-md border-none py-0 px-2 relative">
                                {/* <FilterDropdown /> */}
                                <BsThreeDotsVertical
                                  onClick={() => setPopOpen(!popOpen)}
                                  className="text-2xl font-bold text_color"
                                />
                                <div
                                  className={`card_bg w-44 border border_bg absolute opacity-0 ${popOpen && "opacity-100"
                                    } right-[14px] top-[24px] rounded-md rounded-tr-sm`}
                                >
                                  <ul className="text_color text-left">
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      {" "}
                                      <MdEdit /> Edit
                                    </li>
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      <MdDelete /> Delete
                                    </li>
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      <IoMdEye /> View
                                    </li>
                                  </ul>
                                </div>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border dark:border-gray-400 border-primary3 ",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
                    className="border dark:border-none rounded-md dark:bg-[#2F3349] p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none w-full">
                      <div className="flex flex-col top_header_bg md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:bg-gray-500 bg-[#DDDBFB] mb-4 w-full ">
                        <div className="flex">
                          <button className=" font_title btn_table text_color font-bold duration-500">
                            All(0)
                          </button>
                          <button className="font_title btn_table text_color font-bold duration-500">
                            Active(1)
                          </button>
                          <button className="font_title btn_table text_color font-bold duration-500">
                            Inactive(0)
                          </button>
                        </div>
                        <TableModal />
                      </div>
                    </div>
                    <div className="overflow-x-auto min-h-[30vh] ">
                      <table className="table border border_bg ">
                        {/* head */}
                        <thead className="h-[40px]">
                          <tr className="uppercase text-center h-[40px] table_header_bg font-bold text_color font_title">
                            <th className="font_standard table_border border">Name</th>
                            <th className="font_standard table_border border">
                              status
                            </th>
                            <th className="font_standard table_border border">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" text-center">
                          <tr>
                            <td
                              className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                            >
                              Beauty
                            </td>
                            <td className="border ">
                              <button className="rounded-sm bg_status_success font-semibold border-none font_standard">
                                Active
                              </button>
                            </td>
                            <td className="border ">
                              <button className="rounded-md border-none py-0 px-2 relative">
                                {/* <FilterDropdown /> */}
                                <BsThreeDotsVertical
                                  onClick={() => setPopOpen(!popOpen)}
                                  className="text-2xl font-bold text_color"
                                />
                                <div
                                  className={`card_bg w-44 border border_bg absolute opacity-0 ${popOpen && "opacity-100"
                                    } right-[14px] top-[24px] rounded-md rounded-tr-sm`}
                                >
                                  <ul className="text_color text-left">
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      {" "}
                                      <MdEdit /> Edit
                                    </li>
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      <MdDelete /> Delete
                                    </li>
                                    <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                                      <IoMdEye /> View
                                    </li>
                                  </ul>
                                </div>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </Tab.Panel>

              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadProfile;
