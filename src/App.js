import { useState } from "react";
import "./App.css";
import Parent from "./Components/Parent";
import Student from "./Components/Student";
import Header from "./Components/Header";

function App() {
  const [narr, setNarr] = useState("Student");
  return (
    <div className="App">
      <Header active={{ narr, setNarr }} />
      {narr === "Student" ? <Student /> : <Parent />}
    </div>
  );
}

export default App;
