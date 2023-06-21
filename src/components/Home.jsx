import React, { useState } from "react";
import "./Home.css";

function Home() {
  const formSubmitHandler = (e) => {
    // e.preventDefault();

    alert("Thanks for submitting");
  };

  return (
    <div className="home-content">
      <span className="home-left">
        <img
          src="https://cdn.wallpapersafari.com/1/92/U1jwXx.jpg"
          alt="homeimage"
          className="home-image"
        />
      </span>
      <span className="home-right">
        <h1>Handcrafted, home-made masterpieces</h1>
        <form>
          <br />
          <br />
          <br />
          <h3>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email.."
              className="form-email"
            />
            <br />
            <br />
            <h2>
              <button
                className="form-submit"
                type="submit"
                onClick={formSubmitHandler}
              >
                Submit
              </button>
            </h2>
          </h3>
        </form>
      </span>
    </div>
  );
}

export default Home;

// where to put the validation and how to handle validations when submitting the form
// how to set the viewport of the content so that it will not scroll
// shuld all the classnames must be unique in react? because it gets collapsed
