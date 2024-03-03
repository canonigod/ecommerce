"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

// Fontawesome
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/SearchBar.module.css";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Focus accessibility
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Sets the url to call the api
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      router.push(`/items?search=${encodeURIComponent(query.trim())}`);
      
      // Reset query after search
      setQuery("");
    }
  };

  return (
    <form
      className={`${styles.searchBar} ${isFocused ? styles.focused : ""}`}
      onSubmit={handleSubmit}
    >
      <button className={styles.searchIcon} type="submit" disabled={!query}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        className={styles.inputText}
        type="text"
        name="product-search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </form>
  );
};

export default SearchBar;