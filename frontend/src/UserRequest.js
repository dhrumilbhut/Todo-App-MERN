import axios from "axios";

const TOKEN = JSON.parse(localStorage.getItem("userData"))?.token;
console.log(TOKEN);

export const userRequest = axios.create({
  // baseURL: import.meta.env.API_URL,
  baseURL: "http://localhost:3001",
  headers: { token: `Bearer ${TOKEN}` },
});
