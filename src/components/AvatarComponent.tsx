import React from "react";
import { AVATAR_TYPE_ENUM, SelectedModeProps } from "../types";
import AvatarWithImage from "./AvatarWithImage";
import AvatarWithInitals from "./AvatarWithInitals";

type ISelectedAvatarType = {
  [key in AVATAR_TYPE_ENUM]: JSX.Element;
};

const AvatarComponent: React.FC<SelectedModeProps> = ({
  ...props
}: SelectedModeProps) => {
  const selectedMode = props.type as AVATAR_TYPE_ENUM;

  const AvatarType: ISelectedAvatarType = {
    IMAGE: <AvatarWithImage {...props} />,
    INITIALS: <AvatarWithInitals {...props} />,
    DEFAULT: <p>Error</p>,
  };

  return AvatarType[selectedMode] || AvatarType.DEFAULT;
};

export default AvatarComponent;
