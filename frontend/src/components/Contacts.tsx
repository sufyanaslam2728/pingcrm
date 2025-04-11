import { useState, useEffect } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import { ContactData } from "../types";
import toast from "react-hot-toast";
import { getContacts } from "../services/contact";

const Contacts = () => {
  const columns = ["name", "company", "city", "phone", "id"];

  const [data, setData] = useState<ContactData[]>([]);

  const [nameSearch, setNameSearch] = useState("");
  const [companySearch, setCompanySearch] = useState("");

  const getAllContacts = async () => {
    try {
      const response = await getContacts();
      setData(response);
      console.log("All contacts:", response);
    } catch (error) {
      toast.error("Failed to fetch contacts.");
    }
  };

  const getAllContactsBySearchFilters = async (
    name?: string,
    company?: string
  ) => {
    try {
      const response = await getContacts(name, company);
      setData(response);
      console.log("Filtered contacts:", response);
    } catch (error) {
      toast.error("Failed to search contacts!");
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  // Debounced search
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (nameSearch.trim() && companySearch.trim()) {
        getAllContactsBySearchFilters(nameSearch, companySearch);
      } else if (nameSearch.trim()) {
        getAllContactsBySearchFilters(nameSearch);
      } else if (companySearch.trim()) {
        getAllContactsBySearchFilters(undefined, companySearch);
      } else {
        getAllContacts();
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [nameSearch, companySearch]);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contacts</h1>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center px-4">
          <input
            type="search"
            placeholder="Search by name..."
            className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <input
            type="search"
            placeholder="Search by company..."
            className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={companySearch}
            onChange={(e) => setCompanySearch(e.target.value)}
          />
          <Link
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            to={"/contacts/create"}
          >
            Create Contact
          </Link>
        </div>
        <Table columns={columns} data={data} table_name={"contacts"} />
      </div>
    </div>
  );
};

export default Contacts;
