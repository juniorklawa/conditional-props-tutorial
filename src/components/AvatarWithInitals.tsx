import React from "react";
import { AllAvatarProps } from "../types";

const AvatarWithInitials: React.FC<AllAvatarProps> = ({
  borderColor,
  initials,
}) => {
  return (
    <div
      style={{
        height: 200,
        width: 200,
        borderRadius: "50%",
        border: "3px solid",
        borderColor: borderColor,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <p style={{ borderColor: borderColor, fontSize: 48 }}>{initials}</p>
    </div>
  );
};

export default AvatarWithInitials;
