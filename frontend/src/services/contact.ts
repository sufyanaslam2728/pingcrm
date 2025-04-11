import axios from "axios";
import { ContactData } from "../types";

export const getContacts = async (
  name?: string,
  company_name?: string
): Promise<any> => {
  try {
    const params = new URLSearchParams();

    if (name) params.append("name", name);
    if (company_name) params.append("company_name", company_name);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/contacts/?${params.toString()}`,
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

export const createContactAPI = async (
  contactData: ContactData
): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/contacts/`,
      contactData,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
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

export const deleteContactAPI = async (contactId: number): Promise<any> => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/contacts/${contactId}`,
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

export const updateContactAPI = async (
  contactId: number,
  contactData: ContactData
): Promise<any> => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/contacts/${contactId}`,
      contactData,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
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

export const getContactByIdAPI = async (contactId: number): Promise<any> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/contacts/${contactId}`,
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
