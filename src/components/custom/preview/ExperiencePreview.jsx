import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  if (!resumeInfo || !resumeInfo.experience) return <div>Loading...</div>;

  return (
    <div className="experience-preview">
      <h3 className="text-center text-lg mt-4 font-bold mb-2">
        Professional Experience
      </h3>
      <div
        className="border-t-2 mb-4"
        style={{ borderColor: resumeInfo.themeColor }}
      ></div>
      {resumeInfo.experience.map((e) => (
        <div key={e.id} className="mb-4">
          <h4 className="text-md font-bold">{e.jobTitle}</h4>
          <div className="flex justify-between">
            <p className="font-md text-sm font-medium">{e.company}</p>
            <p className="text-sm">{`${e.startDate} - ${e.endDate}`}</p>
          </div>
          <ul className="list-disc list-inside ml-4 mt-1">
            {e.responsibilities.map((resp, index) => (
              <li key={index} className="text-sm">
                {resp}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;
