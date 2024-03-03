"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Internal Components
import {
  LoadingBars,
  ProductDetailImages,
  ProductDetailInfo,
} from "@/components";

// Styles
import styles from "../../styles/components/ProductDetailPage.module.css";
import Link from "next/link";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  // Fetch and display product details based on the 'id' parameter
  async function fetchProduct() {
    try {
      const response = await fetch(`/api/items/?id=${id}`);
      const productJson = await response.json();
      setProduct(productJson);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error, "error", typeof id, parseInt(id));
      console.error("Error fetching product");
    }
  }

  useEffect(() => {
    if (router.isReady) {
      fetchProduct();
    }
  }, [router.isReady, fetchProduct]);

  return !isLoading ? (
    <div>
      <div className={styles.breadcrumbs}>
        <Link
          href={`/items/?search=${product.category}`}
          as={`/items/?search=${product.category}`}
          className={styles.breadcrumbClickable}
        >
          {product.category} /{" "}
        </Link>
        <Link
          href={`/items/?search=${product.brand}`}
          as={`/items/?search=${product.brand}`}
          className={styles.breadcrumbClickable}
        >
          {product.brand} /{" "}
        </Link>
        <span>
          <b>{product.title} </b>
        </span>
      </div>

      <div className={styles.productInfoWrapper}>
        <ProductDetailImages images={product.images} />
        <ProductDetailInfo product={product} />
      </div>
    </div>
  ) : (
    <LoadingBars />
  );
};

export default ProductDetailPage;
