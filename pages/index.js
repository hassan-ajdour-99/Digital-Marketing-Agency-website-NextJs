import Head from "next/head";
import classes from "../styles/Home.module.css";
import Intro from "../companents/intro";
import Services from "../companents/Services/services";
import { data } from "../data";
import Testimontials from "../companents/Testimonials/testimonials";

export default function Home(props) {
  const services = props.dummy_data;
  return (
    <div className={classes.container}>
      <Head>
        <title> Diesefive Digital </title>
        <meta
          name="description"
          content="The Best Digital Marketing Agency in Morocco"
        />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimontials />
    </div>
  );
}

export async function getStaticProps() {
  const dummy_data = data;
  return {
    props: { dummy_data },
  };
}
