import React, { useEffect } from "react";
import Image from "next/image";
import classes from "./Showcase1.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Showcase1() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container} data-aos="fade-down">
      <h2 className={classes.header}> Forewaiten Media is For Everyone </h2>
      <div className={classes.cards}>
        <div className={classes.image}>
          <Image
            src="/images/draw/ceo.jpg"
            alt="image"
            width="200"
            height="200"
            className={classes.img}
          />
        </div>
        <div className={classes.text}>
          Let's building your website as easy as possible. Hey! There, My name
          is Hassan . I'm 25 year-old . I'm a Software Developer und Instructor
          At Diesefive Academy . Welcome to my guide! After years of trial and
          working on many web projects with many start-up companies . I can
          confidentially recommend you our Digital marketing agency when it
          comes to building any website or any Web Application with high
          performance and development features .
        </div>
      </div>
    </div>
  );
}

export default Showcase1;
