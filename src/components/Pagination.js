"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Fontawesome
import {
  faChevronLeft as arrowLeft,
  faChevronRight as arrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/components/Pagination.module.css";

// Internal Components
import Button from "./Button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    // Scroll to the top of the page whenever currentPage changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <Button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        size="circle"
        type="secondary"
      >
        <FontAwesomeIcon icon={arrowLeft} />
      </Button>
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <Button
              onClick={() => onPageChange(number)}
              size="circle"
              type={currentPage === number ? "primary" : "secondary"}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        size="circle"
        type="secondary"
      >
        <FontAwesomeIcon icon={arrowRight} />
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
