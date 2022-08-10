import React, { useEffect } from "react";
import Link from "next/link";
import classes from "./Prices.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { prices } from "../../data";

function Prices(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>
        Pricing <span className={classes.span}> Plans</span>
      </h2>
      <div className={classes.cards}>
        {props.prices.map((price) => (
          <div key={price.id} className={classes.card} data-aos="fade-left">
            <h1 className={classes.title}> {price.type} </h1>
            <h3 className={classes.price}> {price.price} DH </h3>
            {price.characters.map((item) => (
              <p key={item.id} className={classes.characters}>
                <span className={classes.span}>
                  <i class="fas fa-check"></i>
                </span>
                {item.name}
              </p>
            ))}
            <Link passHref href="/contact">
              <button className={classes.button}> Get Started </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prices;
