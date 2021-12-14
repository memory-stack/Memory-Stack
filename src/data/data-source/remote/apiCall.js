import axios from "axios";
var URI = "https://api-memory-stack.herokuapp.com/api/";

export async function postRequest(endpoint, params) {
  var response = await axios.post(`${URI}${endpoint}`, params);
  return response.data;
}

export async function getRequest(endpoint) {
  const response = await axios.get(`${URI}${endpoint}`);

  return response.data;
}
