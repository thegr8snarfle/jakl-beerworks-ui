import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {ICONS} from "../icons";
import React from "react";

const Icon: React.FC<{ name: string; } & Partial<FontAwesomeIconProps>> = ({ name , ... props}) => {
  return <FontAwesomeIcon { ... props } icon={ICONS[name]}/>
}

export default Icon;