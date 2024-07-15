import React, { useContext } from "react";
import { Button } from "../ui/button.jsx";
import { ArrowRight, Grid3X3 } from "lucide-react";
import PersonalDetailsForm from "../form/PersonalDetailsForm.jsx";
import { ResumeContext } from "@/context/resumeContext.jsx";

const ResumeForm = () => {
  const {resumeInfo, setResumeInfo} = useContext(ResumeContext)

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <Button className="flex items-center gap-2 px-3 py-1 rounded-md outline outline-2 outline-teal-800  transition duration-300 ease-in-out">
          <Grid3X3 className="w-5 h-5" />
          Theme
        </Button>
        <Button className="bg-teal-400 flex items-center gap-2 px-3 py-1 rounded-md outline outline-2 outline-teal-800  transition duration-300 ease-in-out">
          Next
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="shadow-lg p-4 h-full border-t-4 border-teal-500 mt-6">
      {/* Personl Details Form  */}
        <PersonalDetailsForm resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>
        
      </div>
    </div>
  );
};

export default ResumeForm;
