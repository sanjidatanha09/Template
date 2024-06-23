import { Dropdown } from "semantic-ui-react";
import phone from "../../assets/phone.jpg";
import { HiMagnifyingGlass } from "react-icons/hi2";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
];

const Category = () => {
  return (
    <div className="card_bg shadow-md">
      <div className="p-4">
        <p className="mt-2 ms-2 mb-2 text_color font_standard">
          Category{" "}
          <span className="required_text_color font_small">(require)</span>
        </p>
        <div className="mb-4">
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={countryOptions}
            className="text_field text_font"
          />
        </div>

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            className="card_bg border border_bg text_color font_standard  rounded-lg focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none"
            placeholder="Search Here"
            required
          />
          <button className="btn btn_primary lg:w-40 rounded-sm">
            <HiMagnifyingGlass className="font_title font-bold" />
            Search</button>
          <button className="btn btn_secondary lg:w-40 text_color rounded-sm">
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text_color px-4 pb-4">
        <div className="card_bg border_bg border ">
          <div className="w-full overflow-hidden h-9/12">
            <img
              className="h-full w-full object-cover"
              src={phone}
              alt="Shoes"
            />
          </div>
          <div className="text-center">
            <h3 className="text_color text-base mb-0">name</h3>
            <h3 className="text_color mt-0 text-base">name-556454</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
