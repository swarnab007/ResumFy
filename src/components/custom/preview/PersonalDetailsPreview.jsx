import React from "react";

const PersonalDetailsPreview = ({ resumeInfo }) => {
  return (
    <div className="personal-details p-2">
      <h2
        style={{ color: resumeInfo?.themeColor }}
        className="text-2xl text-center font-extrabold mb-1"
      >
        {resumeInfo?.name}
      </h2>
      <h3 className="text-center text-lg font-bold mb-1">
        {resumeInfo?.title}
      </h3>
      <div>
        <p className="text-gray-600 text-center font-bold text-sm mb-1">
          {resumeInfo?.address}
        </p>
      </div>
      <div className="block text-center md:flex md:justify-between">
        {" "}
        <p
          className="text-gray-600 text-sm mb-1"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.phone}
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <a
            href={`mailto:${resumeInfo?.email}`}
            className="hover:underline"
            style={{ color: resumeInfo?.themeColor }}
          >
            {resumeInfo?.email}
          </a>
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <a
            href={resumeInfo?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: resumeInfo?.themeColor }}
          >
            Linkedin
          </a>
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <a
            href={resumeInfo?.gitub}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: resumeInfo?.themeColor }}
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default PersonalDetailsPreview;
