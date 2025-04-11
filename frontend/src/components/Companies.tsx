import { useState, useEffect } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import { getCompanies } from "../services/company";
import { CompanyData } from "../types";

type Props = {};

const Companies = (props: Props) => {
  const columns = ["name", "city", "phone", "id"];

  const [data, setData] = useState<CompanyData[]>([]);

  const [search, setSearch] = useState("");

  const getAllCompanies = async () => {
    const response = await getCompanies();
    setData(response);
    console.log("Response: ", response);
  };
  useEffect(() => {
    getAllCompanies();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Companies</h1>

      <div className="flex flex-col gap-5">
        <div className="flex justify-around">
          <div>Filter</div>
          <Link to={"/companies/create"}>Create Company</Link>
        </div>
        <Table columns={columns} data={data} table_name={"companies"} />
      </div>
    </div>
  );
};

export default Companies;
