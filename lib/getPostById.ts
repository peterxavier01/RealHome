import axios from "axios";

export async function getPostById(id: string) {
  const response = await axios.get("/api/blog/" + id);

  if (response.status !== 200)
    throw new Error("Something went wrong. Please try again");

  return response.data;
}
