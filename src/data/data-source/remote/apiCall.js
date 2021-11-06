import axios from "axios";

export async function postRequest(URI, params) {
  var response = await axios.post(
    `https://api-memory-stack.herokuapp.com/api/${URI}`,
    params
  );
  return response.data;
}

export async function postRequestLocal(URI, params) {
  var toReturn = await axios.post(URI, params);

  return toReturn.data;
}

export async function getRequest(URI) {
  const response = await axios.get(
    `https://api-memory-stack.herokuapp.com/api/${URI}`
  );

  return response.data;
}
