import { useState } from "react";
import useRoleAccessApi from "../../Api/useRoleAccessApi";
import Loader from "../../Utility/Loader/Loader";
import Title from "../../Utility/TItle/Title";
import { Checkbox } from "primereact/checkbox";
import { Breadcrumb } from "semantic-ui-react";
import { FaUserCheck } from "react-icons/fa";

const sections = [
  { key: "Dashboard", content: "Dashboard", link: true },
  { key: "Component", content: "Component", link: true },
  { key: "Form_Elements", content: "Form_Elements", active: true },
  { key: "Form_Elements", content: "Form_Elements", active: true },
];

const RoleCard = () => {
  const [isFirstCheckboxChecked, setIsFirstCheckboxChecked] = useState(false);
  
  const [dynamicCheckboxes, setDynamicCheckboxes] = useState([
    { id: "Edit", checked: false },
    { id: "New User", checked: false },
    { id: "Update User", checked: false },
    { id: "Delete User", checked: false },
  ]);

  // Single Checkbox
  const handleFirstCheckboxChange = () => {
    const newValue = !isFirstCheckboxChecked;
    
    setIsFirstCheckboxChecked(newValue);
    setDynamicCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => ({
        ...checkbox,
        checked: newValue,
      }))
    );
  };

  // All Checkbox
  const handleDynamicCheckboxChange = (id) => {
    setDynamicCheckboxes((prevCheckboxes) => {
      const updatedCheckboxes = prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      );
  
      const allChecked = updatedCheckboxes.every((checkbox) => checkbox.checked);
      setIsFirstCheckboxChecked(allChecked);
  
      return updatedCheckboxes;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roleName = e.target.roleName.value;
    const checkedValues = dynamicCheckboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id);

      
  };

  return (
    <div className="text_color">
      <Breadcrumb icon="right angle" sections={sections} />
      <Title title="New Role" />
      <form onSubmit={handleSubmit} className="border border_bg p-3">
        <section>
          <label className="font_standard text_color">
            Role Name{" "}
            <span className="required_text_color font_standard">
              (required)
            </span>
          </label>
          <input
            type="text"
            name="roleName"
            className="card_bg border border_bg text_color font_standard  rounded-md focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none mt-1"
            placeholder="Search Here"
            required
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 _gap w-full margin_top">
          <div className="w-full overflow-hidden border border_bg card_bg rounded-md shadow-md">
            <div className="card_header w-full flex justify-between items-center">
              <h2 className=" text_color font_title -mb-1 flex items-center gap-2">
                <FaUserCheck className="font_title" />
                User
              </h2>
              <Checkbox
                onChange={handleFirstCheckboxChange}
                checked={isFirstCheckboxChecked}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {dynamicCheckboxes.map((checkbox) => (
                <div key={checkbox.id} className="flex align-items-center">
                  <Checkbox
                    onChange={() => handleDynamicCheckboxChange(checkbox.id)}
                    checked={checkbox.checked}
                  />
                  <label htmlFor="ingredient4" className="ml-2">
                    {checkbox.id}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="margin_top">
          <button className="btn_primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RoleCard;
