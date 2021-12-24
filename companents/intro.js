import classes from "./intro.module.css";
import Image from "next/image";
import Circle from "./circle";

function Intro() {
  return (
    <div className={classes.container}>
      <Circle backgroundColor="#CD001A" top="-52vh" left="-40vh" />
      <Circle backgroundColor="#CD001A" right="-35vh" />
      <div className={classes.card}>
        <h1 className={classes.title}>
          <span className={classes.brand}> Diesefive </span> Web & Digital
          Marketing Agency
        </h1>
        <p className={classes.description}>
          We help you to sell your products & reach to more clients We help you
          to sell your products & reach to more clients .
        </p>
        <button className={classes.btn}>Discover</button>
      </div>
      <div className={classes.card}>
        <Image
          src="/images/Avocado.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt="intro"
        />
      </div>
    </div>
  );
}

export default Intro;
