import React, { useState } from "react";
import axios from "axios";
import "../styles/SearchBar.css";
import API_BASE_URL from "../utils/apiConfig";
const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(
            `${API_BASE_URL}/api/ads/search?term=${query}`
          );
          setResults(response.data);
        } catch (error) {
          console.error("Search failed", error);
        }
      };

    return (
        <div className="search-bar">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search ads..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    
                </button> 
            </form>
        </div>

    );

};

export default SearchBar;