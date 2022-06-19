import Head from "next/head";
import classes from "../styles/Home.module.css";
import Intro from "../companents/Layout/intro";
import Services from "../companents/Service/Services";
import Showcase from "../companents/Layout/showcase";
import Showcase1 from "../companents/Layout/Showcase1";
import Prices from "../companents/Price/Pices";
import { services } from "../data";
import Testimontials from "../companents/Testimonials/testimonials";

export default function Home({ data }) {
  return (
    <div className={classes.container}>
      <Head>
        <title> Diesefive Media </title>
        <meta
          name="description"
          content="diesefive Digital is an Amazing Digital Marketing company in Morocco"
        />

        <meta
          name="description"
          content="We Provide Amazing desings , Social media posters , and Logos to our Customers"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta
          name="description"
          content="The Best Digital Marketing Agency in Morocco"
        />
      </Head>
      <Intro />
      <Services services={data} />
      <Showcase />
      <Prices />
      <Showcase1 />
      <Testimontials />
    </div>
  );
}

export const getStaticProps = () => {
  const data = services;

  return {
    props: { data },
  };
};
