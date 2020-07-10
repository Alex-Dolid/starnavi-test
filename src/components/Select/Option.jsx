// Core
import React from "react";
// Libs
import classNames from "classnames";

const Option = ({onClick, selected = false, children}) => {
  return (
    <div
      className={classNames('select__option', {'select__option_selected': selected})}
      onClick={onClick}
    >{children}</div>
  );
};

export default Option;
