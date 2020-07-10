// Core
import React, {useCallback} from "react";
// Libs
import classNames from "classnames";

const Option = ({onClick, selected = false, children, option}) => {
  const handleOnClick = useCallback(() => onClick(option),[onClick, option]);
  return (
    <div
      className={classNames('select__option', {'select__option_selected': selected})}
      onClick={handleOnClick}
    >{children}</div>
  );
};

export default Option;
