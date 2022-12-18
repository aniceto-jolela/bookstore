import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "../books/books";
import BooksId from "../books/book_id";
import Checkout from "../checkout/checkout";
import Layout from "../components/base-layout";
import Body from "../dashboard/body";
import Cart from "../users/cart";
import UserId from "../users/user_id";


const Routs = () => {
  return (
    <Layout
      Children={
        <>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:books_id" element={<BooksId />} />
            <Route path="/users/user_id" element={<UserId />} />
            <Route path="/users/user_id/cart" element={<Cart />} />
            <Route path="/checkout/user_id" element={<Checkout />} />
          </Routes>
        </>
      }
    />
  );
};

export default Routs;
