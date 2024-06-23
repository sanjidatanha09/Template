import Title from "../../Utility/TItle/Title";
import DatePicker from "./DatePicker/DatePicker";
import DropDownNoSearch from "./DropDownNoSearch/DropDownNoSearch";
import DropDownSearch from "./DropDownSearch/DropDownSearch";
import InputField from "./InputField/InputField";
import { Breadcrumb } from "semantic-ui-react";

const sections = [
    { key: "Dashboard", content: "Dashboard", link: true },
    { key: "Component", content: "Component", link: true },
    { key: "Form_Elements", content: "Form_Elements", active: true },
];

const FormElements = () => {
    return (
        <div className="mb-24">
            <div className="">
                <Breadcrumb icon="right angle" sections={sections} />
            </div>
            <Title title='Form Elements' />
            <h6 className=" text_color font_standard ">Search DropDown</h6>
            <DropDownSearch />
            <hr className="margin_top"/>
            <h6 className="padding_top text_color font_standard">No Search DropDown</h6>
            <DropDownNoSearch />
            <hr className="margin_top" />
            <h6 className="padding_top text_color font_standard ">Input</h6>
            <InputField></InputField>
           <DatePicker />
        </div>
    );
};

export default FormElements;