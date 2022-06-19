import React from "react";
import Image from "next/image";
import classes from "./showcase.module.css";

function Showcase() {
  return (
    <div className={classes.container}>
      <div className={classes.projects}>
        <div className={classes.card}>
          <Image
            src="/images/promote/server2.png"
            width="200"
            height="200"
            alt=""
          />
          <h1> Clients </h1>
          <h3> (25 Clients) </h3>
          <p>
            Welcome to the best platform for building applications of all types
            with modern architecture and scaling .
          </p>
        </div>
        <div className={classes.card}>
          <Image
            src="/images/promote/server.png"
            width="200"
            height="200"
            alt=""
          />
          <h1> Projects </h1>
          <h3> (79 project) </h3>
          <p>
            Welcome to the best platform for building applications of all types
            with modern architecture and scaling .
          </p>
        </div>
        <div className={classes.card}>
          <Image
            src="/images/promote/cloud.png"
            width="200"
            height="200"
            alt=""
          />
          <h1> Teams </h1>
          <h3> (5 players) </h3>
          <p>
            Welcome to the best platform for building applications of all types
            with modern architecture and scaling .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
