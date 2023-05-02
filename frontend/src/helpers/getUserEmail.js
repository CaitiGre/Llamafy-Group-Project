import axios from "axios";

export async function getUserEmail() {
  try {
    const response = await axios.get(`/auth/getUserEmail/`);
    console.log(response.data.user_email);
    return response.data.user_email;
  } catch (error) {
    console.error("Error getting user email:", error);
    return null;
  }
}
