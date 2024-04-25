import axios from "axios";

const LOCAL_BASE_URL = "http:// 192.168.102.8/task/";

const userToken = localStorage.getItem("accessToken");
const token = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: "Bearer " + `${userToken}`,
  },
};
export const getLoginAPI = async (data) => {
  return await axios.post(`${LOCAL_BASE_URL}login`, data);
}