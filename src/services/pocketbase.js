import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.REACT_APP_POCKETBASE_URL);


export const login = async (email, password) => {
  try {
    const authData = await pb.collection("users").authWithPassword(email, password);
    return authData;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};


export const saveMessageMetadata = async (metadata) => {
  try {
    const result = await pb.collection("messageMetadata").create(metadata);
    return result;
  } catch (err) {
    console.error("Error saving metadata:", err);
    throw err;
  }
};

// Export the PocketBase instance
export default pb;
