import React from 'react';
import { FaAlignRight, FaEye } from 'react-icons/fa';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { IoAddCircleOutline, IoPrintSharp } from 'react-icons/io5';
import { MdSaveAlt } from 'react-icons/md';

const SelectExpense = () => {
    return (
        <div className="w-[96%] md:w-4/12 lg:w-3/12 border_bg card_bg margin_bottom font_standard ">
            {/* Invoice options (2nd part) w-[340px] */}
            <div
                style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
                className="card_bg text_color rounded_primary overflow-hidden border_bg border margin_top"
            >
                <div className="flex border_bg card_header justify-start items-center gap-2">
                    <FaAlignRight className="text-2xl" />
                    <h6 className="font-bold">Select Expense</h6>
                </div>
                <div className="_padding w-full text-center flex flex-col _gap">
                    <button className="btn_primary w-full flex items-center _gap justify-center ">
                        <IoAddCircleOutline className="font_large" />
                        Add</button>
                </div>
            </div>
            {/* billing notes */}
            <div
                style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
                className="card_bg text_color rounded_primary overflow-hidden border_bg border margin_top"
            >
                <div className="flex border_bg card_header justify-start items-center gap-2">
                    <FaAlignRight className="text-2xl" />
                    <h6 className="font-bold">Receipt Notes</h6>
                </div>
                <div className="padding_left padding_right margin_top margin_bottom">
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
                <div className="_padding w-full text-center flex flex-col _gap border-t border_bg">
                    <button className="btn_primary w-full flex items-center _gap justify-center ">
                        <MdSaveAlt className="font_large" />
                        Save Receipt</button>

                </div>
            </div>
           
        </div>
    );
};

export default SelectExpense;