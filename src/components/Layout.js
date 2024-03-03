"use client";
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Context
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

// Internal Components
import {
  Banner,
  BottomMobileMenu,
  MobileMenu,
  Footer,
  Navbar,
  ShoppingCart,
} from "@/components";

// Custom hooks
import { useScreenSize } from "@/hooks/customHooks";

const Layout = ({ children }) => {
  const router = useRouter();
  const pageTitle = getPageTitle(router.pathname, router.query);
  const { isMobile, isTablet } = useScreenSize();

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ShoppingCartProvider>
        {/* Shopping Cart */}
        <ShoppingCart />
        {/* Offer Banner */}
        <Banner
          backgroundColor="blue"
          boldText="Act Fast!"
          text="Save up to 50% on Summer Sale deals. Explore Sale"
        />
        {/* Navbar and Mobile Navbar */}
        {isMobile || isTablet ? <MobileMenu /> : <Navbar />}
        {/* Content */}
        {children}
        {/* Mobile menu if screen size is mobile and tablet sizes */}
        {(isMobile || isTablet) && <BottomMobileMenu />}
        <Footer />
      </ShoppingCartProvider>
    </React.Fragment>
  );
};

const getPageTitle = (pathname, query) => {
  // Convert pathname to a meaningful page title
  switch (pathname) {
    case "/":
      return "Home - Decathlon | Online Store";
    case "/items":
      return `${
        query.search ? query.search : "Browse All"
      } - Decathlon | Online Store`;
    case "/items/[id]":
      return `${query.product ? query.product : 'Product Details'} - Decathlon | Online Store`;
    default:
      return "Decathlon | Online Store";
  }
};

export default Layout;
