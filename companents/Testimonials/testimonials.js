import Image from "next/image";
import classes from "./testimontials.module.css";
import Circle from "../circle";
import { users } from "../../data";

function Testimontials() {
  return (
    <div className={classes.container}>
      <Circle backgroundColor="darkBlue" top="-30vh" left="0" right="0" />
      <h1 className={classes.title}> Testimonials </h1>
      <div className={classes.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={classes.card}>
            <Image
              src={`/images/${user.logo}`}
              alt={user.name}
              width="30"
              height="30"
            />
            <p className={classes.comment}>{user.comment}</p>
            <div>
              <Image
                src={`/images/${user.avatar}`}
                objectFit="cover"
                width="45"
                height="45"
              />
            </div>
            <div className={classes.info}>
              <span className={classes.username}>{user.name}</span>
              <span className={classes.Jobtitle}>{user.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimontials;
