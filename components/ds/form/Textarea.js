import classNames from "classnames";
import { forwardRef, useMemo } from "react";

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
    block = false,
    errorClassName = "",
    rows = 5,
  } = props;

  const style = classNames(
    "form-textarea w-full border border-gray-300 rounded-xl outline-none px-4 py-4 text-sm placeholder:text-sm font-normal hover:border-primary focus:border-primary no-ring",
    {
      "border border-red-500 hover:border-red-500 focus:border-red-500": error,
      block: block,
    },
    className
  );

  if (register) {
    return (
      <textarea
        name={name}
        id={id || name}
        placeholder={placeholder}
        {...register(name)}
        rows={rows}
        className={style}
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
      className={style}
      rows={rows}
    />
  );
};

export default Textarea;
