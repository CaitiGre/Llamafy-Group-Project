import axios from 'axios';

export default async function handleLogout(setUserAuthenticated) {
    try {
        await axios.post("http://3.27.75.210:3006/auth/logout", null, {
          withCredentials: true,
        });
        setUserAuthenticated(false);
        
      } catch (err) {
        console.error("Error logging out:", err);
      }
      
      
}