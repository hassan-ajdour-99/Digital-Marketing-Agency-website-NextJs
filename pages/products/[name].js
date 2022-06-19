import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { services } from "../../data";
import Feature from "../../companents/Layout/feature";
import Testimontials from "../../companents/Testimonials/testimonials";
import classes from "../../styles/Product.module.css";

function Product(props) {
  const products = props.product;

  return (
    <div className={classes.container}>
      <Feature image={products.photo} description={products.desc} />
      <h2 className={classes.header}> All DESIGN & OUR PORTFOLIO </h2>
      <div className={classes.cards}>
        {products.images.map((item) => (
          <div key={item.id}>
            <div className={classes.card}>
              <Image
                src={item.image}
                width="400px"
                height="300px"
                alt=""
                className={classes.img}
              />
            </div>
            <h3 className={classes.title}> {item.title} </h3>
          </div>
        ))}
      </div>
      <Testimontials />
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
