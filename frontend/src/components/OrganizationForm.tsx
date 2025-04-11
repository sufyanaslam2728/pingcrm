import React, { useState } from "react";
import { OrganizationData } from "../types/organization";
import { Link } from "react-router-dom";

type Props = {
  data?: OrganizationData;
  form: "edit" | "create";
};

const OrganizationForm = ({ data, form }: Props) => {
  const [name, setName] = useState(data ? data.name : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [phone, setPhone] = useState(data ? data.phone : "");
  const [address, setAddress] = useState(data ? data.address : "");
  const [city, setCity] = useState(data ? data.city : "");
  const [state, setState] = useState(data ? data.province : "");
  const [country, setCountry] = useState(data ? data.country : "");
  const [code, setCode] = useState(data ? data.postal_code : "");

  const createOrganization = () => {
    // e.preventDefault();
    console.log("submit");
  };
  const updateOrganization = () => {
    // e.preventDefault();
    console.log("submit");
  };
  const deleteOrganization = () => {
    // const ans = confirm("Are you sure you want to delete this organization?");
  };
  return (
    <form className="max-w-4xl bg-white rounded-md shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-7">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone:
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Address:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            City:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Province/State:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Country:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Postal code:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
      </div>

      {form === "create" ? (
        <div className="px-8 py-5 p-5 border-t flex justify-end bg-[#F9FAFB] rounded-b-md">
          <button
            type="submit"
            className="px-6 py-2 bg-[#5661B3] text-white rounded-md hover:bg-orange-600 transition"
            onSubmit={createOrganization}
          >
            Create Organization
          </button>
        </div>
      ) : (
        <div className="px-8 py-5 border-t flex justify-between bg-[#F9FAFB] rounded-b-md">
          <button className="text-red-600 text-lg" onClick={deleteOrganization}>
            Delete Organization
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#5661B3] text-white rounded-md hover:bg-orange-600 transition"
            onSubmit={updateOrganization}
          >
            Update Organization
          </button>
        </div>
      )}
    </form>
  );
};

export default OrganizationForm;
