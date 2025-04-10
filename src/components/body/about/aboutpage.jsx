import React from "react";
import "../../css/aboutpage.css";

function AboutPage() {
  return (
    <div className="about">
      <div className="aboutcontent">
        <h4>About</h4>
        <p>
          Ever wanted to find or cook different foods from around the world
          while staying in the comfort of your own home?{" "}
        </p>
        <p>
          While you're in the right place, this website allows you to discover
          new meals you may not have heard of from around the world.
        </p>
        <p>
          When you find a dish that interests you click on it and get a bunch of
          info on your selected dish, such as detailed cooking instructions and
          list of ingredients. High Definition photos and videos will also aid
          you while you cook.
        </p>
        <p>
          If there is an Ingredient that you like feel free to click on it and
          you will get a list of other recipes that also use that specified
          ingredient.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
