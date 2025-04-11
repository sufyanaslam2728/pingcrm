import React, { useState, useEffect } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import { getOrganizations } from "../services/organization";

type Props = {};

const Organizations = (props: Props) => {
  const columns = ["name", "city", "phone", "id"];

  const [data, setData] = useState([
    {
      name: "Apple Inc",
      email: "info@apple.com",
      phone: "+1-989-098-0999",
      address: "32 Street WA",
      city: "Chicago",
      province: "WA",
      country: "USA",
      postal_code: "87898",
      id: 1,
      //   "": { label: ">", href: "/profile/john" },
    },
    {
      name: "Apple Inc",
      email: "info@apple.com",
      phone: "+1-989-098-0999",
      address: "32 Street WA",
      city: "Chicago",
      province: "WA",
      country: "USA",
      postal_code: "87898",
      id: 2,
    },
    // { Name: "Jane Smith", City: 32, Phone: "Designer", "": ">" },
    // { Name: "Sam Johnson", City: 45, Phone: "Manager", "": ">" },
  ]);

  const [search, setSearch] = useState("");

  const getAllOrganizations = async () => {
    const response = await getOrganizations();
    setData(response);
    console.log("Response: ", response);
  };
  useEffect(() => {
    getAllOrganizations();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Organizations</h1>

      <div className="flex flex-col gap-5">
        <div className="flex justify-around">
          <div>Filter</div>
          <Link to={"/organizations/create"}>Create Organization</Link>
        </div>
        <Table columns={columns} data={data} table_name={"organizations"} />
        <div className="w-10">Pagination</div>
      </div>
    </div>
  );
};

export default Organizations;
