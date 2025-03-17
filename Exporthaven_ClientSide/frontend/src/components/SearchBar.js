import React, { useState } from "react";
import "../styles/SearchBar.css";
const SearchBar = () => {
    const [query, setQuery] = useState("");
    return (
        <div className="search-bar">
            <form className="search-form">
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