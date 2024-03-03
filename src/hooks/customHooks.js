"use client";
import { useState, useEffect } from "react";

export const useFormatNumberWithCommas = (number) => {
  // Convert number to string and split into integer and decimal parts
  const [integerPart, decimalPart] = Number(number).toFixed(2).split(".");

  // Add commas to integer part
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  // Combine integer part with decimal part
  const formattedNumber = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;

  // Return formatted number
  return formattedNumber;
};

export const useScreenSize = () => {
  const MOBILE_MAX_WIDTH = 767; // Max width for mobile devices
  const TABLET_MAX_WIDTH = 991; // Max width for tablet devices

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsMobile(innerWidth <= MOBILE_MAX_WIDTH);
      setIsTablet(
        innerWidth > MOBILE_MAX_WIDTH && innerWidth <= TABLET_MAX_WIDTH
      );
    };

    // Initial call to set initial screen size
    handleResize();

    // Event listener to update screen size on window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet };
};
