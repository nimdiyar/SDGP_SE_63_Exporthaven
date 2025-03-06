import React, { useState } from "react";
import ExporterForm from "../components/ExporterForm";
import ManufacturerForm from "../components/ManufacturerForm";
import "../styles/Register.css";

const Register = () => {
  const [userType, setUserType] = useState("exporter");

  return (
    <div className="register-container">
      <h1>Create an Account</h1>
      <div className="user-type-selector">
        <label className="radio-label">
          <input
            type="radio"
            value="exporter"
            checked={userType === "exporter"}
            onChange={() => setUserType("exporter")}
          />
          Exporter
        </label>
        <label className="radio-label">
          <input
            type="radio"
            value="manufacturer"
            checked={userType === "manufacturer"}
            onChange={() => setUserType("manufacturer")}
          />
          Manufacturer
        </label>
      </div>
      {userType === "exporter" ? <ExporterForm /> : <ManufacturerForm />}
    </div>
  );
};

export default Register;
