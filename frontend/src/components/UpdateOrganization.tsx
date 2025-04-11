import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import OrganizationForm from "./OrganizationForm";
import Table from "./Table";
import { getOrganizationById } from "../services/organization";
import { OrganizationData } from "../types/organization";

type Props = {};

function UpdateOrganization({}: Props) {
  const columns = ["name", "city", "phone", "id"];
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState([]);
  const [contacts, setContacts] =
    useState<Array<Record<string, string | number>>>();
  const getOrganization = async () => {
    if (id) {
      const response = await getOrganizationById(id);
      console.log(response);
      setData(response);
      setContacts(response?.contacts);
    }
  };
  useEffect(() => {
    getOrganization();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        <Link to="/organizations" className="text-[#7886D7]">
          Organizations/{" "}
        </Link>
        Name
      </h1>
      {<OrganizationForm form="edit" />}
      <h2 className="text-2xl font-semibold mt-12 mb-8 text-gray-800">
        Contacts
      </h2>
      <Table columns={columns} data={[]} table_name={"contacts"} />
    </div>
  );
}

export default UpdateOrganization;
