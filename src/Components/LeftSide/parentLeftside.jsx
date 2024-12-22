import "./index.css";
const ParentLeftPart = (props) => {
  const { setActiveBtn, activeBtn } = props.tab;

  return (
    <aside>
      <button
        className={activeBtn === "Not Interested" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Not Interested");
        }}
      >
        Not Interested
      </button>
      <button
        className={activeBtn === "I'm Busy Now" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("I'm Busy Now");
        }}
      >
        I'm Busy Now
      </button>
      <button
        className={activeBtn === "Callback" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Callback");
        }}
      >
        Callback
      </button>
      <button
        className={activeBtn === "Time Management" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Time Management");
        }}
      >
        Time Management
      </button>
      <button
        className={activeBtn === "Core Domain" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Core Domain");
        }}
      >
        Core Domain
      </button>
      <button
        className={activeBtn === "AI/ML" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("AI/ML");
        }}
      >
        AI/ML
      </button>
      <button
        className={
          activeBtn === "Tell Me Fee I watched Webinar" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Tell Me Fee I watched Webinar");
        }}
      >
        Tell Me Fee I watched Webinar
      </button>
      <button
        className={
          activeBtn === "Money untey kastam avvutumdhe" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Money untey kastam avvutumdhe");
        }}
      >
        Money untey kastam avvutumdhe
      </button>
      <button
        className={
          activeBtn === "Handling Capability Non IT" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Handling Capability Non IT");
        }}
      >
        Handling Capability Non IT
      </button>
      <button
        className={activeBtn === "Trust Issues" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Trust Issues");
        }}
      >
        Trust Issues
      </button>
      <button
        className={activeBtn === "Self Learning" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Self Learning");
        }}
      >
        Self Learning
      </button>
      <button
        className={activeBtn === "Government Jobs" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Government Jobs");
        }}
      >
        Government Jobs
      </button>
      <button
        className={activeBtn === "12-Lpa guarantee" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("12-Lpa guarantee");
        }}
      >
        12-Lpa guarantee
      </button>
      <button
        className={activeBtn === "Online vs Offline" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Online vs Offline");
        }}
      >
        Online vs Offline
      </button>
      <button
        className={activeBtn === "Job Support" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Job Support");
        }}
      >
        Job Support
      </button>
      <button
        className={
          activeBtn === "Strengthening the student" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Strengthening the student");
        }}
      >
        Strengthening the student
      </button>
    </aside>
  );
};
export default ParentLeftPart;
