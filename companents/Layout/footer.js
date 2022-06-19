import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.carl}>
        <h1>
          <Link href="/contact">
            <span>Diesefive Media</span>
          </Link>
        </h1>
        <h3> For Web & Marketing</h3>
        <p>Copyright &copy; 2022</p>
      </div>
      <div className={classes.carS}>
        <div className={classes.cartItem}>
          <i class="fas fa-map-marker-alt"></i>
          SALE , Hey Karima N 87 STREET - Morocco
        </div>
        <div className={classes.cartItem}>
          <i class="fa fa-location-arrow"></i>
          Contact@Diesefive.dev
        </div>
        <div className={classes.cartItem}>
          <i class="fas fa-phone"></i> +212623257633
        </div>
      </div>
      <div className={classes.social}>
        <span className={classes.fontAwesome}>
          <span>
            <a href="https://www.instagram.com/diesefivemedia/">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/diesefivemedia/">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/diesefivemedia/">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/diesefivemedia/">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
