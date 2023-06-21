import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { UserContext } from "../App";
import AvailableProducts from "../assets/products.json";

function Products() {
  const user = useContext(UserContext);

  const [fetchedProducts, setFetchedProducts] = useState();

  useEffect(() => {
    setFetchedProducts(AvailableProducts);
  }, []);

  const addToCartHandler = (event) => {
    user.setSelectedID((prevArray) => [...prevArray, event.target.value]);
  };

  return (
    <div className="products-content">
      {/* {console.log(user.selectedId)} */}

      {fetchedProducts?.map((eachItem) => {
        return (
          <div className="flip-card" key={eachItem.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={eachItem.image}
                  alt={eachItem.name}
                  className="products-image"
                />
              </div>
              <div className="flip-card-back">
                <h1 className="products-name">{eachItem.name}</h1>
                <b className="products-cost">{eachItem.cost}</b>
                {/* <p className="products-desc">{eachItem.description}</p> */}
                <button
                  className="products-btn"
                  onClick={addToCartHandler}
                  value={eachItem.id}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;

// why atlest twice the useeffect is running?

// below is for postman server
// https://7ddbc444-961d-47c4-81ca-b9ddb00a846e.mock.pstmn.io
