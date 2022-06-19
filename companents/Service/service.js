import classes from "./service.module.css";
import Link from "next/link";
import Image from "next/image";

function Service({ service }) {
  return (
    <div className={classes.container}>
      <div className={classes.card} key={service.id}>
        <Link passHref href={`/products/${service.name}`}>
          <div className={classes.media}>
            <Image
              src={`${service.photo}`}
              width="250"
              height="250"
              objectFit="cover"
              alt={service.title}
              className={classes.image}
            />
          </div>
        </Link>
        <span className={classes.rating}></span>
        <div className={classes.btn}>
          <Link passHref href={`/products/${service.name}`}>
            <h2 className={classes.title}>{service.title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
