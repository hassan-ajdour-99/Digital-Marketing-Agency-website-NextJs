import classes from "./services.module.css";
import Link from "next/link";
import Image from "next/image";

function Services(props) {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}> What we can do?</h1>
      <h1 className={classes.subtitle}>
        We Help you to Grow-up your Business & Get more Clients .
      </h1>
      <div className={classes.services}>
        {props.services.map((service) => (
          <Link passHref key={service.id} href={`/product/${service.name}`}>
            <div className={classes.service}>
              {/* <div className={classes.description}>{service.longDesc}</div> */}
              <span className={classes.category}>{service.title}</span>
              <div className={classes.media}>
                {service.video ? (
                  <video
                    src={`/images/${service.video}`}
                    autoPlay
                    muted
                    loop
                    className={classes.video}
                  />
                ) : (
                  <Image
                    src={`/images/${service.photo}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt={service.title}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
