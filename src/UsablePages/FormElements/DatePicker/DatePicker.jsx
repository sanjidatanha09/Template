import Flatpickr from "react-flatpickr";
import { useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";

const DatePicker = () => {
  const [date, setDate] = useState(null);
  
  return (
    <div className="relative">
      <Flatpickr
        className="card_bg border relative border_bg text_color font_standard rounded-sm focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none mt-1"
        placeholder="Select Date"
        value={date}
        dateFormat = 'd-m-Y'
        onChange={(date) => setDate(date)}
      />
        <FaCalendarDays className="absolute top-[50%] translate-y-[-50%] right-2 font_title cursor-pointer" />
    </div>
  );
};

export default DatePicker;
