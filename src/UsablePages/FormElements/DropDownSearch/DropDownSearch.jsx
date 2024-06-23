/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Dropdown } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]
const DropDownSearch = ({ dropdownFullWidth }) => {


    return (
        <>
            <div className=''>
                <div className='padding_top'>
                    {/* 1st Dropdown large screen */}
                    <label htmlFor="" className="text_color text_font ">
                        Billing Branch(100%Width) <span className="required_text_color">(required)</span>
                    </label>
                    <Dropdown
                        placeholder='Select Country'
                        fluid
                        search
                        selection
                        options={countryOptions}
                        className='text_field text_font marginTop_4px'
                    />
                </div>
                {/* 2nd Dropdown  */}
                <div className="flex flex-col md:flex-row justify-between items-center _gap padding_top">
                    <div className="w-full">
                        <label htmlFor="" className="text_color text_font">
                            Billing Branch(flex-2) <span className="required_text_color">(required)</span>
                        </label>
                        <Dropdown
                            placeholder='Select Country'
                            fluid
                            search
                            selection
                            options={countryOptions}
                            className='text_field text_font card_bg marginTop_4px'
                        />

                    </div>
                    <div className="w-full">
                        <label htmlFor="" className="hover:outline-none hover:border-none text_color text_font">
                            Billing Branch(flex-2) <span className="required_text_color">(required)</span>
                        </label>
                        <Dropdown
                            placeholder='Select Country'
                            fluid
                            search
                            selection
                            options={countryOptions}
                            className='text_field text_font marginTop_4px'
                        />
                    </div>
                </div>
                {/* 3rd Dropdown  */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center _gap padding_top">
                        <div className="">
                            <label htmlFor="" className="text_color text_font">
                                Billing Branch(grid-cols-3) <span className="required_text_color">(required)</span>
                            </label>
                            <Dropdown
                                placeholder='Select Country'
                                fluid
                                search
                                selection
                                options={countryOptions}
                                className='text_field text_font marginTop_4px'
                            />

                        </div>
                        <div className="">
                            <label htmlFor="" className="hover:outline-none hover:border-none text_color text_font">
                                Billing Branch(grid-cols-3) <span className="required_text_color">(required)</span>
                            </label>
                            <Dropdown
                                placeholder='Select Country'
                                fluid
                                search
                                selection
                                options={countryOptions}
                                className='text_field text_font marginTop_4px'
                            />
                        </div>
                        <div className="">
                            <label htmlFor="" className="hover:outline-none hover:border-none text_color text_font">
                                Billing Branch(grid-cols-3) <span className="required_text_color">(required)</span>
                            </label>
                            <Dropdown
                                placeholder='Select Country'
                                fluid
                                search
                                selection
                                options={countryOptions}
                                className='text_field text_font marginTop_4px'
                            />
                        </div>
                    </div>
                </div>
            </div>       
        </>
       

    );
};

export default DropDownSearch;