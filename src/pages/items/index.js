"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Styles
import styles from "../../styles/components/SearchResultsPage.module.css";

// Internal Components
import {
  LoadingBars,
  NoProductsFound,
  Pagination,
  ProductCard,
} from "@/components";

const SearchResultsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { search } = router.query;
  const urlToFetch = `/api/items/${search ? `?search=${search}` : ""}`;

  async function fetchProducts() {
    try {
      const response = await fetch(urlToFetch);
      const products = await response.json();
      setProducts(products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      fetchProducts();
    }
  }, [router.isReady, search]);

  useEffect(() => {
    // Calculate total pages based on the total number of products and page size
    setTotalPages(Math.ceil(products.length / PAGE_SIZE));
  }, [products]);

  const handlePageChange = (page) => {
    // Update the current page
    setCurrentPage(page);
  };

  const PAGE_SIZE = 10;

  // Calculate the index range of products to display based on current page and page size
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, products.length);
  const paginatedProducts = products.slice(startIndex, endIndex);

  return products.length > 0 && !isLoading ? (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Search Results: {search ? search : "All"}
        </h1>
      </div>
      <div className={styles.productsWrapper}>
        {paginatedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  ) : isLoading ? (
    <LoadingBars />
  ) : (
    <NoProductsFound />
  );
};

export default SearchResultsPage;
