import { forwardRef, useMemo } from "react";
import Popup from "@/components/ui/Popup";
import Calendar from "./Calendar";
import classNames from "classnames";

const defaultClassName =
  "h-[44px] w-full border border-carrara rounded-xl outline-none px-4 text-[13px] text-cod-gray placeholder:text-bombay disabled:bg-white";

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

  const formattedErrorClassName = useMemo(() => {
    if (error) {
      if (errorClassName) {
        return errorClassName;
      }

      if (!errorClassName) {
        return "border border-red-500";
      }
    }

    return "";
  }, [error, errorClassName]);

  const style = classNames(
    "h-[44px] w-full border border-gray-300 rounded-lg outline-none px-4 text-sm hover:border-primary focus:border-primary remove-date-icon",
    {
      "border border-red-500 hover:border-red-500 focus:border-red-500": error,
    },
    className
  );

  return (
    <div className="w-full">
      <Popup
        trigger={
          <input
            type="date"
            name={name}
            id={id || name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={style}
            onClick={(e) => e.preventDefault()} // Prevent opening the default date picker on safari
          />
        }
      >
        <div className="w-[300px] bg-white p-5 rounded-lg popup-shadow">
          <Calendar
            value={value}
            defaultValue={defaultValue}
            onSelectDate={(date) => onChange(date)}
          />
        </div>
      </Popup>
    </div>
  );
};

export default DatePicker;
