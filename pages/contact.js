import classes from "../styles/Contact.module.css";
import Circle from "../companents/Layout/circle";

export default function contact() {
  return (
    <div className={classes.container}>
      <Circle backgroundColor="red" />
      <Circle backgroundColor="crimson" />
      <h1> Do you Have any Question? </h1>
      <h2> Please Don't Hesitate to Contact us </h2>
    </div>
  );
}
