import StudentLeftPart from "../LeftSide/studentLeftside";
import MainPart from "../Mainpart/StudentContent/index";
import RightPart from "../Rightside";
import "./index.css";

import { useState } from "react";

const Student = () => {
  const [activeBtn, setActiveBtn] = useState("Home");

  return (
    <div className="content">
      <StudentLeftPart tab={{ activeBtn, setActiveBtn }} />
      <MainPart activeTab={{ activeBtn }} />
      <RightPart tab={{ activeBtn, setActiveBtn }} />
    </div>
  );
};

export default Student;
