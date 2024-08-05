import React, { useContext, useState } from "react";
import { Button } from "../ui/button.jsx";
import { ArrowLeft, ArrowRight, Grid3X3 } from "lucide-react";
import PersonalDetailsForm from "./form/PersonalDetailsForm.jsx";
import { ResumeContext } from "@/context/resumeContext.jsx";
import AboutForm from "./form/AboutForm.jsx";
import ExperienceForm from "./form/ExperienceForm.jsx";
import EducationForm from "./form/EducationForm.jsx";
import SkillsForm from "./form/SkillsForm.jsx";

const ResumeForm = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
  const [index, setIndex] = useState(1);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <Button className="flex items-center gap-2 px-3 py-1 rounded-md outline outline-2 outline-teal-800  transition duration-300 ease-in-out">
          <Grid3X3 className="w-5 h-5" />
          Theme
        </Button>
        <div className="flex gap-4">
          {index > 1 && (
            <Button
              onClick={() => setIndex(index - 1)}
              className="bg-teal-400 flex items-center gap-2 px-3 py-1 
        rounded-md outline outline-2 outline-teal-800  transition duration-300 ease-in-out"
            >
              <ArrowLeft />
            </Button>
          )}

          <Button
            onClick={() => setIndex(index + 1)}
            disabled={!resumeInfo}
            className="bg-teal-400 flex items-center gap-2 px-3 py-1 rounded-md outline outline-2 outline-teal-800  transition duration-300 ease-in-out"
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="shadow-lg p-4 h-full border-t-4 border-teal-500 mt-6">
        {/* Personl Details Form  */}
        {index === 1 && (
          <PersonalDetailsForm
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
          />
        )}
        {/* About Form */}
        {index === 2 && (
          <AboutForm resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
        )}
        {/* Experience form */}
        {index === 3 && (
          <ExperienceForm
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
          />
        )}
        {/* Education Form */}
        {index === 4 && <EducationForm />}
        {/* Skills Form */}
        {index === 5 && <SkillsForm />}
      </div>
    </div>
  );
};

export default ResumeForm;
