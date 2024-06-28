import axios from "axios";

export async function getPosts(page?: number) {
  let response;

  if (page) {
    response = await axios.get(`/api/blog?page=${page}`);
  } else {
    response = await axios.get(`/api/blog`);
  }

  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data;
}
