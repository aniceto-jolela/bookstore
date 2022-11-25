import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "../books/books";
import Checkout from "../checkout/checkout";
import Layout from "../components/base-layout";
import Body from "../dashboard/body";
import Users from "../users/users";

const Routs = () => (
  <Layout
    Children={
      <>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </>
    }
  />
);

export default Routs;
