import classNames from "classnames";
import Link from "next/link";

const Button = (props) => {
  const {
    children,
    className,
    outline = false,
    type = "button",
    block = false,
    size = "base", // "lg"
    href = null,
    ...rest
  } = props;

  const style = classNames(
    "h-[44px] min-w-[140px] px-4 py-[6px] rounded-lg flex items-center justify-center text-sm font-medium border border-primary",
    {
      "bg-primary text-white": !outline,
      "text-primary bg-transparent": outline,
      "w-full block": block,
      "h-[56px] text-base px-6": size === "lg",
      "w-fit": href, // UI fix for link tag
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
