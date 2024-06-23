import { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import PosModal from "./PosModal";
import { IoMdAddCircleOutline, IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
];

const PosTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popOpen, setPopOpen] = useState(false);

  return (
    <div className="md:flex-1 border border_bg rounded-md p-4 card_bg shadow-md">
      <p className="mt-2 ms-2 mb-2 font_standard text_color border_bg">
        Supplier
        <span className="required_text_color font_small ml-1">
          (require)
        </span>{" "}
      </p>
      <div className="flex gap-2">
        <Dropdown
          placeholder="Select Country"
          fluid
          search
          selection
          options={countryOptions}
          className="text_field text_font"
        />
        <button className="btn_primary " onClick={() => setIsOpen(false)}>
          <IoMdAddCircleOutline className="font_large" />
        </button>
      </div>
      <div className="overflow-x-auto mt-2">
        <table className="table border border_bg ">
          {/* head */}
          <thead className="h-[40px]">
            <tr className="uppercase text-center h-[40px] table_header_bg font-bold text_color font_title">
              <th className="font_standard table_border border">Name</th>
              <th className="font_standard table_border border">status</th>
              <th className="font_standard table_border border">Actions</th>
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
                    className={`card_bg w-44 border border_bg absolute opacity-0 ${
                      popOpen && "opacity-100"
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

      <div className="flex justify-end mt-5">
        <button className="btn_primary">Pay Bill</button>
      </div>
      <PosModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default PosTable;
