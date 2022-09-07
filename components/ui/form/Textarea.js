import { forwardRef, useMemo } from "react";

const defaultClassName =
  "h-[140px] w-full border border-carrara rounded-xl outline-none px-4 py-4 text-[13px] text-cod-gray placeholder:text-bombay font-normal";

const Textarea = (props) => {
  const {
    name = null,
    id = null,
    placeholder = "Message here...",
    className = "",
    register,
    value = "",
    onChange,
    error,
    errorClassName = "",
    rows = 140,
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

  if (register) {
    return (
      <textarea
        name={name}
        id={id || name}
        placeholder={placeholder}
        {...register(name)}
        className={`${defaultClassName} ${className} ${formattedErrorClassName}`}
        rows={rows}
      />
    );
  }

  return (
    <textarea
      name={name}
      id={id || name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${defaultClassName} ${className} ${formattedErrorClassName}`}
      rows={rows}
    />
  );
};

export default Textarea;
