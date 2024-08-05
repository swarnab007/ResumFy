import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "../../ui/Input"; // Ensure correct import
import { useParams } from "react-router-dom";
import { savePersonalDetails } from "../../../../services/GlobalApi.js";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import RichTextEditor from "../../RichTextEditor.jsx";

const ExperienceForm = ({ resumeInfo, setResumeInfo }) => {
  const [experienceList, setExperienceList] = useState(resumeInfo?.experience || []);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const handleChange = (index, event) => {
    const newEntries = [...experienceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const addNewExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ]);
  };

  const removeExperience = () => {
    setExperienceList(experienceList.slice(0, -1));
  };

  const handleRichTextEditor = (e, name, index) => {
    const newEntries = [...experienceList];
    newEntries[index][name] = e.target.value;
    setExperienceList(newEntries);
  };

  useEffect(() => {
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      experience: experienceList,
    }));
  }, [experienceList, setResumeInfo]);

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        experience: experienceList.map(({ id, ...rest }) => rest),
      },
    };

    console.log(data);

    savePersonalDetails(params?.id, data).then(
      (res) => {
        // console.log(res.data.data);
        setLoading(false);
        
        toast.success("Experience Details updated!");
      },
      (error) => {
        setLoading(false);
        toast.error("Failed to update details");
      }
    );
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p>Add Your previous job experience</p>
      <div>
        {experienceList.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
            <div>
              <label className="text-xs">Position Title</label>
              <Input
                name="jobTitle"
                onChange={(event) => handleChange(index, event)}
                value={item?.jobTitle}
              />
            </div>
            <div>
              <label className="text-xs">Company Name</label>
              <Input
                name="company"
                onChange={(event) => handleChange(index, event)}
                value={item?.companyName}
              />
            </div>
            <div>
              <label className="text-xs">Start Date</label>
              <Input
                name="startDate"
                type="date"
                onChange={(event) => handleChange(index, event)}
                value={item?.startDate}
              />
            </div>
            <div>
              <label className="text-xs">End Date</label>
              <Input
                name="endDate"
                type="date"
                onChange={(event) => handleChange(index, event)}
                value={item?.endDate}
              />
            </div>
            <div className="col-span-2">
              <RichTextEditor
                onRichTextEditorChange={(e) => handleRichTextEditor(e, "responsibilities", index)}
                index={index}
                value={item?.responsibilities}
              />
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <Button variant="outline" size="sm" onClick={removeExperience} disabled={experienceList.length === 1}>
            Remove
          </Button>
          <Button variant="outline" size="sm" onClick={addNewExperience}>
            Add New
          </Button>
        </div>
        <div className="flex justify-end mt-10">
          <Button
            disabled={loading}
            type="submit"
            onClick={onSave} // Corrected function call
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            {loading ? "Saving..." : "Save and Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
