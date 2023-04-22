import classNames from "classnames";
import { useMemo, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const PasswordInput = (props) => {
  const {
    name = null,
    id = null,
    placeholder = "Password",
    className = "",
    register,
    value = "",
    onChange,
    error,
    block = false,
    errorClassName = "",
    defaultValue = "",
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const style = classNames(
    "h-[44px] w-full border border-gray-300 rounded-lg outline-none px-4 pr-12 text-sm hover:border-primary focus:border-primary remove-password-toggler",
    {
      "border border-red-500 hover:border-red-500 focus:border-red-500": error,
      block: block,
    },
    className
  );

  return (
    <div className="relative w-full">
      {register && (
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id || name}
          placeholder={placeholder}
          {...register(name)}
          defaultValue={defaultValue}
          className={style}
        />
      )}

      {!register && (
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id || name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          defaultValue={defaultValue}
          className={style}
        />
      )}
      <div
        className="cursor-pointer w-[22px] absolute right-4 top-1/2 -translate-y-1/2 text-bombay"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <IoEyeOutline size="100%" />
        ) : (
          <IoEyeOffOutline size="100%" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
