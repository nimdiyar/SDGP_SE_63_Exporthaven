import React, { useState } from "react";
import ExporterForm from "../components/ExporterForm";
import ManufacturerForm from "../components/ManufacturerForm";

const Register = () => {
  const [userType, setUserType] = useState("exporter");

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-text text-center">Create an Account</h1>
        <div className="mt-8 bg-white shadow-md rounded-lg p-8">
          <div className="mb-8">
            <label className="text-lg font-medium text-text block mb-4">I am registering as a:</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="exporter"
                  checked={userType === "exporter"}
                  onChange={() => setUserType("exporter")}
                  className="h-5 w-5 text-primary focus:ring-primary"
                />
                <span className="text-text">Exporter</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="manufacturer"
                  checked={userType === "manufacturer"}
                  onChange={() => setUserType("manufacturer")}
                  className="h-5 w-5 text-primary focus:ring-primary"
                />
                <span className="text-text">Manufacturer</span>
              </label>
            </div>
          </div>
          {userType === "exporter" ? <ExporterForm /> : <ManufacturerForm />}
        </div>
      </div>
    </div>
  );
};

export default Register;