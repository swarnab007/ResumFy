import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const instance = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Configuring Routes
export const createResume = (data) => instance.post("/user-resumes", data);

// Get all resumes
export const getAllResumes = (email) =>
  instance.get("/user-resumes?filters[resumeEmail][$eq]=" + email);

// Save the personal details
export const savePersonalDetails = (id, data) =>
  instance.put('/user-resumes/'+id, data);  // Updated endpoint
