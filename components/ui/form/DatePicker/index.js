import { forwardRef, useMemo } from "react";
import Popup from "@/components/ui/Popup";
import Calendar from "./Calendar";
import classNames from "classnames";
import { IoCalendar } from "react-icons/io5";

const DatePicker = (props) => {
  const {
    name = null,
    id = null,
    placeholder = "Select date",
    className = "",
    register,
    value = "",
    onChange,
    error,
    errorClassName = "",
    defaultValue = "",
  } = props;

  const style = classNames(
    "h-[44px] bg-white text-left w-full border border-gray-300 rounded-lg outline-none px-4 text-sm hover:border-primary focus:border-primary input-date remove-date-icon",
    {
      "border border-red-500 hover:border-red-500 focus:border-red-500": error,
    },
    className
  );

  return (
    <div className="w-full">
      <Popup
        width="100%"
        trigger={
          <div className="relative">
            <input
              type="text"
              disabled
              name={name}
              id={id || name}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className={style}
              onClick={(e) => e.preventDefault()} // Prevent opening the default date picker on safari
            />
            <div className="cursor-pointer w-[20px] text-gray-500 absolute right-4 top-1/2 -translate-y-1/2">
              <IoCalendar size="100%" />
            </div>
          </div>
        }
      >
        <div className="w-full flex justify-end">
          <div className="w-max bg-white p-5 rounded-lg popup-shadow">
            <Calendar
              value={value}
              defaultValue={defaultValue}
              onSelectDate={(date) => onChange(date)}
            />
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default DatePicker;
