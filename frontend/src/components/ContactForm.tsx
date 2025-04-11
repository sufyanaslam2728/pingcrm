import { useEffect, useState } from "react";
import { ContactData } from "../types";
import ConfirmModal from "./ConfirmModal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  createContactAPI,
  deleteContactAPI,
  updateContactAPI,
} from "../services/contact";
import { getCompaniesAPI } from "../services/company";

type Props = {
  data?: ContactData;
  form: "edit" | "create";
  id?: string;
};

const ContactForm = ({ data, form, id }: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState(data?.name ?? "");
  const [phone, setPhone] = useState(data?.phone ?? "");
  const [city, setCity] = useState(data?.city ?? "");
  const [companyId, setCompanyId] = useState(data?.company_id ?? "");
  const [companies, setCompanies] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"delete" | "update" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllCompanies = async () => {
    try {
      const response = await getCompaniesAPI();
      setCompanies(response);
      console.log("All companies:", response);
    } catch (error) {
      toast.error("Failed to fetch companies.");
    }
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  const handleCreate = async () => {
    const formData: ContactData = {
      name,
      phone,
      city,
      company_id: +companyId,
    };

    try {
      setIsLoading(true);
      await createContactAPI(formData);
      toast.success("Contact created successfully.");
      navigate("/contacts");
    } catch (err) {
      toast.error("Failed to create contact!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    const formData: ContactData = {
      name,
      phone,
      city,
      company_id: +companyId,
    };
    try {
      setIsLoading(true);
      if (!id) throw new Error("ID missing");
      await updateContactAPI(+id, formData);
      toast.success("Contact updated successfully.");
    } catch (err) {
      toast.error("Failed to update contact!");
    } finally {
      setIsLoading(false);
      setShowModal(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      if (!id) throw new Error("ID missing");
      await deleteContactAPI(+id);
      toast.success("Contact deleted successfully.");
      navigate("/contacts");
    } catch (err) {
      toast.error("Failed to delete contact!");
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
            Company:
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
          >
            <option value="" disabled>
              Select a company
            </option>
            {companies.map((company: any) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
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
            {isLoading ? "Creating..." : "Create Contact"}
          </button>
        </div>
      ) : (
        <div className="px-8 py-5 border-t flex justify-between bg-[#F9FAFB] rounded-b-md">
          <button
            className="text-red-600 text-lg"
            onClick={() => openModal("delete")}
            disabled={isLoading}
          >
            Delete Contact
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#5661B3] text-white rounded-md hover:bg-orange-600 transition"
            onClick={() => openModal("update")}
            disabled={isLoading}
          >
            Update Contact
          </button>
        </div>
      )}

      <ConfirmModal
        isOpen={showModal}
        title={modalType === "delete" ? "Delete Contact" : "Update Contact"}
        message={
          modalType === "delete"
            ? "Are you sure you want to delete this contact?"
            : "Are you sure you want to update this contact?"
        }
        onConfirm={modalType === "delete" ? handleDelete : handleUpdate}
        onCancel={() => setShowModal(false)}
        isLoading={isLoading}
      />
    </form>
  );
};

export default ContactForm;
