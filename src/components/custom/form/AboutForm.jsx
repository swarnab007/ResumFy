import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BrainCogIcon } from "lucide-react";
import { savePersonalDetails } from "../../../../services/GlobalApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ExperienceLevelModal from "../../../../services/ExperienceModal";
import { AIchatSession } from "../../../../services/AiModel.js";

const AboutForm = ({ resumeInfo, setResumeInfo }) => {
  const [about, setAbout] = useState(resumeInfo?.about || "");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const params = useParams();

  useEffect(() => {
    setResumeInfo((prev) => ({
      ...prev,
      about: about,
    }));
  }, [about, setResumeInfo]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: resumeInfo,
    };

    console.log("Saving data:", data);

    try {
      if (!params?.id) {
        throw new Error("ID parameter is undefined");
      }
      const res = await savePersonalDetails(params.id, data);
      console.log(res);
      toast.success("Summary Added");
    } catch (err) {
      console.error("Error saving data:", err);
      toast.error("Failed to save summary");
    } finally {
      setLoading(false);
    }
  };

  const generateSummary = () => {
    setModalOpen(true);
  };

  const handleSelectLevel = async (level) => {
    setLoading(true);
    setModalOpen(false);

    const prompt = `Job Title : ${resumeInfo?.title}. I am a ${level}. Give me a summary for my Resume based on job title in 4-5 lines without any option`;

    try {
      const result = await AIchatSession.sendMessage(prompt);
      const selectedSummary = result.response.text();

      setAbout(selectedSummary);
      setResumeInfo((prev) => ({
        ...prev,
        about: selectedSummary,
      }));
    } catch (error) {
      console.error("Error generating summary:", error);
      toast.error("Failed to generate summary");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-bold text-xl">About You</h2>
        <p className="font-medium text-md">Tell about Yourself</p>
      </div>
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">Summary</h2>
            <Button
              onClick={generateSummary}
              type="button"
              className="gap-2 text-teal-700 outline-teal-700 border border-teal-700"
            >
              <BrainCogIcon /> Generate From AI
            </Button>
          </div>
          <div className="mt-4 flex flex-col">
            <Textarea
              required
              value={about}
              rows="8"
              className="text-md"
              onChange={(e) => setAbout(e.target.value)}
            />
            <div className="mt-10 flex justify-end">
              <Button
                disabled={loading}
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
              >
                {loading ? "Saving..." : "Save and Continue"}
              </Button>
            </div>
          </div>
        </div>
      </form>
      <ExperienceLevelModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelectLevel}
      />
    </div>
  );
};

export default AboutForm;
