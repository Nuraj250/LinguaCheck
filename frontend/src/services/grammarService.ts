import axios from "axios";

export const checkGrammar = async (text: string) => {
  const res = await axios.post("http://localhost:8000/api/grammar-check", { text });
  return res.data;
};
