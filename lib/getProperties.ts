import axios from "axios";

export async function getProperties(page?: number) {
  let response;

  if (page) {
    response = await axios.get(`/api/property?page=${page}`);
  } else {
    response = await axios.get(`/api/property`);
  }

  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data;
}
