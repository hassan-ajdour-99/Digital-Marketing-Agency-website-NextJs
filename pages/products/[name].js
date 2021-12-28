import Image from "next/image";
import Link from "next/link";
import { data } from "../../data";
import classes from "../../styles/Product.module.css";

function Product(props) {
  const products = props.product;

  return (
    <div className={classes.container}>
      <div className={classes.cardL}>
        {products.images.map((item) => (
          <div key={item.id} className={classes.imgContainer}>
            <Image
              src={item.url}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={classes.cardS}>
        <h1 className={classes.title}> {products.name} </h1>
        <p className={classes.description}> {products.longDesc} </p>
        <button className={classes.button}>
          <Link href="/contact"> Contact </Link>
        </button>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const products = data;

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

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;

  const product = data.filter((item) => item.name === name)[0];

  return {
    props: { product },
  };
};

export default Product;
