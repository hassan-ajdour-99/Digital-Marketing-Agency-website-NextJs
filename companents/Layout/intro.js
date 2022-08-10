import classes from "./intro.module.css";
import Image from "next/image";
import Link from "next/link";

function Intro() {
  return (
    <div className={classes.showcase}>
      <div className={classes.container}>
        <div className={classes.cardImage}>
          <h1> We Help you to blew up & promote your business Online . </h1>
          <p>
            We offer Excellent service to your customers . The service ideas
            that will help you to reach your customers Online .
          </p>
          <Link passHref href="/contact">
            <button className={classes.button}> Start </button>
          </Link>
        </div>
        <div className={classes.card}>
          <Image src="/images/draw/003.png" width="800" height="800" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
