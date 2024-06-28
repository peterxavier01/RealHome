import axios from "axios";

export async function getPropertyById(id: string) {
  const response = await axios.get(`/api/property/${id}`);
  if (response.status !== 200) {
    throw new Error("Something went wrong. Please try again");
  }
  return response.data;
}
