import axios from "axios";
var URI = "https://mstak.tech/api/";
// var URI = "http://192.168.0.106:3000/api/";

export async function postRequest(endpoint, params) {
  var response = await axios.post(`${URI}${endpoint}`, params);
  return response.data;
}

export async function getRequest(endpoint) {
  const response = await axios.get(`${URI}${endpoint}`);

  return response.data;
}
