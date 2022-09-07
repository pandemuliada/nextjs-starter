import { forwardRef, useMemo } from "react";

const defaultClassName =
  "h-[44px] w-full border border-carrara rounded-xl outline-none px-4 text-[13px] text-cod-gray placeholder:text-bombay hover:border-primary focus:border-primary";

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

  const formattedErrorClassName = useMemo(() => {
    if (error) {
      if (errorClassName) {
        return errorClassName;
      }

      if (!errorClassName) {
        return "border border-red-500 hover:border-red-500 focus:border-red-500";
      }
    }

    return "";
  }, [error, errorClassName]);

  if (register) {
    return (
      <input
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}
        className={`${defaultClassName} ${className} ${formattedErrorClassName}`}
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
      className={`${defaultClassName} ${className} ${formattedErrorClassName}`}
    />
  );
};

export default TextInput;
