import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import AvailableProducts from "../assets/products.json";
import { UserContext } from "../App";

function Cart() {
  const { selectedId, setSelectedID } = useContext(UserContext);
  const [sumCheckout, setSumCheckout] = useState(0);
  const [fetchedProductsInCart, setFetchedProductsInCart] = useState();

  useEffect(() => {
    setFetchedProductsInCart(AvailableProducts);
  }, []);

  useEffect(() => {
    var total = 0;
    selectedId?.map((itemInSelectedId, ind) => {
      return fetchedProductsInCart?.map((itemInFetchedProductsInCart) => {
        if (itemInFetchedProductsInCart.id == itemInSelectedId) {
          total += itemInFetchedProductsInCart.cost;
          setSumCheckout(total);
        }
      });
    });
  }, [selectedId, sumCheckout, fetchedProductsInCart]);

  const removeFromCartHandler = (event) => {
    var newArr = selectedId;
    var neededDeletionIndex = newArr.indexOf("2");
    newArr.splice(neededDeletionIndex, 1);

    setSelectedID([...newArr]);
  };

  const productsContentReturn = (event) => {};

  return (
    <>
      <div className="cart-content">
        <div className="cart-fallback">
          {selectedId.length > 0 ? (
            <>
              <h1>Items In Your Cart : </h1>
              <br></br>
            </>
          ) : (
            <h2>
              Please add Items to your cart! <br></br>
            </h2>
          )}
        </div>
        <div className="products-content">
          {selectedId?.map((itemInSelectedId, ind) => {
            return fetchedProductsInCart?.map((itemInFetchedProductsInCart) => {
              if (itemInFetchedProductsInCart.id == itemInSelectedId) {
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
        <div className="cart-total">
          {selectedId.length > 0 ? (
            <>
              <h1>Proceed to Checkout : </h1>
              <br></br>
              <h2>Total Sum : Rs.{sumCheckout}</h2>
            </>
          ) : (
            <br></br>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
