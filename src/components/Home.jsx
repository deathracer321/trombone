import React, { useState } from "react";
import "./Home.css";
import OwnAudio from "../assets/music.mp3";

function Home() {
  const formSubmitHandler = (e) => {
    // e.preventDefault();

    alert("Thanks for submitting");
  };

  return (
    <div className="home-content">
      <span className="home-left">
        <img
          src="https://i.gifer.com/7cFt.gif"
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
                onSubmit={formSubmitHandler}
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

// where to put the validation and how to handle validations when submitting the form - got it and use onsubmit instead of onclick
// how to set the viewport of the content so that it will not scroll
// shuld all the classnames must be unique in react? because it gets collapsed
// audio embed is working for the first time only - something related to preventDefult
//box-sizing: border-box
