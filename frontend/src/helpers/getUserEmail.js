import axios from 'axios';

export default async function getUserEmail() {
  try {
    const response = await axios.get(`/auth/getUserEmail/`);
    return response.data.user_email;
  } catch (error) {
    console.error('Error getting user email:', error);
    return null;
  }
}
