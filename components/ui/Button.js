import classNames from "classnames";

const Button = (props) => {
  const {
    children,
    className,
    outline = false,
    type = "button",
    block = false,
    size = "base", // "lg"
    ...rest
  } = props;

  const style = classNames(
    "h-[44px] min-w-[140px] px-4 py-[6px] rounded-lg flex items-center justify-center text-sm font-medium border border-primary",
    {
      "bg-primary text-white": !outline,
      "text-primary bg-transparent": outline,
      "w-full": block,
      "h-[56px] text-base px-6": size === "lg",
    },
    className
  );

  return (
    <button type={type} className={style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
