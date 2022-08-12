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
            src="/images/testers/1.jpg"
            alt=""
            width="200"
            height="200"
            objectFit="cover"
            className={classes.image}
          />
          <h3 className={classes.title}> Mohamed ben yassine </h3>
          <div>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <p className={classes.text}>
            " Forevaiten is the best marketig agency when it comes to build
            great website or anything related to digital products . "
          </p>
        </div>
        <div className={classes.card} data-aos="fade-down">
          <Image
            src="/images/testers/2.jpg"
            alt=""
            width="200"
            height="200"
            objectFit="cover"
            className={classes.image}
          />
          <h3 className={classes.title}> Abdo nassi </h3>
          <div>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <p className={classes.text}>
            " I'm realy impressed with how developers and designer at Forevaiten
            works , Amazing service and dealing! . "
          </p>
        </div>
        <div className={classes.card} data-aos="fade-down">
          <Image
            src="/images/testers/3.jpg"
            alt=""
            width="200"
            height="200"
            objectFit="cover"
            className={classes.image}
          />
          <h3 className={classes.title}> Sara ghiss </h3>
          <div>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
            <span className={classes.span}>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <p className={classes.text}>
            "Great service on the time! and Nice prices! . I'm satisfied with my
            website now . I do recommend Forevaiten media for everyone who wants
            get realy good web app with advanced features . "
          </p>
        </div>
      </div>
    </div>
  );
}

export default Users;
