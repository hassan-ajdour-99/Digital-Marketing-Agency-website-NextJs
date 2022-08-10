import React, { useEffect } from "react";
import classes from "./service.module.css";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Service({ service }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.card} key={service.id} data-aos="zoom-in">
        <Link passHref href={`/products/${service.name}`}>
          <div className={classes.media}>
            <Image
              src={`${service.image}`}
              width="200"
              height="200"
              objectFit="cover"
              alt={service.title}
              className={classes.image}
            />
          </div>
        </Link>
        <span className={classes.rating}></span>
        <div className={classes.btn}>
          <Link passHref href={`/services/${service.name}`}>
            <h2 className={classes.title}>{service.title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
