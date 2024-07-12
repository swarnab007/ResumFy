import AddResume from "@/components/custom/AddResume";
import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl text-teal-600 font-bold">My Resumes</h2>
        <p className="mt-2 text-gray-800">
          Get started by creating a new resume
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AddResume />
      </div>
    </div>
  );
};

export default Dashboard;
