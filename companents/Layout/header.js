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
      <Link passHref href="/">
        <h1 className={classes.title}> Forewaiten </h1>
      </Link>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link href="/Blogs"> Blogs</Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/services/design-creation"> Design </Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/services/website-creation"> Development </Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/services/marketing"> Marketing </Link>
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
            <Link href="/Blogs" className={classes.Items}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/services/design-creation" className={classes.Items}>
              Design
            </Link>
          </li>
          <li className={classes.MenuItem}>
            <Link href="/services/website-creation"> Development </Link>
          </li>
          <li className={classes.MenuItem}>
            <Link href="/services/marketing"> Marketing </Link>
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
