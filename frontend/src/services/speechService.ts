import axios from "axios";

export const analyzeSpeech = async (audioFile: File) => {
  const formData = new FormData();
  formData.append("file", audioFile);

  const res = await axios.post("http://localhost:8000/api/speech-analysis", formData);
  return res.data;
};
