import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);

  const value = {
    products,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
