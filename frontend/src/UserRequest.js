import axios from "axios";

const TOKEN = JSON.parse(localStorage.getItem("userData"))?.token;
console.log(TOKEN);

export const userRequest = axios.create({
  // baseURL: import.meta.env.API_URL,
  baseURL: "https://todo-app-api-huc1.onrender.com/",
  headers: { token: `Bearer ${TOKEN}` },
});
