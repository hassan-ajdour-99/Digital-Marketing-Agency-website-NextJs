import Head from "next/head";
import classes from "../styles/Home.module.css";
import Intro from "../companents/intro";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title> Diesefive Digital </title>
        <meta
          name="description"
          content="The Best Marketing Agency in Morocco"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </div>
  );
}
