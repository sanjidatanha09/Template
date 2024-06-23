import { useState } from "react";
import Flatpickr from "react-flatpickr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Dropdown } from "semantic-ui-react";
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

const InvoiceContent = () => {
  const [date, setDate] = useState(null);
  const [popOpen, setPopOpen] = useState(false);
  return (
    <div
      className="card_bg md:w-8/12 lg:w-9/12 text_color rounded_primary overflow-hidden border_bg border padding_bottom"
      style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex flex-col md:flex-row justify-between px-5 pt-5 gap-2 md:gap-20 lg:gap-2">
      <div className="mb-3 w-[90%] md:w-full lg:w-[80%] 2xl:w-72 h-[150px] overflow-hidden ">
              <img
                className="w-full h-full object-contain md:object-contain"
                src="https://cashbaksho.com/backend/billing_invoice_logo.png"
                alt=""
              />
            </div>
        <div className="flex flex-col lg:items-end lg:w-[40%] my-4 lg:my-0 ">
          <div className="padding_top w-full flex _gap items-center">
            <span className="text_color font_standard w-full text-left lg:text-right">
              Invoice Generate
            </span>
            <input
              type="text"
              disabled
              defaultValue="12/11/2000"
              className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
              placeholder="Search Here"
              required
            />
          </div>
          <div className="marginTop_4px w-full flex _gap items-center">
            <span className="text_color font_standard w-full text-left lg:text-right">
              Invoice Generate
            </span>
            <input
              type="text"
              disabled
              defaultValue="12/11/2000"
              className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
              placeholder="Search Here"
              required
            />
          </div>
          <div className="marginTop_4px  w-full flex _gap items-center">
            <span className="text_color font_standard w-full text-left lg:text-right">
              Invoice Generate
            </span>
            <input
              type="text"
              disabled
              defaultValue="12/11/2000"
              className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
              placeholder="Search Here"
              required
            />
          </div>
        </div>
      </div>

      <hr className="border_bg margin_bottom margin_top" />
      <div className="flex flex-col md:flex-row justify-between items-center _gap padding_top mx-4">
        <div className="w-full z-40">
          <label htmlFor="" className="text_color text_font">
            Billing Branch
            <span className="required_text_color marginLeft_4px">(required)</span>
          </label>
          <input
            type="text"
            disabled
            defaultValue="Uttara"
            className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
            required
          />
        </div>
        <div className="w-full z-40">
          <label
            htmlFor=""
            className="hover:outline-none hover:border-none text_color text_font"
          >
            Invoice To
            <span className="required_text_color marginLeft_4px">(required)</span>
          </label>
          <input
            type="text"
            disabled
            defaultValue="Uttara"
            className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
            required
          />
        </div>
      </div>

      <div className="flex marginTop_4px justify-start mx-4">
        <div className="w-[50%] pl-2">
          <h6 className="marginTop_4px">
            <span className="">Name : </span>Uttaraa
          </h6>
          <h6 className="marginTop_4px">
            <span className="">Mobile : </span>
            01200000000
          </h6>
          <h6 className="marginTop_4px">
            <span className="">Email : </span>
            uttara@gmail.com
          </h6>
          <h6 className="marginTop_4px">
            <span className="">Address : </span>Uttara
          </h6>
        </div>
        <div className="w-[50%] pl-2">
          <h6 className="marginTop_4px">
            <span className="">Name : </span>Uttaraa
          </h6>
          <h6 className="marginTop_4px">
            <span className=" ">Mobile : </span>
            01200000000
          </h6>
          <h6 className="marginTop_4px">
            <span className="">Email : </span>
            uttara@gmail.com
          </h6>
          <h6 className="marginTop_4px">
            <span className="">Address : </span>Uttara
          </h6>
        </div>
      </div>
      <hr className="border_bg margin_bottom margin_top" />

      {/* service item */}
      <div className="px-4">
        <h2 className="font_standard">Service Item</h2>
        <div className="gap-3 border border_bg overflow-x-auto">
          <table className="table border border_bg">
            {/* head */}
            <thead className="h-[40px]">
              <tr className="uppercase text-center h-[40px] table_header_bg font-bold text_color font_title">
                <th className="font_standard table_border border">Service</th>
                <th className="font_standard table_border border">QTY</th>
                <th className="font_standard table_border border">
                  Unite Price
                </th>
                <th className="font_standard table_border border">Discount</th>
                <th className="font_standard table_border border">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  Beauty
                </td>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  02
                </td>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  500
                </td>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  50
                </td>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  950
                </td>
              </tr>
              <tr>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  Beauty
                </td>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  02
                </td>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  500
                </td>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  50
                </td>
                <td
                  className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                >
                  950
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="border_bg margin_top" />
      <div className="mx-4 flex flex-col items-end justify-center">
        <div className="flex flex-col lg:items-end lg:w-[40%] lg:my-0 ">
          <div className="margin_top w-full flex _gap items-center">
            <span className="text_color font_standard w-full text-right">
              Service Qty
            </span>
            <input
              type="text"
              disabled
              defaultValue="2"
              className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
              placeholder="Search Here"
              required
            />
          </div>

          <div className="marginTop_4px w-full flex _gap items-center">
            <span className="text_color font_standard w-full text-right">
              Sub Total
            </span>
            <input
              type="text"
              disabled
              defaultValue="2000"
              className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
              placeholder="Search Here"
              required
            />
          </div>
          <div className="marginTop_4px w-full flex _gap items-center">
            <span className="text_color font_standard w-full text-right">
              Discount
            </span>
            <input
              type="text"
              disabled
              defaultValue="1000"
              className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
              placeholder="Search Here"
              required
            />
          </div>
          <div className="marginTop_4px w-full flex _gap items-center">
            <span className="text_color font_standard w-full text-right">
              Special Discount
            </span>
            <input
              type="text"
              disabled
              defaultValue="1000"
              className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
              placeholder="Search Here"
              required
            />
          </div>
          <div className="marginTop_4px w-full flex _gap items-center">
            <span className="text_color font_standard w-full text-right">
              Total Amount
            </span>
            <input
              type="text"
              disabled
              defaultValue="2000"
              className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
              placeholder="Search Here"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceContent;
