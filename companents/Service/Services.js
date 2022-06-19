import React from "react";
import Service from "./service";
import classes from "./services.module.css";
// import { services } from "../../data";

// const services = [
//   {
//     id: 1,
//     name: "design",
//     title: "design",
//     desc: "We Provide Amazing desings , Social media posters , and Logos to our Customers",
//     photo: "/images/003.png",
//   },
// ];

function Services(props) {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}> All Our Services </h2>
      <div className={classes.cards}>
        {props.services.map((service) => (
          <Service service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
