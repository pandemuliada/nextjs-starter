import { forwardRef, useMemo } from "react";

const defaultClassName =
  "form-select h-[44px] w-full border border-carrara rounded-xl outline-none px-4 text-[13px] text-cod-gray placeholder:text-bombay no-ring focus:border-carrara";

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

  if (register) {
    return (
      <select
        name={name}
        id={id || name}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}
        className={`${defaultClassName} ${className} ${formattedErrorClassName}`}
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
      className={`${defaultClassName} ${className} ${formattedErrorClassName}`}
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
