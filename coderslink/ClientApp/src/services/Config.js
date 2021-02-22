import axios from "axios";
//basic configuration to my api
export default axios.create({
  baseURL: "https://localhost:9001/api",
  headers: {
    "Content-type": "application/json"
  }
});