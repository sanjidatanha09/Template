/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Title from '../../Utility/TItle/Title';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';

const InvoicePdf = () => {
    const [popOpen, setPopOpen] = useState(false);
    return (
        <div className='card_bg max-w-5xl mx-auto margin_top font_standard text_color'>
            <div className='flex items-start justify-between font_standard margin_bottom padding_left padding_right marginTop_4px'>
                <div  className='mt-2 h-full'>
                    <h6 className="font_40px text_color font-bold text_gray" >Invoice</h6>
                </div>
                <div className="flex flex-col items-end text_gray">
                    <h6 className=" ">
                        <span className="font-bold">Branch : </span>
                        Test Branch
                    </h6>
                    <h6 className="marginBottom_4px">
                        <span className="font-bold">Address : </span>
                        Uttara
                    </h6>
                    <h6 className="marginBottom_4px">
                        <span className="font-bold">Phone 1 : </span>
                        01799000000
                    </h6>
                    <h6 className="marginBottom_4px">
                        <span className="font-bold">Email : </span>testbranch@gmail.com
                    </h6>
                </div>
            </div>
            <div className='grid grid-cols-3 font_standard margin_bottom padding_left padding_right marginTop_40px'>
                <div className=''>
                    <h6 className='font-bold margin_bottom text_gray'>
                        Billed To
                    </h6>
                    <h6 className="marginBottom_4px">
                        Test Branch
                    </h6>
                    <h6 className="marginBottom_4px">
                        Uttara
                    </h6>
                    <h6 className="marginBottom_4px">
                        01799000000
                    </h6>
                    <h6 className="">
                        testbranch@gmail.com
                    </h6>
                </div>
                <div className=''>
                    <h6 className='font-bold margin_bottom text_gray' >
                        Invoice Number
                    </h6>
                    <h6 className="marginBottom_4px">
                        #1000002
                    </h6>
                    <h6 className='font-bold margin_bottom text_gray'>
                        Date Of Issue
                    </h6>
                    <h6 className="">
                        27-04-2024
                    </h6>

                </div>
                <div className=''>
                    <h6 className='font-bold margin_bottom text_gray'>
                        Invoice Total
                    </h6>
                    <h6 className="font-bold text_info font_40px">
                        18000৳
                    </h6>
                </div>
            </div>
            <div className="overflow-x-auto marginTop_40px">
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
                                className={` pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                            >
                                Beauty
                            </td>
                            <td
                                className={` pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                            >
                                Beauty
                            </td>
                            <td
                                className={` pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                            >
                                Beauty
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='flex font_standard marginTop_40px '>
                <div className='flex-1'>
                    <h6 className='font-bold margin_bottom text_gray'>Invoice Terms</h6>
                    <h6>sdfsd</h6>
                </div>
                <div className="flex flex-col justify-end  font_standard ">
                    <div className="flex w-full gap-10 marginBottom_4px">
                        <h6 className='text_info flex-1'>Service Qty:</h6>
                        <h6 className=''>2</h6>
                    </div>
                    <div className="flex w-full gap-10 marginBottom_4px">
                        <h6 className='text_info flex-1 '>Sub Total:</h6>
                        <h6 className='text-end'>20000৳</h6>
                    </div>
                    <div className="flex w-full items-center gap-10 marginBottom_4px">
                        <h6 className='text_info flex-1'>Discount:</h6>
                        <h6>20000৳</h6>
                    </div>
                    <div className="flex w-full items-center gap-10 marginBottom_4px">
                        <h6 className='text_info flex-1'>Special Discount:</h6>
                        <h6>20000৳</h6>
                    </div>
                    <div className="flex w-full items-center gap-10 margin_bottom ">
                        <h6 className='text_info flex-1'>Net Amount:</h6>
                        <h6>20000৳</h6>
                    </div>
                    <div className="flex w-full items-center gap-10 marginBottom_4px marginTop_40px">
                        <h6 className='text_info flex-1'>Paid Amount:</h6>
                        <h6>20000৳</h6>
                    </div>
                    <div className="flex w-full items-center gap-10 marginBottom_4px">
                        <h6 className='text_info flex-1'>Due Amount:</h6>
                        <h6>20000৳</h6>
                    </div>
                    <div className="flex w-full items-center gap-10 ">
                        <h6 className='text_info flex-1'>Change Amount:</h6>
                        <h6>0৳</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoicePdf;