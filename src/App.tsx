import React from "react";
import AvatarComponent from "./components/AvatarComponent";
import { AVATAR_TYPE_ENUM } from "./types";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AvatarComponent
        borderColor="red"
        url="https://i.pravatar.cc/150?img=3"
        type={AVATAR_TYPE_ENUM.IMAGE}
      />
      <AvatarComponent
        borderColor="blue"
        initials="JD"
        type={AVATAR_TYPE_ENUM.INITIALS}
      />
    </div>
  );
}

export default App;
