import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {
  FaCogs,
  FaBuilding,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaCalendarAlt,
  FaIdBadge,
  FaFileInvoice,
  FaTruckLoading,
} from "react-icons/fa";
import API_BASE_URL from "../utils/apiConfig";
import "../styles/Register.css";

const initialState = {
  companyName: "",
  contactPerson: "",
  email: "",
  password: "",
  phone: "",
  businessAddress: { street: "", city: "", province: "", postalCode: "" },
  website: "",
  manufacturerType: "",
  establishmentDate: "",
  businessRegNumber: "",
  tin: "",
  productionCapacity: "",
  mainProducts: "",
  certifications: "",
};

const ManufacturerForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {};
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
    setErrors({});
    if (
      !formData.companyName ||
      !formData.contactPerson ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.businessAddress.street ||
      !formData.productionCapacity
    ) {
      toast.error("All required fields must be filled.");
      return;
    }
    try {
      await axios.post(`${API_BASE_URL}/api/auth/register`, {
        ...formData,
        role: "manufacturer",
      });
      toast.success("Manufacturer registered successfully!");
      setFormData(initialState);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        Object.entries(validationErrors).forEach(([field, errorMsg]) => {
          toast.error(`${field}: ${errorMsg}`);
        });
        setErrors(validationErrors);
      } else {
        toast.error(error.response?.data?.message || "Registration failed.");
      }
    }
  };

  return (
    <>
      <form className="card" onSubmit={handleSubmit} noValidate>
        <h2>Manufacturer Registration</h2>
        <div className="form-group">
          <label htmlFor="companyName">
            <FaBuilding className="icon" /> Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.companyName && (
            <span className="error">{errors.companyName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="contactPerson">
            <FaUser className="icon" /> Contact Person
          </label>
          <input
            id="contactPerson"
            name="contactPerson"
            placeholder="Enter contact person name"
            value={formData.contactPerson}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.contactPerson && (
            <span className="error">{errors.contactPerson}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope className="icon" /> Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FaCogs className="icon" /> Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            <FaPhone className="icon" /> Phone
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <h3>Business Address</h3>
        <div className="form-group">
          <label htmlFor="street">
            <FaMapMarkerAlt className="icon" /> Street
          </label>
          <input
            id="street"
            name="street"
            placeholder="Enter street address"
            value={formData.businessAddress.street}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.businessAddress && (
            <span className="error">{errors.businessAddress}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="city">
            <FaMapMarkerAlt className="icon" /> City
          </label>
          <input
            id="city"
            name="city"
            placeholder="Enter city"
            value={formData.businessAddress.city}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="province">
            <FaMapMarkerAlt className="icon" /> Province
          </label>
          <input
            id="province"
            name="province"
            placeholder="Enter province"
            value={formData.businessAddress.province}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.province && <span className="error">{errors.province}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">
            <FaMapMarkerAlt className="icon" /> Postal Code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            placeholder="Enter postal code"
            value={formData.businessAddress.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.postalCode && (
            <span className="error">{errors.postalCode}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="website">
            <FaGlobe className="icon" /> Website <span className="optional">(Optional)</span>
          </label>
          <input
            id="website"
            name="website"
            placeholder="Enter website URL"
            value={formData.website}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="manufacturerType">
            <FaBuilding className="icon" /> Manufacturer Type
          </label>
          <input
            id="manufacturerType"
            name="manufacturerType"
            placeholder="Enter manufacturer type"
            value={formData.manufacturerType}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.manufacturerType && (
            <span className="error">{errors.manufacturerType}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="establishmentDate">
            <FaCalendarAlt className="icon" /> Establishment Date
          </label>
          <input
            id="establishmentDate"
            name="establishmentDate"
            type="date"
            value={formData.establishmentDate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.establishmentDate && (
            <span className="error">{errors.establishmentDate}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="businessRegNumber">
            <FaIdBadge className="icon" /> Business Reg. Number
          </label>
          <input
            id="businessRegNumber"
            name="businessRegNumber"
            placeholder="Enter registration number"
            value={formData.businessRegNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.businessRegNumber && (
            <span className="error">{errors.businessRegNumber}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="tin">
            <FaFileInvoice className="icon" /> Tax Identification Number (TIN)
          </label>
          <input
            id="tin"
            name="tin"
            placeholder="Enter TIN"
            value={formData.tin}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.tin && <span className="error">{errors.tin}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="productionCapacity">
            <FaCogs className="icon" /> Production Capacity
          </label>
          <input
            id="productionCapacity"
            name="productionCapacity"
            placeholder="Enter production capacity"
            value={formData.productionCapacity}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.productionCapacity && (
            <span className="error">{errors.productionCapacity}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exportLicense">
            <FaTruckLoading className="icon" /> Export License
          </label>
          <input
            id="exportLicense"
            name="exportLicense"
            placeholder="Enter export license"
            value={formData.exportLicense}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.exportLicense && (
            <span className="error">{errors.exportLicense}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exportMarkets">
            <FaGlobe className="icon" /> Export Markets
          </label>
          <input
            id="exportMarkets"
            name="exportMarkets"
            placeholder="Enter export markets (comma separated)"
            value={formData.exportMarkets}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="products">
            <FaBuilding className="icon" /> Products
          </label>
          <input
            id="products"
            name="products"
            placeholder="Enter products (comma separated)"
            value={formData.products}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingMethods">
            <FaTruckLoading className="icon" /> Shipping Methods
          </label>
          <input
            id="shippingMethods"
            name="shippingMethods"
            placeholder="Enter shipping methods (comma separated)"
            value={formData.shippingMethods}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="certifications">
            <FaTruckLoading className="icon" /> Certifications
          </label>
          <input
            id="certifications"
            name="certifications"
            placeholder="Enter certifications (comma separated)"
            value={formData.certifications}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ManufacturerForm;
