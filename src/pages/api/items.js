import fs from "fs";
import path from "path";

const productsFilePath = path.join(process.cwd(), "data", "products.json");
const productsData = JSON.parse(fs.readFileSync(productsFilePath, "utf8"));

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { search, id, page = 1, limit = 5 } = req.query;

      console.log(req.query, "search");

      // Fetch a specific product by ID
      if (id) {
        const selectedProduct = productsData.products.find(
          (product) => product.id === parseInt(id)
        );

        if (selectedProduct) {
          return res.status(200).json(selectedProduct);
        } else {
          return res.status(404).json({ error: "Product not found" });
        }
      }

      // Filter products by category, title, and brand
      if (search) {
        const searchQueries = search.toLowerCase().split(" ");
        let filteredProducts = productsData.products.filter((product) => {
          // Check if any term is present in the title or brand
          const isInTitleOrBrand = searchQueries.every(
            (query) =>
              product.title.toLowerCase().includes(query) ||
              product.brand.toLowerCase().includes(query)
          );

          // Check if any term is present in the category
          const isInCategory = searchQueries.every((query) =>
            product.category.toLowerCase().includes(query)
          );

          return isInTitleOrBrand || isInCategory;
        });

        let filteredProductsWithFullPrice = filteredProducts.map((product) => ({
          ...product,
          fullPrice: calculateFullPrice(
            product.price,
            product.discountPercentage
          ),
        }));

        // Apply pagination
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedProducts = filteredProductsWithFullPrice.slice(
          startIndex,
          endIndex
        );

        res.status(200).json({
          paginatedProducts: paginatedProducts,
          productsQuantity: filteredProductsWithFullPrice.length,
        });
      } else {
        // Return all products if no search query provided

        // Calculate full price for all products if no search query provided
        let allProducts = productsData.products.map((product) => ({
          ...product,
          fullPrice: calculateFullPrice(
            product.price,
            product.discountPercentage
          ),
        }));

        // Apply pagination
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedProducts = allProducts.slice(startIndex, endIndex);

        res.status(200).json({
          paginatedProducts: paginatedProducts,
          productsQuantity: allProducts.length,
        });
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to calculate full price based on discounted price and discount percentage
function calculateFullPrice(discountedPrice, discountPercentage) {
  const fullPrice = discountedPrice / (1 - discountPercentage / 100);
  return Math.round(fullPrice * 100) / 100; // Round to 2 decimal places
}
