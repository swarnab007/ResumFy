import { Link } from "react-router-dom"; // Ensure you're using react-router-dom's Link
import React from "react";

const ResumeCard = ({ resume, index }) => {
  console.log("Resume:", resume, "Index:", index);
  return (
    <Link to={`/dashboard/resume/${resume.attributes.resumeID}/edit`}>
      <div className="p-6 border border-blue-700 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <h3 className="text-xl font-semibold text-teal-700 mb-2">
          {resume.attributes.resumeTitle}
        </h3>
        <p className="text-gray-600">
          {/* Display additional information if available */}
          {resume.attributes.description || "No description available"}
        </p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
