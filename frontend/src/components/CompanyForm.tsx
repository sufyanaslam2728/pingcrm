import { useState } from "react";
import { CompanyData } from "../types";
import {
  deleteCompanyAPI,
  createCompanyAPI,
  updateCompanyAPI,
} from "../services/company";
import ConfirmModal from "./ConfirmModal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Props = {
  data?: CompanyData;
  form: "edit" | "create";
  id?: string;
};

const CompanyForm = ({ data, form, id }: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState(data?.name ?? "");
  const [email, setEmail] = useState(data?.email ?? "");
  const [phone, setPhone] = useState(data?.phone ?? "");
  const [address, setAddress] = useState(data?.address ?? "");
  const [city, setCity] = useState(data?.city ?? "");
  const [state, setState] = useState(data?.province ?? "");
  const [country, setCountry] = useState(data?.country ?? "");
  const [code, setCode] = useState(data?.postal_code ?? "");

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"delete" | "update" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    const formData: CompanyData = {
      name,
      email,
      phone,
      address,
      city,
      province: state,
      country,
      postal_code: code,
    };

    try {
      setIsLoading(true);
      await createCompanyAPI(formData);
      toast.success("Company created successfully");
      navigate("/companies");
    } catch (err) {
      toast.error("Failed to create company");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    const formData: CompanyData = {
      name,
      email,
      phone,
      address,
      city,
      province: state,
      country,
      postal_code: code,
    };
    try {
      setIsLoading(true);
      if (!id) throw new Error("ID missing");
      await updateCompanyAPI(+id, formData);
      toast.success("Company updated successfully");
    } catch (err) {
      toast.error("Failed to update company");
    } finally {
      setIsLoading(false);
      setShowModal(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      if (!id) throw new Error("ID missing");
      await deleteCompanyAPI(+id);
      toast.success("Company deleted successfully");
      navigate("/companies");
    } catch (err) {
      toast.error("Failed to delete company");
    } finally {
      setIsLoading(false);
      setShowModal(false);
    }
  };

  const openModal = (type: "delete" | "update") => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <form
      className="max-w-4xl bg-white rounded-md shadow-md"
      onSubmit={(e) => {
        e.preventDefault();
        if (form === "create") handleCreate();
      }}
    >
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
            onSubmit={handleCreate}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Company"}
          </button>
        </div>
      ) : (
        <div className="px-8 py-5 border-t flex justify-between bg-[#F9FAFB] rounded-b-md">
          <button
            className="text-red-600 text-lg"
            onClick={() => openModal("delete")}
            disabled={isLoading}
          >
            Delete Company
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#5661B3] text-white rounded-md hover:bg-orange-600 transition"
            onClick={() => openModal("update")}
            disabled={isLoading}
          >
            Update Company
          </button>
        </div>
      )}

      <ConfirmModal
        isOpen={showModal}
        title={modalType === "delete" ? "Delete Company" : "Update Company"}
        message={
          modalType === "delete"
            ? "Are you sure you want to delete this company?"
            : "Are you sure you want to update this company?"
        }
        onConfirm={modalType === "delete" ? handleDelete : handleUpdate}
        onCancel={() => setShowModal(false)}
        isLoading={isLoading}
      />
    </form>
  );
};

export default CompanyForm;
