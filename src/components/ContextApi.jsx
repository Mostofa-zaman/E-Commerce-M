import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// Create Context
const ApiData = createContext();

const ContextApi = ({ children }) => {
  const [info, setInfo] = useState([]);

  // Fetch Data
  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setInfo(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiData.Provider value={info}>
      {children}
    </ApiData.Provider>
  );
};

export { ContextApi, ApiData };
