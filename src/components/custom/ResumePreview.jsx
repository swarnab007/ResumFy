import React, { useContext } from "react";
import PersonalDetailsPreview from "./preview/PersonalDetailsPreview.jsx";

import { ResumeContext } from "@/context/resumeContext.jsx";
import AboutPreview from "./preview/AboutPreview.jsx";
import ExperiencePreview from "./preview/ExperiencePreview.jsx";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);

  console.log(resumeInfo);

  return (
    <div
      className="shadow-lg p-10 h-full border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal Details */}
      <PersonalDetailsPreview resumeInfo={resumeInfo} />
      {/* About */}
      <AboutPreview resumeInfo={resumeInfo} />
      {/* Experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />
       
    </div>
  );
};

export default ResumePreview;
