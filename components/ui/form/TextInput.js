import classNames from "classnames";
import { forwardRef, useMemo } from "react";

const TextInput = (props) => {
  const {
    type = "text", // text | email | date
    name = null,
    id = null,
    placeholder = "mail@website.com",
    className = "",
    register,
    value = "",
    onChange,
    error,
    errorClassName = "",
    defaultValue = "",
  } = props;

  const style = classNames(
    "h-[44px] w-full border border-gray-300 rounded-lg outline-none px-4 text-sm hover:border-primary focus:border-primary",
    {
      "border border-red-500 hover:border-red-500 focus:border-red-500": error,
    },
    className
  );

  if (register) {
    return (
      <input
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}
        className={style}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      id={id || name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      className={style}
    />
  );
};

export default TextInput;
