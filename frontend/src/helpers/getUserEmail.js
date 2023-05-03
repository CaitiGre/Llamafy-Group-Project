import axios from "axios";

export default async function getUserEmail() {
  try {
    const response = await axios.post(`http://localhost:3006/auth/getUserEmail/`, null, {
        withCredentials: true});
        console.log("js file:" + response.data);
    return await response.data;
  } catch (error) {
    console.error("Error getting user email:", error);
    return null;
  }
}
