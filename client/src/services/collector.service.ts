import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const getAccessions = async () => {
  const res = await axios.get(`${BASE_URL}/collector`);
  return res.data;
};
