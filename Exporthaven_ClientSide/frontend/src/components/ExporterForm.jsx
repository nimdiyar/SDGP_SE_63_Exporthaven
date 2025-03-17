// frontend\src\components\ExporterForm.jsx
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaBuilding, FaUser, FaEnvelope, FaLock, FaPhone, FaGlobe, FaMapMarkerAlt, FaCertificate, FaTruck, FaBox } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../utils/apiConfig";

const ExporterForm = () => {
  const [formData, setFormData] = useState({
    role: "exporter",
    companyName: "",
    contactPerson: "",
    email: "",
    password: "",
    phone: "",
    businessAddress: { street: "", city: "", province: "", postalCode: "" },
    website: "",
    exportType: "",
    establishmentDate: "",
    businessRegNumber: "",
    tin: "",
    exportLicense: "",
    exportMarkets: "",
    products: "",
    shippingMethods: "",
    certifications: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["street", "city", "province", "postalCode"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        businessAddress: { ...prev.businessAddress, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/auth/register`, formData);
      toast.success(data.message || "Registration successful!");
      setFormData({
        role: "exporter",
        companyName: "",
        contactPerson: "",
        email: "",
        password: "",
        phone: "",
        businessAddress: { street: "", city: "", province: "", postalCode: "" },
        website: "",
        exportType: "",
        establishmentDate: "",
        businessRegNumber: "",
        tin: "",
        exportLicense: "",
        exportMarkets: "",
        products: "",
        shippingMethods: "",
        certifications: "",
      });
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <form className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-10" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-text border-b border-border pb-3">
          EXPORTER REGISTRATION
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaBuilding className="mr-2 text-[#3c6e71]" /> Company Name
            </label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaUser className="mr-2 text-[#3c6e71]" /> Contact Person
            </label>
            <input
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Enter contact person"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaEnvelope className="mr-2 text-[#3c6e71]" /> Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaLock className="mr-2 text-[#3c6e71]" /> Password
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaPhone className="mr-2 text-[#3c6e71]" /> Phone
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaGlobe className="mr-2 text-[#3c6e71]" /> Website
            </label>
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter website"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-4 text-[#353535] border-b border-[#d9d9d9] pb-2">
          Business Address
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaMapMarkerAlt className="mr-2 text-[#3c6e71]" /> Street
            </label>
            <input
              name="street"
              value={formData.businessAddress.street}
              onChange={handleChange}
              placeholder="Enter street"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaMapMarkerAlt className="mr-2 text-[#3c6e71]" /> City
            </label>
            <input
              name="city"
              value={formData.businessAddress.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaBox className="mr-2 text-[#3c6e71]" /> Export Type
            </label>
            <input
              name="exportType"
              value={formData.exportType}
              onChange={handleChange}
              placeholder="Enter export type"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaCertificate className="mr-2 text-[#3c6e71]" /> Certifications
            </label>
            <input
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              placeholder="Enter certifications"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#353535] mb-1 font-medium">
              <FaTruck className="mr-2 text-[#3c6e71]" /> Shipping Methods
            </label>
            <input
              name="shippingMethods"
              value={formData.shippingMethods}
              onChange={handleChange}
              placeholder="Enter shipping methods"
              className="w-full px-3 py-2 border border-[#d9d9d9] rounded-md"
            />
          </div>
        </div>
        <button className="w-full bg-[#3c6e71] text-white py-3 px-4 rounded-md mt-6" type="submit">
          Register
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ExporterForm;