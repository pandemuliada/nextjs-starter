import classNames from "classnames";

const Button = (props) => {
  const {
    children,
    className,
    outline = false,
    type = "button",
    ...rest
  } = props;

  const style = classNames(
    "h-[44px] w-[140px] px-[10px] py-[6px] rounded-lg flex items-center justify-center text-sm font-medium border border-primary",
    {
      "bg-primary text-white": !outline,
      "text-primary bg-transparent": outline,
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
