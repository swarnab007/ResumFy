import React from "react";
import Loader from "./Loader";

const SkillPreview = ({ resumeInfo }) => {
  const maxRating = 10; // Maximum rating value

  if (!resumeInfo || !resumeInfo?.skills)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="skill-preview">
      <h2
        className="text-center text-lg mt-4 font-bold mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <div
        className="border-t-2 mb-4"
        style={{ borderColor: resumeInfo.themeColor }}
      ></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {resumeInfo?.skills.map((s) => (
          <div key={s.id}>
            <h2>{s.name}</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${(s.rating / maxRating) * 100}%`,
                  backgroundColor: resumeInfo?.themeColor,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPreview;
