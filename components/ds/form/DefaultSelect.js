import classNames from "classnames";
import { forwardRef, useMemo } from "react";

const DefaultSelect = (props) => {
  const {
    name = null,
    id = null,
    placeholder = "Select...",
    className = "",
    register,
    value = "",
    onChange,
    error,
    errorClassName = "",
    options = [],
    defaultValue = "",
  } = props;

  const combinedOptions = useMemo(() => {
    if (options) {
      return [{ value: "", label: placeholder }, ...options];
    }

    return [{ value: "", label: placeholder }];
  }, [options, placeholder]);

  const style = classNames(
    "form-select h-[44px] w-full border border-gray-300 rounded-lg outline-none px-4 text-sm no-ring hover:border-primary focus:border-primary",
    {
      "border border-red-500 hover:border-red-500 focus:border-red-500": error,
    },
    className
  );

  if (register) {
    return (
      <select
        name={name}
        id={id || name}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}
        className={style}
      >
        {combinedOptions.map((option, index) => (
          <option
            disabled={index === 0}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <select
      name={name}
      id={id || name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={style}
    >
      {combinedOptions.map((option, index) => (
        <option disabled={index === 0} key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DefaultSelect;
