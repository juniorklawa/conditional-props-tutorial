import React from "react";
import { AllAvatarProps } from "../types";

const AvatarWithImage: React.FC<AllAvatarProps> = ({ url, borderColor }) => {
  return (
    <img
      style={{
        objectFit: "cover",
        height: 200,
        width: 200,
        borderRadius: "50%",
        border: "3px solid",
        borderColor: borderColor,
      }}
      alt="an avatar"
      src={url}
    />
  );
};

export default AvatarWithImage;
