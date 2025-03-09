// src/components/LocationDropdown.js
import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDropdown.css";

const LocationDropdown = ({
    value,
    onChange,
    placeholder = "Select location",
  }) => {
    return( 
         <select value={value}
    onChange={(e) => onChange(e.target.value)}
    className="location-dropdown"
>
        <option value="">{placeholder}</option>
        <option value="Kandy">Kandy</option>
      <option value="Matale">Matale</option>
      <option value="Nuwara Eliya">Nuwara Eliya</option>
      <option value="Ampara">Ampara</option>
      <option value="Batticaloa">Batticaloa</option>
      <option value="Trincomalee">Trincomalee</option>
      <option value="Anuradhapura">Anuradhapura</option>
      <option value="Polonnaruwa">Polonnaruwa</option>
      <option value="Jaffna">Jaffna</option>
      <option value="Kilinochchi">Kilinochchi</option>
      <option value="Mannar">Mannar</option>
      <option value="Mullaitivu">Mullaitivu</option>
      <option value="Vavuniya">Vavuniya</option>
      <option value="Kurunegala">Kurunegala</option>
      <option value="Puttalam">Puttalam</option>
      <option value="Kegalle">Kegalle</option>
      <option value="Ratnapura">Ratnapura</option>
      <option value="Galle">Galle</option>
      <option value="Hambantota">Hambantota</option>
      <option value="Matara">Matara</option>
      <option value="Badulla">Badulla</option>
      <option value="Moneragala">Moneragala</option>
      <option value="Colombo">Colombo</option>
      <option value="Gampaha">Gampaha</option>
      <option value="Kalutara">Kalutara</option>
    </select>
    );
  };
  
  export default LocationDropdown;
  