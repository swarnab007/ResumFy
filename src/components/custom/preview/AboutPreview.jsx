import React from "react";

const AboutPreview = ({ resumeInfo }) => {
  return (
    <div>
      <div
        className="border-t-4"
        style={{ borderColor: resumeInfo?.themeColor }}
      ></div>
      <div className="mt-3">
        <p className="text-sm font-medium">{resumeInfo?.about}</p>
      </div>
    </div>
  );
};

export default AboutPreview;
