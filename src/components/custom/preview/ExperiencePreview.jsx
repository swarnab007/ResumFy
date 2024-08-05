import React from "react";
import Loader from "../Loader";

const ExperiencePreview = ({ resumeInfo }) => {
  if (!resumeInfo || !resumeInfo.experience) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="experience-preview">
      <h3
        className="text-center text-lg mt-4 font-bold mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h3>
      <div
        className="border-t-2 mb-4"
        style={{ borderColor: resumeInfo?.themeColor }}
      ></div>
      {resumeInfo.experience.map((e) => (
        <div key={e.id} className="mb-4">
          <h4
            className="text-md font-bold"
            style={{ color: resumeInfo?.themeColor }}
          >
            {e.jobTitle}
          </h4>
          <div className="flex justify-between">
            <p className="font-md text-sm font-medium">{e.company}</p>
            <p className="text-sm">{`${e.startDate} - ${e.endDate}`}</p>
          </div>
          <div className="text-sm my-2">
            {/* Render responsibilities as HTML */}
            <div
              dangerouslySetInnerHTML={{ __html: e?.responsibilities }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;
