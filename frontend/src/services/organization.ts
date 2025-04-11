import axios from "axios";

export const getOrganizations = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/companies/`,
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

export const getOrganizationById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/companies/${id}`,
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
