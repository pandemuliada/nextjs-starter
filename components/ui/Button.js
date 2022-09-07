const Button = (props) => {
  const {
    children,
    className,
    outline = false,
    type = "button",
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={`h-[44px] w-[140px] px-[10px] py-[6px] rounded-xl flex items-center justify-center text-sm font-medium border ${className}`}
      style={{
        background: outline ? "transparent" : "#AD9D7C",
        borderColor: "#AD9D7C",
        color: outline ? "#AD9D7C" : "white",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
