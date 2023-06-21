import React from "react";
import "./Features.css";
import premium from "../assets/premium.png";
import quality from "../assets/quality.png";
import fast from "../assets/fast.png";

function Features() {
  return (
    <div className="features-content">
      <img
        src={premium}
        alt="premium features"
        className="grid-item grid-item-icon"
      />
      <h3 className="grid-item grid-heading">Premium Materials</h3>
      <p className="grid-item grid-desc">
        Our trombones use the shiniest brass which is sourced locally. This will
        increase the longevity of your purchase.
      </p>
      <img
        src={fast}
        alt="premium features"
        className="grid-item grid-item-icon"
      />
      <h3 className="grid-item grid-heading">Fast Shipping</h3>
      <p className="grid-item grid-desc">
        We make sure you recieve your trombone as soon as we have finished
        making it.
      </p>
      <img
        src={quality}
        alt="premium features"
        className="grid-item grid-item-icon"
      />
      <h3 className="grid-item grid-heading">Quality Assurance</h3>
      <p className="grid-item grid-desc">
        For every purchase you make, we will ensure there are no damages or
        faults and we will check and test. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quo ducimus ad error nemo molestiae fuga
        optio dolorum distinctio veniam ab. Ut, corporis. Laboriosam neque
        beatae rem, tempora dolorum officia sed?
      </p>
    </div>
  );
}

export default Features;

//if i increase the content size then it seems like everything is getting collapsed
//also for border it is not working as expected
//to use internal assets like images, should we have to import and then use it
// figma?
