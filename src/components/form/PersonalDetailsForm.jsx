import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/button";

const PersonalDetailsForm = ({ resumeInfo, setResumeInfo }) => {
  const handleSave = () => {
    // Implement save functionality here
    e.preventDefalt();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-bold text-xl">Personal Details</h2>
        <p className="font-medium text-md">Give Your Basic Informations</p>
      </div>
      <div className="block md:grid md:grid-cols-2 gap-4 text-md font-medium">
        <div className="mb-4">
          <label>First Name</label>
          <Input name="firstname" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>Last Name</label>
          <Input name="lastname" required onChange={handleChange} />
        </div>
        <div className="col-span-2 mb-4">
          <label>Job Title</label>
          <Input name="title" required onChange={handleChange} />
        </div>
        <div className="col-span-2 mb-4">
          <label>Address</label>
          <Input name="address" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>Phone</label>
          <Input name="phone" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <Input name="email" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>LinkedIn</label>
          <Input name="linkedin" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>GitHub</label>
          <Input name="github" onChange={handleChange} />
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <Button
          onClick={handleSave}
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
        >
          Save and Continue
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
