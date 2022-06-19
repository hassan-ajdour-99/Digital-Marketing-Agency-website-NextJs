import classes from "./intro.module.css";
import Image from "next/image";

function Intro() {
  return (
    <div className={classes.showcase}>
      <div className={classes.container}>
        <div className={classes.cardImage}>
          <h1> We Help you to blew up & promote your business Online . </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            expedita velit debitis unde quis repudiandae perspiciatis officia
          </p>
          <button className={classes.button}> Start </button>
        </div>
        <div className={classes.card}>
          <Image src="/images/draw/003.png" width="800" height="800" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
