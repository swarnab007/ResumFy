/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const AIchatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Job Title : Cloud Enginner . Give me a summary for my Resume based on job title in 4-5 lines.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Here are a few summary options for a Cloud Engineer resume, focusing on 4-5 lines:\n\n**Option 1 (General)**\n\n> Experienced Cloud Engineer with a proven track record of designing, implementing, and managing cloud infrastructure solutions.  Skilled in [mention 2-3 key cloud platforms like AWS, Azure, GCP], automation, and DevOps practices. Passionate about optimizing cloud performance and security for high-availability systems. Seeking a challenging role to leverage my expertise and contribute to a dynamic team.\n\n**Option 2 (Focused on Skills)**\n\n> Cloud Engineer proficient in [mention 2-3 key cloud platforms] with expertise in infrastructure-as-code, containerization (Docker, Kubernetes), and automation tools (Ansible, Terraform).  Strong understanding of cloud security best practices and experience in building highly scalable and resilient cloud environments.  Seeking a role where I can utilize my technical skills to deliver innovative cloud solutions.\n\n**Option 3 (Focus on Achievements)**\n\n> Highly motivated Cloud Engineer with [number] years of experience successfully migrating and managing applications in cloud environments.  Demonstrated ability to [mention a key achievement like reducing cloud costs, improving application performance, or streamlining deployment processes]. Eager to contribute my expertise in [mention 1-2 specific cloud skills] to a forward-thinking organization.\n\n**Remember to:**\n\n* **Tailor the summary to the specific job you are applying for.** Highlight the skills and experiences most relevant to the role.\n* **Quantify your accomplishments whenever possible.** Use numbers and metrics to showcase your impact.\n* **Keep it concise and impactful.** Use strong action verbs and avoid using jargon. \n",
        },
      ],
    },
  ],
});
