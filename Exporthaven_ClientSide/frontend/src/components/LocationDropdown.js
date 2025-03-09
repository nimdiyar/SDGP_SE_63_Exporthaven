// src/components/LocationDropdown.js
import React from "react";
import PropTypes from "prop-types";


const LocationDropdown = ({
    value,
    onChange,
    placeholder = "Select location",
  }) => {
    return( 
         <select value={value}
    onChange={(e) => onChange(e.target.value)}
>
        <option value="">{placeholder}</option>
    </select>
    );
  };
  
  export default LocationDropdown;
  