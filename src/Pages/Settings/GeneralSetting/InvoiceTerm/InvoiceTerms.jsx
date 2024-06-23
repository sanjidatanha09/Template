/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useMemo } from 'react';

const InvoiceTerms = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const config = {
        placeholder :"Start Typing ..."
    }
    return (
        <div className='bg-white dark:bg-base-100'>
        </div>
    );
};

export default InvoiceTerms;