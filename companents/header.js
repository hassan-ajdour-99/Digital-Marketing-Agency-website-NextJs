import classes from "./header.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className={classes.container}>
      <h1>
        <Link href="/"> Diesefive Digital </Link>
      </h1>
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
          <Link href="/products/photography"> Photography </Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/products/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
