import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import AvailableProducts from "../assets/products.json";
import { UserContext } from "../App";

function Cart() {
  const { selectedId, setSelectedId } = useContext(UserContext);

  const [fetchedProductsInCart, setFetchedProductsInCart] = useState();

  useEffect(() => {
    setFetchedProductsInCart(AvailableProducts);
  }, []);

  return (
    <div className="products-content">
      {selectedId?.map((itemInSelectedId) => {
        return fetchedProductsInCart?.map((itemInFetchedProductsInCart) => {
          if (itemInFetchedProductsInCart.id == itemInSelectedId) {
            console.log(itemInFetchedProductsInCart.id);
            return <h1>{itemInFetchedProductsInCart.name}</h1>;
          }
        });
      })}
    </div>
  );
}

export default Cart;
