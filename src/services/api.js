import axios from "axios";

// Function to fetch user data
export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_POCKETBASE_URL}/users/${userId}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching user data:", err);
    throw err;
  }
};

// Function to fetch message metadata
export const fetchMessageMetadata = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_POCKETBASE_URL}/messageMetadata`);
    return response.data;
  } catch (err) {
    console.error("Error fetching metadata:", err);
    throw err;
  }
};
