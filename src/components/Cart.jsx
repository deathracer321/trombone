import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import AvailableProducts from "../assets/products.json";
import { UserContext } from "../App";

function Cart() {
  const { selectedId, setSelectedID } = useContext(UserContext);

  const [fetchedProductsInCart, setFetchedProductsInCart] = useState();

  useEffect(() => {
    setFetchedProductsInCart(AvailableProducts);
  }, []);

  const removeFromCartHandler = (event) => {
    // console.log(event.target.value);
    var newArr = selectedId;
    var neededDeletionIndex = newArr.indexOf("2");
    newArr.splice(neededDeletionIndex, 1);
    console.log(newArr);
    setSelectedID([...newArr]);
  };

  return (
    <div className="cart-content">
      {selectedId?.map((itemInSelectedId, ind) => {
        return fetchedProductsInCart?.map((itemInFetchedProductsInCart) => {
          if (itemInFetchedProductsInCart.id == itemInSelectedId) {
            console.log(itemInFetchedProductsInCart.id);
            return (
              <div className="flip-card" key={ind}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={itemInFetchedProductsInCart.image}
                      alt={itemInFetchedProductsInCart.name}
                      className="products-image"
                    />
                  </div>
                  <div className="flip-card-back">
                    <h1 className="products-name">
                      {itemInFetchedProductsInCart.name}
                    </h1>
                    <b className="products-cost">
                      {itemInFetchedProductsInCart.cost}
                    </b>
                    {/* <p className="products-desc">{eachItem.description}</p> */}
                    <button
                      className="products-btn"
                      onClick={removeFromCartHandler}
                      value={itemInSelectedId}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        });
      })}
    </div>
  );
}

export default Cart;
