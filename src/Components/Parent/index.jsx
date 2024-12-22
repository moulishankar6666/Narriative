import ParentLeftPart from "../LeftSide/studentLeftside";
import MainPart from "../Mainpart/StudentContent/index";
import RightPart from "../Rightside";
import "./index.css";

import { useState } from "react";

const Parent = () => {
  const [activeBtn, setActiveBtn] = useState("Home");

  return (
    <div className="main">
      <div className="content">
        <ParentLeftPart tab={{ activeBtn, setActiveBtn }} />
        <MainPart activeTab={{ activeBtn }} />
        <RightPart tab={{ activeBtn, setActiveBtn }} />
      </div>
    </div>
  );
};

export default Parent;
