import React, { useEffect } from "react";
import Service from "./service";
import classes from "./services.module.css";

function Services(props) {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>
        Our <span className={classes.span}> Services </span>
      </h2>
      <div className={classes.cards}>
        {props.services.map((service) => (
          <Service service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
