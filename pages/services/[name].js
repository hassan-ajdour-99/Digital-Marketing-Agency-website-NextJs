import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { services } from "../../data/data";
import Feature from "../../companents/Layout/feature";
// import Testimontials from "../../companents/Testimonials/testimonials";
import classes from "../../styles/Product.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Product(props) {
  const products = props.product;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container}>
      <Feature image={products.image} description={products.desc} />
      <h2 className={classes.header}> OUR PORTFOLIO PROJECTS </h2>
      <div className={classes.cards}>
        {products.images.map((item) => (
          <div key={item.id}>
            <div className={classes.card} data-aos="zoom-in">
              <Image
                src={item.image}
                width="400px"
                height="300px"
                alt=""
                className={classes.img}
              />
              <p className={classes.title}> {item.title} </p>
            </div>
          </div>
        ))}
      </div>
      {/* <Testimontials /> */}
    </div>
  );
}

export const getStaticPaths = async () => {
  const products = services;

  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (ctx) => {
  const name = ctx.params.name;

  const product = services.filter((item) => item.name === name)[0];

  return {
    props: { product },
  };
};

export default Product;
