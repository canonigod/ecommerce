import React from "react";

// Styles
import styles from "../styles/components/NoProductsFound.module.css";
import Image from "next/image";

const NoProductsFound = () => {
  return (
    <div className={styles.page_404}>
      <h1 className="text-center "><i>Boo-hoo!</i></h1>
      <Image
        src="https://cdn.dribbble.com/users/9149409/screenshots/17499670/media/0b857fc7b7baa9919f790a6038a77464.gif"
        alt="No product found ghost gif"
        width={400}
        height={300}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className={styles.copyText}>
        <h3>No Products Found &#58;&#40;</h3>
        <p>The product you're looking for couldn't be found.</p>
      </div>
    </div>
  );
};

export default NoProductsFound;
