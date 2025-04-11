import React from "react";
import OrganizationForm from "./OrganizationForm";
import { Link } from "react-router-dom";

function CreateOrganization() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        <Link to="/organizations" className="text-[#7886D7]">
          Organizations/{" "}
        </Link>
        Create
      </h1>
      {<OrganizationForm form="create" />}
    </div>
  );
}

export default CreateOrganization;
