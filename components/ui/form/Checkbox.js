const Checkbox = (props) => {
  const {
    name = null,
    id = null,
    className = "",
    register,
    value = "",
    onChange,
  } = props;

  if (register) {
    return (
      <input
        name={name}
        id={id || name}
        type="checkbox"
        className={`form-checkbox w-4 h-4 text-primary bg-transparent rounded border-[2px] border-carrara without-ring ${className}`}
        {...register(name)}
      />
    );
  }

  return (
    <div>
      <input
        name={name}
        id={id || name}
        type="checkbox"
        className={`form-checkbox w-4 h-4 text-primary bg-transparent rounded border-[2px] border-carrara without-ring ${className}`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Checkbox;
