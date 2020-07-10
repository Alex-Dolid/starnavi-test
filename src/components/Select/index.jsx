// Core
import React, {useCallback, useMemo, useRef, useState} from "react";
// Libs
import classNames from "classnames";
// Styles
import "./index.scss";
// Components
import Icon from "../Icon";
import Option from "./Option";
// Hooks
import {useOnClickOutside} from "../../hooks/useOnClickOutside";

const Select = ({options, value, placeholder = '', onChange, className = '', iconName = "icon-select-arrow", isLoading, error}) => {
  const selectedOption = useMemo(() => options.find(option => option.value === value), [options, value]);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  let selectValue = "";
  if (selectedOption) {
    selectValue = selectedOption.label;
  } else if (isLoading) {
    selectValue = "Loading...";
  } else {
    selectValue = placeholder;
  }

  const errorMessageJSX = error && <p className="error">{error}</p>;

  const callbackClickOutside = useCallback(() => setIsOpen(false), []);
  useOnClickOutside(selectRef, callbackClickOutside);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen]);

  const handleClickOption = useCallback((option) => {
    toggleIsOpen();
    onChange && onChange(option.value);
  }, [onChange, toggleIsOpen]);

  return (
    <div className={`select ${className}`} ref={selectRef}>
      <div className="select__top" onClick={toggleIsOpen}>
        <div className="select__value">{selectValue}</div>
        <Icon
          className={classNames("select__marker", {'select__marker_inverted': isOpen})}
          style={{order: 3}}
          name={iconName}
          width="10"
          height="5"
        />
      </div>
      {
        isOpen &&
        <div
          className="select__bottom">
          <div
            className={classNames(`select__options`, {"select__options_loading": isLoading})}>
            {
              !error ?
                options.map((option, i) =>
                  <React.Fragment key={i}>
                    <Option
                      selected={selectedOption?.value === option.value}
                      onClick={handleClickOption}
                      option={option}
                    >
                      {option.label}
                    </Option>
                  </React.Fragment>
                )
                :
                errorMessageJSX
            }
          </div>
        </div>
      }
    </div>
  )
};

export default Select;
