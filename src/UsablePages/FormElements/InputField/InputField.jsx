/* eslint-disable no-unused-vars */
import React from 'react';
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './input.css'

const InputField = () => {
    return (
        <div className='mb-20'>

            <div className='padding_top'>
                {/* input full width */}
                <label className="text_color text_font">Old Password<span className="required_text_color">(required)</span> </label>
                <input
                    type="text"
                    className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                    placeholder="Search Here"
                    required
                />
            </div>           
        </div>   
    );
};

export default InputField;