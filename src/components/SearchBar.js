"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

// Fontawesome
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/SearchBar.module.css";
import Button from "./Button";

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
      router.push(`/items?search=${encodeURIComponent(query.trim())}&page=1`);

      // Reset query after search
      setQuery("");
    }
  };

  return (
    <form
      className={`${styles.searchBar} ${isFocused ? styles.focused : ""}`}
      onSubmit={handleSubmit}
    >
      <Button arialLabel="search button" type="ghost" autoWidth>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
      <input
        aria-label="input to search for products"
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
