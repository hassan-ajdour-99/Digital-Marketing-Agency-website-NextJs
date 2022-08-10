import React, { useEffect } from "react";
import Image from "next/image";
import classes from "./showcase.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Showcase() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>
        Our Working <span className={classes.span}> Process</span>
      </h2>
      <div className={classes.projects}>
        <div className={classes.card} data-aos="fade-up">
          <Image
            src="/images/promote/server.png"
            width="200"
            height="200"
            alt=""
          />
          <h1> Building </h1>
        </div>
        <div className={classes.card} data-aos="fade-left">
          <Image
            src="/images/promote/server2.png"
            width="200"
            height="200"
            alt=""
          />
          <h1> Connecting </h1>
        </div>
        <div className={classes.card} data-aos="fade-right">
          <Image
            src="/images/promote/cloud.png"
            width="200"
            height="200"
            alt=""
          />
          <h1> Hosting </h1>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
