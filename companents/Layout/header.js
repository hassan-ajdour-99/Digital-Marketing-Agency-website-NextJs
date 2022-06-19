import React, { useState } from "react";
import classes from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [openMenu, setopenMenu] = useState(false);

  const ToggleMenuX = () => {
    setopenMenu(!openMenu);
  };

  function ToggleMenuY() {
    setopenMenu(false);
  }

  return (
    <div className={classes.container}>
      <Link href="/">
        <h1 className={classes.title}>Diesefive Media</h1>
      </Link>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link href="/products/design"> Design </Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/products/development"> Development </Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/products/production"> Production </Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/contact"> Contact </Link>
        </li>
      </ul>
      <div onClick={ToggleMenuX}>
        {!openMenu ? (
          <div className={classes.logoImage}>
            <Image src="/images/menu.png" height="30px" width="35px" alt="" />
          </div>
        ) : (
          <div className={classes.logoImage}>
            <Image src="/images/close.png" height="30px" width="30px" alt="" />
          </div>
        )}
      </div>
      <div
        onClick={ToggleMenuY}
        className={classes.menu}
        style={{ display: !openMenu ? "none" : "block" }}
      >
        <ul className={classes.menuUl}>
          <li>
            <Link href="/products/design" className={classes.Items}>
              Design
            </Link>
          </li>
          <li className={classes.MenuItem}>
            <Link href="/products/development"> Development </Link>
          </li>
          <li className={classes.MenuItem}>
            <Link href="/products/production"> Production </Link>
          </li>
          <li className={classes.MenuItem}>
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
