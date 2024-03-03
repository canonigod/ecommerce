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
  // Router helpers
  const router = useRouter();
  const { search } = router.query;

  // State
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Variables
  const PAGE_SIZE = 5;
  let URLtoFetch = "/api/items/";

  useEffect(() => {
    if (router.isReady) {
      const storedPage = sessionStorage.getItem("currentPage");
      const initialPage = storedPage ? parseInt(storedPage) : 1;
      setCurrentPage(initialPage);
      fetchProducts(initialPage);
    }
  }, [router.isReady, search, currentPage]);

  useEffect(() => {
    // Calculate total pages based on the total number of products and page size
    setTotalPages(Math.ceil(totalPages / PAGE_SIZE));
  }, [products]);

  // Fetch products from API
  const fetchProducts = async (page) => {
    setIsLoading(true);

    if (search) URLtoFetch += `?search=${search}`;
    if (page) URLtoFetch += `${!search ? `?page=${page}` : `&page=${page}`}`;

    try {
      const response = await fetch(URLtoFetch);
      const data = await response.json();

      setProducts(data.paginatedProducts);
      setTotalPages(data.productsQuantity);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching products:", error);
    }
  };

  // Update the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/items/?page=${page}`, undefined, { shallow: true });
    sessionStorage.setItem("currentPage", page); // Store current page in session storage
  };

  return products?.length > 0 && !isLoading ? (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Search Results: {search ? search : "All"}
        </h1>
      </div>
      <div className={styles.productsWrapper}>
        {products.map((product, index) => (
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
