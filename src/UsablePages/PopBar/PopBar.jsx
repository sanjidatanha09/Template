import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";

const PopBar = () => {
  const [popOpen, setPopOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setPopOpen(!popOpen)}
        className="btn_primary mt-3 relative"
      >
        Pop Bar
        <div className={`card_bg w-44 border border_bg absolute   ${popOpen && ''} transition-all duration-300 ease-in-out left-0 top-[46px] rounded-md`}>
          <ul className="text_color text-left">
            <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2"> <MdEdit /> Edit</li>
            <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2"><MdDelete /> Delete</li>
            <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2"><IoMdEye /> View</li>
          </ul>
        </div>
      </button>
    </div>
  );
};

export default PopBar;
