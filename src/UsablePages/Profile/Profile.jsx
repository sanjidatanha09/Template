/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './ProfileCss/Profile.css'
import { IoIosImages } from "react-icons/io";
import Title from "../../Utility/TItle/Title";
import { MdOutlineCampaign } from "react-icons/md";
import { Dropdown } from 'semantic-ui-react'
import '../FormElements/DropDownNoSearch/CSSDrop/Drop.css'

const options = [
    { key: 1, text: 'Choice 1', value: 1 }, 
]

const Profile = () => {
    const [image, setImage] = useState("");

    const convertToBase64 = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
        }
        reader.onerror = error => {
            console.log("Error : ", error);
        };

    }

    return (
        <div className="mb-16">
            <div className="margin_top margin_bottom">
                <Title title='Personal Profile' />
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center">
                {/* user details part */}
                <div
                    style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
                    className="card_bg text_color rounded_primary overflow-hidden relative md:w-1/3 border border_bg "
                >
                    <div className="flex border_bg card_header justify-start items-center gap-2 ">
                        <MdOutlineCampaign className="text-2xl" />
                        <h6 className="font-bold">Card With Footer</h6>
                    </div>
                    <div className="margin_top">
                        <img
                            className="w-[110px] mx-auto h-[110px] rounded-lg"
                            src="https://redinvoice.com/backend/app-assets/images/avatars/11.png"
                            alt="girls-image"
                        />
                    </div>
                    {/* superAdmin title */}
                    <div className="text-center margin_top ">
                        <h1 className="text_primary font_title">
                            Khan Tassen Islam
                        </h1>
                    </div>
                    {/* WB-MR-0012 button */}
                    <div className="bg_status_primary font_standard max-w-fit mx-auto">
                        WB-MR-0012
                    </div>
                    {/* Info part */}
                    <div className="lg:w-[50%] padding_left margin_top">
                        <h6 className="marginTop_4px font_standard md:font_small lg:font_standard ">
                            <span className="font-bold">Name : </span>Uttara
                        </h6>
                        <h6 className="marginTop_4px font_standard md:font_small lg:font_standard">
                            <span className="font-bold">Mobile : </span>
                            01200000000
                        </h6>
                        <h6 className="marginTop_4px font_standard md:font_small lg:font_standard">
                            <span className="font-bold">Email : </span>
                            uttara@gmail.com
                        </h6>
                        <h6 className="marginTop_4px font_standard md:font_small lg:font_standard margin_bottom">
                            <span className="font-bold">Address : </span>Uttara
                        </h6>
                    </div>
                   
                    <div className="flex border_bg  justify-start items-center md:absolute w-full bottom-0 border-t border_bg">
                        <button className="btn_primary w-full _margin">Password change</button>
                    </div>
                </div>
                {/* Update Profile Basic part(2nd part) */}
                <div className="rounded_primary overflow-hidden relative card_bg text_color  md:w-2/3 border border_bg ">
                    <div className="flex border_bg card_header justify-start items-center gap-2 ">
                        <MdOutlineCampaign className="text-2xl" />
                        <h6 className="font-bold">Card With Footer</h6>
                    </div>
                    <div className="w-full margin_top">
                        <form className="">
                            <div className="flex flex-col md:flex-row justify-between gap-4 w-full  ">
                                <div className="w-full md:w-[65%] lg:w-full pr-4 md:pr-0">
                                    {/* name */}
                                    <div className="padding_left padding_right margin_bottom">
                                        <label className="text_color text_font">Old Password<span className="required_text_color">(required)</span> </label>
                                        <input
                                            type="text"
                                            className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                                            placeholder="Search Here"
                                            required
                                        />
                                    </div>
                                    {/* Mobile */}
                                    <div className="padding_left padding_right margin_bottom">
                                        <label className="text_color text_font">Old Password<span className="required_text_color">(required)</span> </label>
                                        <input
                                            type="text"
                                            className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                                            placeholder="Search Here"
                                            required
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="padding_left padding_right">
                                        <label className="text_color text_font">Old Password<span className="required_text_color">(required)</span> </label>
                                        <input
                                            type="text"
                                            className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                                            placeholder="Search Here"
                                            required
                                        />
                                        {/* defaultValue={Email} */}
                                    </div>
                                </div>
                                {/* Profile Photo */}
                                <div className="padding_left padding_right  md:w-[35%] ">
                                    <h6 className="font_standard marginBottom_4px">
                                        Profile Photo
                                    </h6>
                                    <div className="w-[100%] h-[240px] md:h-[210px]  rounded-xl border-4 border-dashed ">
                                        {image == "" || image == null ?
                                            <label id="uploadImage" htmlFor="uploadBtn" className="h-[100%] w-[100%]"><IoIosImages className="h-[100%] w-[100%]" /></label>
                                            : <img src={image} className="w-full md:w-[100%] lg:w-[100%] h-[100%] p-2" alt="" />}
                                        <span className="text-lg md:text-xs xl:text-base pl-2"></span>
                                        <input type="file" id="uploadBtn" onChange={convertToBase64} />
                                    </div>
                                </div>
                            </div>
                            {/* role */}
                            <div className="_margin flex flex-col md:flex-row  _gap">
                                <div>
                                    <label htmlFor="" className="text_color text_font">
                                        Billing Branch(100%Width) <span className="required_text_color">(required)</span>
                                    </label>
                                    <Dropdown clearable options={options} selection className='w-[100%] text_field marginTop_4px' />
                                </div>
                                <div>
                                    <label htmlFor="" className="text_color  text_font">
                                        Billing Branch(100%Width) <span className="required_text_color">(required)</span>
                                    </label>
                                    <Dropdown clearable options={options} selection className='w-[100%] text_field marginTop_4px' />
                                </div>
                            </div>
                            {/* button */}
                            <div className="_padding border-t border_bg">
                                <button className="btn_primary w-full">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
