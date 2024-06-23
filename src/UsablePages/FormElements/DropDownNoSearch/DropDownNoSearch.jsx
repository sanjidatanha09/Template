/* eslint-disable no-unused-vars */
import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import './CSSDrop/Drop.css'

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]

const DropDownNoSearch = () => {
    return (
        <>
            <div className='w-[100%] padding_top'>
                <label htmlFor="" className="text_color  text_font">
                    Billing Branch(100%Width) <span className="required_text_color">(required)</span>
                </label>
                <Dropdown clearable options={options} selection className='w-[100%] text_field marginTop_4px' />
            </div>
            {/* 2nd Dropdown  */}

            <div className="flex flex-col md:flex-row justify-between items-center _gap padding_top">
                <div className="w-full">
                    <label htmlFor="" className="text_color text_font">
                        Billing Branch(flex-2) <span className="required_text_color">(required)</span>
                    </label>
                    <Dropdown clearable options={options} selection className='w-[100%] text_field marginTop_4px'
                    />

                </div>
                <div className="w-full">
                    <label htmlFor="" className="hover:outline-none hover:border-none text_color text_font">
                        Billing Branch(flex-2) <span className="required_text_color">(required)</span>
                    </label>
                    <Dropdown clearable options={options} selection className='w-[100%] text_field marginTop_4px'
                    />
                </div>
            </div>

            {/* 3rd Dropdown  */}

            <div >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center _gap padding_top">
                    <div className="">
                        <label htmlFor="" className="text_color text_font">
                            Billing Branch(grid-cols-3) <span className="required_text_color">(required)</span>
                        </label>
                        <Dropdown clearable options={options} selection className='w-[100%] text_field marginTop_4px'/>

                    </div>
                    <div className="">
                        <label htmlFor="" className="hover:outline-none hover:border-none text_color text_font">
                            Billing Branch(grid-cols-3) <span className="required_text_color">(required)</span>
                        </label>
                        <Dropdown clearable options={options} selection className='w-[100%] text_field marginTop_4px'
                        />
                    </div>
                    <div className="">
                        <label htmlFor="" className="hover:outline-none hover:border-none text_color text_font">
                            Billing Branch(grid-cols-3) <span className="required_text_color">(required)</span>
                        </label>
                        <Dropdown clearable options={options} selection className='w-[100%] text_field marginTop_4px'
                        />
                    </div>
                </div>
            </div>

        </>

    );
};

export default DropDownNoSearch;