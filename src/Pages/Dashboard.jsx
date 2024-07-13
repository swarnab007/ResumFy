import AddResume from "@/components/custom/AddResume";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { getAllResumes } from "../../services/GlobalApi.js";
import ResumeCard from "@/components/custom/ResumeCard";

const Dashboard = () => {
  const { user } = useUser();
  const [allResumes, setAllResumes] = React.useState([]);

  useEffect(() => {
    if (user) {
      getAllList();
    }
  }, [user]);

  const getAllList = () => {
    getAllResumes(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log("Fetched Resumes:", res.data.data);
        setAllResumes(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl text-teal-600 font-bold">My Resumes</h2>
        <p className="mt-2 text-gray-800">
          Get started by creating a new resume
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AddResume />
        {allResumes?.map((resume, index) => (
          <ResumeCard key={resume.id} resume={resume} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
