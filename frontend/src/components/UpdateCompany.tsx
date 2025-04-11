import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import CompanyForm from "./CompanyForm";
import Table from "./Table";
import { getCompanyByIdAPI } from "../services/company";
import { CompanyData } from "../types";

function UpdateCompany() {
  const columns = ["name", "city", "phone", "id"];
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<CompanyData | null>(null);

  const getCompany = async () => {
    if (id) {
      try {
        const response = await getCompanyByIdAPI(id);
        console.log(response);
        setData(response);
      } catch (error) {
        console.error("Failed to fetch company:", error);
        navigate("/not-found");
      }
    }
  };
  useEffect(() => {
    getCompany();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        <Link to="/companies" className="text-[#7886D7]">
          Companies/{" "}
        </Link>
        {data?.name}
      </h1>
      {data && <CompanyForm form="edit" data={data} id={id} />}
      <h2 className="text-2xl font-semibold mt-12 mb-8 text-gray-800">
        Contacts
      </h2>
      <Table
        columns={columns}
        data={data?.contacts ?? []}
        table_name={"contacts"}
      />
    </div>
  );
}

export default UpdateCompany;
