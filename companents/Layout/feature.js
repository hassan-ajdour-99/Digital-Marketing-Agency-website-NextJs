import React from "react";
import Image from "next/image";
import classes from "./feature.module.css";

function Feature(props) {
  return (
    <div className={classes.showcase}>
      <div className={classes.container}>
        <div className={classes.card1}>
          <h2> {props.description} . </h2>
          <p>
            We offer Excellent service to your customers . The service ideas
            that will help you to reach your customers Online .
          </p>
          <button className={classes.btn}> contact </button>
        </div>
        <div className={classes.card2}>
          <Image src={props.image} alt="image" width="300" height="300" />
        </div>
      </div>
    </div>
  );
}

export default Feature;
