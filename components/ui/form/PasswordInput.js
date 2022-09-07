import { useMemo, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const defaultClassName =
  "h-[44px] w-full border border-carrara rounded-xl outline-none px-4 text-[13px] text-cod-gray placeholder:text-bombay hover:border-primary focus:border-primary remove-password-toggler";

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
    errorClassName = "",
    defaultValue = "",
  } = props;

  const [showPassword, setShowPassword] = useState(false);

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
          className={`${defaultClassName} ${className} ${formattedErrorClassName}`}
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
          className={`${defaultClassName} ${className} ${formattedErrorClassName}`}
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
