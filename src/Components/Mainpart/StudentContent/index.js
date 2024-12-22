//parent left part
import TrustIssues from "./leftside/TrustIssues";
// import AbleToLearn from "./leftside/ableToLearn";
import NotInterested from "./leftside/notInterested";
import AiMl from "./leftside/AIAndML";
import TellFeeFirst from "./leftside/TellFeeFirst";
import IamBusy from "./leftside/IamBusy";
import Callback from "./leftside/Callback";
import TimeManagement from "./leftside/TimeManagement";
import CoreDomain from "./leftside/CoreDomain";
import MoneyUnteyKastam from "./leftside/MoneyUnteyKastam";
import HandlingCapbility from "./leftside/HandlingCapability";
import SelfLearning from "./leftside/SelfLearning";
import GovernmentJobs from "./leftside/GovernmentJobs";
import TwelveLpaGuarantee from "./leftside/12LpaGuarantee";
import OnlineVsOffline from "./leftside/OnlineVsOffline";
import JobSupport from "./leftside/JobSupport";
import StrengtheningTheStudent from "./leftside/StrengtheningTheStudent";
//parent right part
import DidntWatchTheWebinar from "./rightside/DidWatchTheWebinar";
import AbleToLearn from "./rightside/ableToLearn";
import CcbpVsOthers from "./rightside/ccbpVsOthers";
import ClassStartDate from "./rightside/ClassStartDate";
import FincialPartners from "./rightside/FincialPartners";
import IsItTrainingInstitute from "./rightside/IsItTrainingInstitute";
import IwillStartAfter from "./rightside/IWillStartAfter";
import InfluencerHandling from "./rightside/InfluencerHandling";
import LiveVsRecorded from "./rightside/LiveVsRecorded";
import WhatDoYouFTeach from "./rightside/WhatDoYouTeach";
import WhoCanEnroll from "./rightside/WhoCanEnroll";
import StartBatchImmediately from "./rightside/StartBatchImmediately";
import WillCompanyGiveJob from "./rightside/WillCompanyGiveJobs";
import OtherFields from "./rightside/OtherFields";
import OnlineVsCcbp from "./rightside/onlineCourseVsCcbp";
import MyparentWontTakeDecision from "./rightside/MyParentWontTakeDecision";

import HomeNarrative from "./HomeNarriative";
import "./index.css";

const activeTabMap = {
  Home: <HomeNarrative />,
  //parent left part
  "Not Interested": <NotInterested />,
  "I'm Busy Now": <IamBusy />,
  Callback: <Callback />,
  "Trust Issues": <TrustIssues />,
  "Time Management": <TimeManagement />,
  "Core Domain": <CoreDomain />,
  "AI/ML": <AiMl />,
  "Tell Me Fee I watched Webinar": <TellFeeFirst />,
  "Money untey kastam avvutumdhe": <MoneyUnteyKastam />,
  "Handling Capability Non IT": <HandlingCapbility />,
  "Self Learning": <SelfLearning />,
  "Government Jobs": <GovernmentJobs />,
  "12-Lpa guarantee": <TwelveLpaGuarantee />,
  "Online vs Offline": <OnlineVsOffline />,
  "Job Support": <JobSupport />,
  "Strengthening the student": <StrengtheningTheStudent />,
  //parent right part
  "Ccbp vs Others": <CcbpVsOthers />,
  "Influencer Handling": <InfluencerHandling />,
  "Is IT Training Institute": <IsItTrainingInstitute />,
  "Classes Start Date & Session Timings": <ClassStartDate />,
  "Fincial Partners": <FincialPartners />,
  "What do you Teach In FullStack": <WhatDoYouFTeach />,
  "Other fields of Interest": <OtherFields />,
  "Will My Child Able To Learn?": <AbleToLearn />,
  "Did't Watch The Webinar": <DidntWatchTheWebinar />,
  "Will Company Give High Pay Jobs": <WillCompanyGiveJob />,
  "Live vs Recording": <LiveVsRecorded />,
  "I will Start After 1st Year": <IwillStartAfter />,
  "Who can enroll": <WhoCanEnroll />,
  "Start Batch Immediately / Some Time": <StartBatchImmediately />,
  "Online course vs CCBP 4.0": <OnlineVsCcbp />,
  "My parent Won't Take Decision": <MyparentWontTakeDecision />,
};

const MainPart = (props) => {
  const { activeBtn } = props.activeTab;
  return (
    <div className="student-main-content">
      {Object.keys(activeTabMap).includes(activeBtn)
        ? activeTabMap[activeBtn]
        : "not present"}
    </div>
  );
};

export default MainPart;
