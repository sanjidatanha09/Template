/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from '../../Buttons/Buttons';
import Btn from '../../../Components/Shared/Btn/Btn';
import { IoMdClose } from "react-icons/io";

const ProfileModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState(false)
    const handleAnimate = () => {
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 1000);
    }

    return (
        <>
            <div className="">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="btn_primary"
                >
                    Password change
                </button>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className={`relative z-50`} onClose={handleAnimate} >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>
                        <div className={`fixed inset-0 overflow-y-auto ${animate ? 'scale-animation' : ''}`}>
                            <div className="flex min-h-full items-center justify-center text-center border text_font">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition-opacity duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Panel className="w-[96%] md:w-[90%] lg:w-[75%] xl:w-[910px] max-w-md:w-[60%] transform overflow-hidden rounded-md card_bg text-left align-middle shadow-xl transition-all my-10 pb-0">
                                        <Dialog.Title
                                            as="h3"
                                            className="border pl-4 text_font table_header_bg footer_bg dark:border-none header_footer_height flex items-center justify-between pr-4"
                                        >
                                            <h6 className="py-2 text_font text_color">Password Update</h6>
                                            <button onClick={() => setIsOpen(false)} className="text_color dark:hover:text-red-500 close-button "><IoMdClose /></button>

                                        </Dialog.Title>
                                        
                                        {/*Old Password */}
                                        <div className='px-6'>
                                            <label className="text_color text_font">Old Password<span className="required_text_color">(required)</span> </label>
                                            <input
                                                type="text"
                                                className="card_bg border border_bg text_color font_standard  rounded-lg focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none"
                                                placeholder="Search Here"
                                                required
                                            />

                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between gap-2 px-6 mt-2">
                                            {/* New Password  */}
                                            <div className='mb-5'>
                                                {/* input 50% width */}
                                                <label className="text_color text_font">New Password<span className="required_text_color">(required)</span> </label>

                                                <input
                                                    type="text"
                                                    className="card_bg border border_bg text_color font_standard  rounded-lg focus:ring-0 px-4 focus:border input_field_h w-[100%] focus:outline-none"
                                                    placeholder="Search Here"
                                                    required
                                                />
                                            </div>
                                            {/*New Password  */}
                                            <div className=' mb-5'>
                                                {/* input 50% width */}
                                                <label className="text_color text_font">New Password<span className="required_text_color">(required)</span> </label>

                                                <input
                                                    type="text"
                                                    className="card_bg border border_bg text_color font_standard  rounded-lg focus:ring-0 px-4 focus:border input_field_h w-[100%] focus:outline-none"
                                                    placeholder="Search Here"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="table_header_bg footer_bg header_footer_height mt-4 px-6 py-1.5 border flex gap-2 justify-end dark:border-none">
                                            <button className="btn_success">
                                                Update
                                            </button>
                                            <button
                                                type="button"
                                                className="btn_danger"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Cancel
                                            </button>                          </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    );
};

export default ProfileModal;