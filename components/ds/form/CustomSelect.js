import { useEffect, useMemo } from "react";
import { IoChevronDown } from "react-icons/io5";
import ReactSelect, { components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="flex items-center justify-center">
        <IoChevronDown size={20} />
      </div>
    </components.DropdownIndicator>
  );
};

const CustomSelect = (props) => {
  const {
    style = {},
    placeholder,
    isSearchable = false,
    options = [],
    error = false,
    name,
    disabled = false,
    isLoading = false,
    // defaultValue,
    onChange,
    value,
  } = props;

  const customStyle = {
    input: (provided) => ({
      ...provided,
      fontFamily: "Poppins",
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: style?.borderRadius || "8px",
      height: style?.height || "44px",
      border: `solid 1px ${error ? "red" : "rgb(209 213 219)"}`,
      // borderColor: style?.borderColor || "#EFEEEB",
      boxShadow: "none",
      whiteSpace: "nowrap",
      "&:hover": {
        borderColor: style?.borderColor || (error ? "red" : "rgb(209 213 219)"),
      },
      fontWeight: 400,
      padding: style?.padding || "0px 0px 0px 6px",
      fontSize: style?.fontSize || 14,
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: 400,
      background: state.isSelected
        ? "#EFEEEB"
        : state.isFocused
        ? "#EFEEEB"
        : "#fff",
      color: state.isSelected
        ? "#151515"
        : state.isFocused
        ? "#151515"
        : "#151515",
      fontSize: style?.fontSize || 14,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#B5B7C0",
    }),
    singleValue: (provided) => ({
      ...provided,
      // color: theme.colors["ash"],
    }),
    dropdownIndicator: (provided, state) => {
      return {
        ...provided,
        transition: "0.2s",
        transform: state.isFocused ? "rotate(180deg)" : "rotate(0deg)",
      };
    },
  };

  // The format is object e.g { label: "Something", value: "something" }
  const selectValue = useMemo(() => {
    if (value) {
      return options.find((option) => option.value === value) || null;
    }
  }, [options, value]);

  return (
    <ReactSelect
      styles={customStyle}
      options={options}
      placeholder={placeholder}
      isSearchable={isSearchable}
      isDisabled={disabled}
      // defaultValue={defaultSelectValue}
      isLoading={isLoading}
      name={name}
      onChange={onChange}
      value={selectValue}
      components={{
        DropdownIndicator,
        IndicatorSeparator: false,
        NoOptionsMessage: () => (
          <div className="text-sm text-gray-700 px-5 py-2">No options</div>
        ),
      }}
    />
  );
};

export default CustomSelect;
