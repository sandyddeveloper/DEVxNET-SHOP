import CartPage from "@/components/CartComponent";
import React from "react";
import "../app/globals.css";
import Header from "@/components/layout/Header";

const cart = () => {
  return (
    <>
      <Header />
      <div className="py-40">
        <CartPage />
      </div>
    </>
  );
};

export default cart;
