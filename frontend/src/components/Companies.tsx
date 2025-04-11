import { useState, useEffect } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import { getCompaniesAPI } from "../services/company";
import { CompanyData } from "../types";
import toast from "react-hot-toast";

const Companies = () => {
  const columns = ["name", "city", "phone", "id"];

  const [data, setData] = useState<CompanyData[]>([]);

  const [search, setSearch] = useState("");

  const getAllCompanies = async () => {
    try {
      const response = await getCompaniesAPI();
      setData(response);
      console.log("All companies:", response);
    } catch (error) {
      toast.error("Failed to fetch companies.");
    }
  };

  const getAllCompaniesByName = async (name: string) => {
    try {
      const response = await getCompaniesAPI(name);
      setData(response);
      console.log("Filtered companies:", response);
    } catch (error) {
      toast.error("Failed to search companies.");
    }
  };
  useEffect(() => {
    getAllCompanies();
  }, []);

  // Debounced search
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (search.trim()) {
        getAllCompaniesByName(search);
      } else {
        getAllCompanies();
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [search]);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Companies</h1>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center px-4">
          <input
            type="search"
            placeholder="Search by name..."
            className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            to={"/companies/create"}
          >
            Create Company
          </Link>
        </div>
        <Table columns={columns} data={data} table_name={"companies"} />
      </div>
    </div>
  );
};

export default Companies;
