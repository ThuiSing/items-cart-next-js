import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from "./ProductSlices";

export const store = configureStore({
  reducer: {
    product: ProductSlices,
  },
});
