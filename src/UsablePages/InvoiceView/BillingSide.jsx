import { FaAlignRight } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoPrintSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
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


const BillingSide = () => {
    return (
        <div className="w-full md:w-4/12 lg:w-3/12 border_bg card_bg margin_bottom font_standard ">
          {/* billing notes */}
          <div
            style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
            className="card_bg text_color rounded_primary overflow-hidden border_bg border"
          >
            <div className="flex border_bg card_header justify-start items-center gap-2">
              <FaAlignRight className="text-2xl" />
              <h6 className="font-bold">Billing Notes</h6>
            </div>
            <div className="padding_left padding_right margin_top margin_bottom flex justify-center">
            <div className="flex flex-col items-center">
            <IoIosCheckmarkCircleOutline className="text-5xl text_success" />
            <h2 className="font_large mt-1 text_success">Completed</h2>
            </div>
            </div>
          </div>

          {/* Invoice options (2nd part) w-[340px] */}
          <div
            style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
            className="card_bg text_color rounded_primary overflow-hidden border_bg border margin_top"
          >
            <div className="flex border_bg card_header justify-start items-center gap-2">
              <FaAlignRight className="text-2xl" />
              <h6 className="font-bold">Invoice Options</h6>
            </div>
            <div className="_padding w-full text-center flex flex-col _gap">
              <button className="btn_primary w-full flex items-center _gap justify-center ">
                <IoPrintSharp className="font_large" />
                Print</button>
              <button className="btn_primary w-full flex items-center _gap justify-center"> <FaEye className="font_large" /> View</button>
            </div>
          </div>
          <div
            style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
            className="card_bg text_color rounded_primary overflow-hidden border_bg border margin_top"
          >
            <div className="flex border_bg card_header justify-start items-center gap-2">
              <FaAlignRight className="text-2xl" />
              <h6 className="font-bold">Invoice Options</h6>
            </div>
            <div className="margin_top margin_bottom"></div>
          </div>
          <div
            style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
            className="card_bg text_color rounded_primary overflow-hidden border_bg border margin_top"
          >
            <div className="flex border_bg card_header justify-start items-center gap-2">
              <FaAlignRight className="text-2xl" />
              <h6 className="font-bold">Invoice Options</h6>
            </div>
            <div className="margin_top margin_bottom"></div>
          </div>
        </div>
    );
};

export default BillingSide;