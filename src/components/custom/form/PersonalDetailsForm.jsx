import React, { useEffect, useState } from "react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/button";
import { getResume, savePersonalDetails } from "../../../../services/GlobalApi.js";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const PersonalDetailsForm = ({ resumeInfo, setResumeInfo }) => {
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: resumeInfo,
    };

    savePersonalDetails(params?.id, data)
      .then((res) => {
        // console.log(res);
        setLoading(false);
        toast.success("Personal Details Added");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   getResume(params?.id)
  //     .then((res) => {
  //       setResumeInfo(res.data.data); // Update resumeInfo state with fetched data
  //       console.log(res.data.data);
  //     })
  //     .catch((e) => {
  //       toast.error("Something Went Wrong");
  //     });
  // }, [params?.id, setResumeInfo]); // Depend on params.id and setResumeInfo

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-bold text-xl">Personal Details</h2>
        <p className="font-medium text-md">Give Your Basic Informations</p>
      </div>
      <form onSubmit={handleSave} className="block md:grid md:grid-cols-2 gap-4 text-md font-medium">
        <div className="mb-4">
          <label>First Name</label>
          <Input name="firstname" value={resumeInfo?.firstname || ''} required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>Last Name</label>
          <Input name="lastname" value={resumeInfo?.lastname || ''} required onChange={handleChange} />
        </div>
        <div className="col-span-2 mb-4">
          <label>Job Title</label>
          <Input name="title" value={resumeInfo?.title || ''} required onChange={handleChange} />
        </div>
        <div className="col-span-2 mb-4">
          <label>Address</label>
          <Input name="address" value={resumeInfo?.address || ''} required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>Phone</label>
          <Input name="phone" value={resumeInfo?.phone || ''} required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <Input name="email" value={resumeInfo?.email || ''} required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>LinkedIn</label>
          <Input name="linkedin" value={resumeInfo?.linkedin || ''} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label>GitHub</label>
          <Input name="github" value={resumeInfo?.github || ''} onChange={handleChange} />
        </div>
        <div className="flex justify-end mt-10 col-span-2">
          <Button
            type="submit"
            disabled={loading}
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            {loading ? 'Saving...' : 'Save and Continue'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
