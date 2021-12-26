import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.carl}>
        <h1 className={classes.title}>Diesefive Creative </h1>
        <h1 className={classes.linkTitle}>
          <a href="/contact">
            <span className={classes.linkText}> WORK WITH US </span>
            <Image src="/images/link.png" height="40px" width="40px" alt="" />
          </a>
        </h1>
      </div>
      <div className={classes.carS}>
        <div className={classes.cartItem}>
          SALE , Hey Karima N 87 STREET - Morocco
        </div>
        <div className={classes.cartItem}>
          Contact@Diesefive.dev <br /> +212623257633
        </div>
      </div>
      <div className={classes.carS}>
        <div className={classes.cartItem}>Follow us On Social media :</div>
        <div className={classes.cartItem}>
          Diesefive Digital <br /> All Right Reserved 2022
        </div>
      </div>
    </div>
  );
}

export default Footer;
