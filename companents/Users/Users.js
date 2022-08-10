import React, { useEffect } from "react";
import Image from "next/image";
import classes from "./Users.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

function Users(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container}>
      <h3 className={classes.header}> Testimontials </h3>
      <div className={classes.cards}>
        <div className={classes.card} data-aos="fade-down">
          <Image
            src="/images/draw/ceo.jpg"
            alt=""
            width="200"
            height="200"
            objectFit="cover"
            className={classes.image}
          />
          <h3 className={classes.title}> User </h3>
          <p className={classes.text}>
            this is a nice website this is a nice website this is a nice website
            this is a nice website
          </p>
        </div>
        <div className={classes.card} data-aos="fade-down">
          <Image
            src="/images/draw/ceo.jpg"
            alt=""
            width="200"
            height="200"
            objectFit="cover"
            className={classes.image}
          />
          <h3 className={classes.title}> User </h3>
          <p className={classes.text}>
            this is a nice website this is a nice website this is a nice website
            this is a nice website
          </p>
        </div>
        <div className={classes.card} data-aos="fade-down">
          <Image
            src="/images/draw/ceo.jpg"
            alt=""
            width="200"
            height="200"
            objectFit="cover"
            className={classes.image}
          />
          <h3 className={classes.title}> User </h3>
          <p className={classes.text}>
            this is a nice website this is a nice website this is a nice website
            this is a nice website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Users;
