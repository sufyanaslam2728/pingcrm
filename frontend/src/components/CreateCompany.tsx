import React from "react";
import CompanyForm from "./CompanyForm";
import { Link } from "react-router-dom";

function CreateCompany() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        <Link to="/companies" className="text-[#7886D7]">
          Companies/{" "}
        </Link>
        Create
      </h1>
      {<CompanyForm form="create" />}
    </div>
  );
}

export default CreateCompany;
