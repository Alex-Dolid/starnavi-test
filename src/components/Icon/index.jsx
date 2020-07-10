import React, {memo, useMemo} from "react";
//assets
import {ReactComponent as IconSelectArrow} from "../../assets/icons/icon-select-arrow.svg";

const icons = {
    "icon-select-arrow": IconSelectArrow,
};

const Icon = ({name, ...props}) => {
    const IconElement = useMemo(() => icons[name], [name]);

    if (!IconElement) {
        console.warn(`Icon "${name}" does not exist.`);
        return null;
    }

    return (
        <IconElement {...props} />
    )
};

export default memo(Icon);
