import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/" className="text-primary hover:text-secondary font-medium">Home</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/dashboard" className="text-primary hover:text-secondary font-medium">Dashboard</Link>
          </li>
        )}
        {!isAuthenticated ? (
          <li>
            <Link to="/login" className="text-primary hover:text-secondary font-medium">Login</Link>
          </li>
        ) : (
          <li>
            <button onClick={logout} className="text-primary hover:text-secondary font-medium">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;