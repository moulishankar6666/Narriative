import "./index.css";
const RightPart = (props) => {
  const { setActiveBtn, activeBtn } = props.tab;
  return (
    <aside>
      <button
        className={
          activeBtn === "I will Start After 1st Year" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("I will Start After 1st Year");
        }}
      >
        Why Now, Start After 1st Year
      </button>
      <button
        className={activeBtn === "Ccbp vs Others" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Ccbp vs Others");
        }}
      >
        CCBP vs Others
      </button>
      <button
        className={activeBtn === "Influencer Handling" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Influencer Handling");
        }}
      >
        Influencer Handling
      </button>
      <button
        className={
          activeBtn === "Is IT Training Institute" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Is IT Training Institute");
        }}
      >
        Is IT Training Institute?
      </button>
      <button
        className={
          activeBtn === "Classes Start Date & Session Timings"
            ? "active"
            : "inactive"
        }
        onClick={() => {
          setActiveBtn("Classes Start Date & Session Timings");
        }}
      >
        Classes Start Date & Session Timings
      </button>
      <button
        className={activeBtn === "Fincial Partners" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Fincial Partners");
        }}
      >
        Fincial Partners / Office Address
      </button>
      <button
        className={
          activeBtn === "What do you Teach In FullStack" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("What do you Teach In FullStack");
        }}
      >
        What do you Teach In FullStack
      </button>
      <button
        className={
          activeBtn === "Other fields of Interest" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Other fields of Interest");
        }}
      >
        Other fields of Interest
      </button>
      <button
        className={
          activeBtn === "Online course vs CCBP 4.0" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Online course vs CCBP 4.0");
        }}
      >
        Online course vs CCBP 4.0
      </button>
      <button
        className={
          activeBtn === "My parent Won't Take Decision" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("My parent Won't Take Decision");
        }}
      >
        My parent Won't Take Decision
      </button>
      <button
        className={
          activeBtn === "Will My Child Able To Learn?" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Will My Child Able To Learn?");
        }}
      >
        Will My Child Able To Learn?
      </button>
      <button
        className={
          activeBtn === "Did't Watch The Webinar" ? "active" : "inactive"
        }
        onClick={() => {
          setActiveBtn("Did't Watch The Webinar");
        }}
      >
        Did't Watch The Webinar
      </button>
      <button
        className={
          activeBtn === "Will Company Give High Pay Jobs"
            ? "active"
            : "inactive"
        }
        onClick={() => {
          setActiveBtn("Will Company Give High Pay Jobs");
        }}
      >
        Will Company Give High Pay Jobs
      </button>
      <button
        className={activeBtn === "Live vs Recording" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Live vs Recording");
        }}
      >
        Live vs Recording
      </button>

      <button
        className={activeBtn === "Who can enroll" ? "active" : "inactive"}
        onClick={() => {
          setActiveBtn("Who can enroll");
        }}
      >
        Who can enroll?
      </button>
      <button
        className={
          activeBtn === "Start Batch Immediately / Some Time"
            ? "active"
            : "inactive"
        }
        onClick={() => {
          setActiveBtn("Start Batch Immediately / Some Time");
        }}
      >
        Start Batch Immediately / Some Time
      </button>
    </aside>
  );
};
export default RightPart;
