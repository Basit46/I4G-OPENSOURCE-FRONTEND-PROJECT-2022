import React from "react";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-red-600">
                    Hello world!
                  </h1>
                  <p>/wishlist (view products in wishlist)</p>
                  <p>/add-to-wishlist (add products to wishlist)</p>
                </div>
              }
              exact
            ></Route>
            <Route path="/wishlist" element={<WishlistViewProducts />}></Route>
            <Route
              path="/add-to-wishlist"
              element={<EmptyWishlistViewProducts />}
            ></Route>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
