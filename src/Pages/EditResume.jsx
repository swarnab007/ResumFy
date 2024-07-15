import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResumeForm from "@/components/custom/ResumeForm";
import ResumePreview from "@/components/custom/ResumePreview";
import { resumeData } from "../data/data.js";
import { ResumeContext } from "@/context/resumeContext.jsx";

const EditResume = () => {
  const { id } = useParams();
  const [resumeInfo, setResumeInfo] = useState(null);

  useEffect(() => {
    setResumeInfo(resumeData);
  }, []); 

  // console.log(resumeInfo);

  return (
    <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        <div>
          <ResumeForm />
        </div>
        <div>
          <ResumePreview />
        </div>
      </div>
    </ResumeContext.Provider>
  );
};

export default EditResume;
