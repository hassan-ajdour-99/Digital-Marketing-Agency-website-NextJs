import React from "react";
import classes from "./Showcase1.module.css";

function Showcase1() {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}> Divi is For Everyone </h2>
      <div className={classes.cards}>
        <div className={classes.image}>image</div>
        <div className={classes.text}>
          Let's make building your Agency website as easy as possible. Welcome
          to my guide! After years of trial and error I can confidentially
          recommend you the following when it comes to building a Agency
          website. My name is Ralph de Groot. I'm the founder and author at My
          Codeless Website. Wake me up for a great web design. I love writing
          about website examples, too! PS: This is my #1 site builder and this
          is my #1 hosting.
        </div>
      </div>
    </div>
  );
}

export default Showcase1;
