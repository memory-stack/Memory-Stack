import axios from "axios";

export async function postRequest(URI, params) {
  var response = await axios.post(
    `https://api-memory-stack.herokuapp.com/api/${URI}`,
    params,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpZXRoYmVycnlAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ2b2lkIiwiaWF0IjoxNjM1NzQ3NjgzfQ.3c4KzLQf-r1UmcitGO_snznSa0z44b7cdCeQKqNaJ8k`,
      },
    }
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
