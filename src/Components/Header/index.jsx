import "./index.css";

const Header = (props) => {
  const { active } = props;
  const { narr, setNarr } = active;
  console.log(active);
  return (
    <header>
      <button
        className={narr === "Student" ? "active" : "inactive"}
        onClick={() => setNarr("Student")}
      >
        Student
      </button>
      <button
        className={narr === "Parent" ? "active" : "inactive"}
        onClick={() => setNarr("Parent")}
      >
        Parent
      </button>
    </header>
  );
};
export default Header;
