import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { Loader2, PlusIcon } from "lucide-react";
import { Input } from "../ui/Input";
import { Button } from "../ui/button";
import { v4 as uuidv4 } from "uuid";
import { createResume } from "../../../services/GlobalApi.js";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [resumeTitle, setResumeTitle] = React.useState("");
  const { user } = useUser();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onCreate = () => {
    setLoading(true); // Set loading to true when the creation starts
    const id = uuidv4();
    console.log(resumeTitle, id);
    console.log(user);

    const data = {
      data: {
        resumeTitle: resumeTitle,
        resumeID: id,
        userName: user?.fullName,
        resumeEmail: user?.primaryEmailAddress.emailAddress,
        title: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        address: "",
        linkedin: "",
        github: "",
      },
    };

    // Call the createResume function from GlobalApi.js
    createResume(data)
      .then((res) => {
        console.log(res.data.data);
        setLoading(false); // Set loading to false when the creation is done
        setIsOpen(false); // Close the dialog if the creation is successful
        navigate(`/dashboard/resume/${res.data.data.id}/edit`)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false if there's an error
      });
  };

  return (
    <div className="mt-4">
      <div
        onClick={() => setIsOpen(true)}
        className="p-14 py-14 border-dashed flex items-center justify-center bg-gray-200
          rounded-lg h-[280px] sm:h-auto hover:scale-105 cursor-pointer transition-all hover:shadow-md"
      >
        <PlusIcon className="w-8 h-8" />
      </div>
      <Dialog open={isOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="p-4 bg-white rounded-lg shadow-lg mx-2 sm:mx-0">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Create New Resume
            </DialogTitle>
            <DialogDescription className="mt-2 text-md text-gray-600">
              Add a title for your resume.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Input
              onChange={(e) => setResumeTitle(e.target.value)}
              placeholder="Ex: Cloud Engineer"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-end mt-6 space-x-4">
            <Button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Cancel
            </Button>
            <Button
              disabled={!resumeTitle || loading}
              onClick={() => onCreate()}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
