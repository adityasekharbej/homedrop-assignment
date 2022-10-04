import React from "react";
import "./mainrec.css";
import { Sidebar } from "../sidebar/Sidebar";
import { ProductDiv } from "../ProductSide/ProductDiv";

export const MainRect = () => {
  return (
    <div className="container">
      <Sidebar />
      <ProductDiv />
    </div>
  );
};
