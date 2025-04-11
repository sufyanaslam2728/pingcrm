import axios from "axios";
import { CompanyData } from "../types";

export const getCompanies = async (): Promise<any> => {
  console.log("URL: ", process.env.REACT_APP_BACKEND_URL);
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

export const getCompanieById = async (id: string): Promise<any> => {
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

export const deleteCompany = async (companyId: number) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/companies/${companyId}`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to delete company:", error);
    throw error;
  }
};

export const updateCompany = async (
  companyId: number,
  companyData: CompanyData
) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/companies/${companyId}`,
      companyData,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update company:", error);
    throw error;
  }
};

export const createCompany = async (companyData: CompanyData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/companies/`,
      companyData,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create company:", error);
    throw error;
  }
};
