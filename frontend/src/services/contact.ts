import axios from "axios";

export const getContacts = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/contacts/`,
      {
        headers: {
          accept: "application/json",
        },
        maxBodyLength: Infinity,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
