import axios from "axios";
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const instance = axios.create({
    baseURL: "http://localhost:1337/api/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
    },
});

export const createResume = (data) => instance.post("/user-resumes", data);