import Head from "next/head";
import classes from "../styles/Home.module.css";
import Intro from "../companents/Layout/intro";
import Services from "../companents/Service/Services";
import Showcase from "../companents/Layout/showcase";
import Showcase1 from "../companents/Layout/Showcase1";
import Prices from "../companents/Price/Prices";
import { services, prices, users } from "../data/data";
import Users from "../companents/Users/Users";
import Contact from "../companents/Contact/Contact";
import HeadComponent from "../companents/Layout/HeadComponent";

export default function Home({ servicesData, pricesData, usersData }) {
  return (
    <div className={classes.container}>
      <Head>
        <meta
          name="description"
          content=" Forevaiten Digital is the best recommended Digital Marketing company in Morocco"
        />
        <meta
          name="description"
          content="We Provide Amazing designs , Social media posters , and Logos to our Customers"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          referrerpolicy="no-referrer"
        />
        <meta
          name="description"
          content="The Best Digital Marketing Agency in Morocco"
        />
      </Head>

      {/* <HeadComponent /> */}
      <Intro />
      <Services services={servicesData} />
      <Showcase />
      <Prices prices={pricesData} />
      <Showcase1 />
      <Users />
      <div className={classes.main}>
        <Contact />
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  const servicesData = services;
  const pricesData = prices;
  const usersData = users;

  return {
    props: {
      servicesData,
      pricesData,
      usersData,
    },
  };
};
