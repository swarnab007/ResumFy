import React from "react";

const EducationPreview = ({ resumeInfo }) => {
  return (
    <div className="education-preview">
      <h3
        className="text-center text-lg mt-4 font-bold mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h3>
      <div
        className="border-t-2 mb-4"
        style={{ borderColor: resumeInfo?.themeColor }}
      ></div>
      {resumeInfo?.education.map((e) => (
        <div key={e.id} className="mb-4">
          <h4
            className="text-md font-bold"
            style={{ color: resumeInfo?.themeColor }}
          >
            {e?.degree}
          </h4>
          <div className="flex justify-between">
            <p className="font-md text-sm font-medium">{e?.institution}</p>
            <p className="text-sm">{`${e.startDate} - ${e?.endDate}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationPreview;
