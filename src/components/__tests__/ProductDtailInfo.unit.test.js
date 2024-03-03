import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { ProductDetailInfo } from "@/components";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";

describe("ProductDetailInfo component", () => {
  const product = {
    id: "1",
    title: "Product Title",
    description: "Product Description",
    rating: 4,
    price: 100,
    stock: 25,
  };

  test("renders product details correctly", () => {
    render(
      <ShoppingCartProvider>
        <ProductDetailInfo product={product} />{" "}
      </ShoppingCartProvider>
    );

    // Check if product title and description are rendered
    expect(screen.getByText("Product Title")).toBeInTheDocument();
    expect(screen.getByText("Product Description")).toBeInTheDocument();

    // Check if product price is rendered correctly
    expect(screen.getByText(/100/i)).toBeInTheDocument();

    // Check if stock message is rendered based on stock
    expect(screen.getByText(/25 items/i)).toBeInTheDocument();
  });

  test("calls addToCart when Add to Cart button is clicked", async () => {
    const addToCartMock = jest.fn();
    const toggleShoppingCartMock = jest.fn();

    render(
      <ShoppingCartProvider>
        <ProductDetailInfo product={product} />
      </ShoppingCartProvider>
    );

    // Click the Add to Cart button
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });

    await userEvent.click(addToCartButton);

    waitFor(() => {
      // Check if addToCart function is called with the correct product
      expect(addToCartMock).toHaveBeenCalledWith(product);

      // Check if toggleShoppingCart function is called
      expect(toggleShoppingCartMock).toHaveBeenCalled(1);
    });
  });

  test("does not display QuantityInput when product stock is 0", () => {
    const zeroStockProduct = {
      ...product,
      stock: 0,
    };

    render(
      <ShoppingCartProvider>
        <ProductDetailInfo product={zeroStockProduct} />
      </ShoppingCartProvider>
    );

    // Check if QuantityInput is not rendered when product stock is 0
    expect(screen.queryByTestId("quantity-input")).not.toBeInTheDocument();
  });

  test("renders Buy Now button", async () => {
    render(
      <ShoppingCartProvider>
        <ProductDetailInfo product={product} />
      </ShoppingCartProvider>
    );

    // Check if Buy Now button is rendered
    expect(screen.getByRole("button", { name: "Buy Now" })).toBeInTheDocument();
  });

  test("updates quantity when QuantityInput is changed", async () => {
    render(
      <ShoppingCartProvider>
        <ProductDetailInfo product={product} />
      </ShoppingCartProvider>
    );

    // Increase the quantity using QuantityInput
    const input = screen.getByRole("spinbutton");
    const quantityInput = screen.getByRole("button", {
      name: /Increase quantity/i,
    });

    await userEvent.click(quantityInput);

    // Check if quantity has increased
    expect(input.value).toBe("2");
  });
});
