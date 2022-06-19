import React from "react";
import classes from "./Prices.module.css";

function Prices() {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}> Pricing </h2>
      <div className={classes.cards}>
        <div className={classes.card}>
          <h1 className={classes.title}> Average </h1>
          <h3 className={classes.price}> 999 DH </h3>
          <p> Order your website </p>
          <p> Order your website </p>
          <p> Order your website </p>
          <p> Order your website </p>
          <button className={classes.button}> Get Started </button>
        </div>
        <div className={classes.card}>
          <h1 className={classes.title}> Standard </h1>
          <h3 className={classes.price}> 1999 DH </h3>
          <p> Order your website </p>
          <p> Order your website </p>
          <p> Order your website </p>
          <p> Order your website </p>
          <button className={classes.button}> Get Started </button>
        </div>
        <div className={classes.card}>
          <h1 className={classes.title}> Premiums </h1>
          <h3 className={classes.price}> 3999 DH </h3>
          <p> Order your website </p>
          <p> Order your website </p>
          <p> Order your website </p>
          <p> Order your website </p>
          <button className={classes.button}> Get Started </button>
        </div>
      </div>
    </div>
  );
}

export default Prices;
