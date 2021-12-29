import classes from "../styles/Contact.module.css";
import Circle from "../companents/Layout/circle";

export default function contact() {
  return (
    <div className={classes.container}>
      <Circle backgroundColor="crimson" />
      <Circle backgroundColor="crimson" />
      <h1 className={classes.title}> Do you Have any Question? </h1>
      <h2 className={classes.title}> Please Don't Hesitate to Contact us </h2>
      <form className={classes.form}>
        <input className={classes.inputSmall} placeholder="Username" />
        <input className={classes.inputSmall} placeholder="Phone" />
        <input className={classes.inputLarge} placeholder="Email" />
        <input className={classes.inputLarge} placeholder="Subject" />
        <textarea className={classes.textarea} placeholder="Message" row={6} />
        <button className={classes.button}>Submit</button>
      </form>
    </div>
  );
}
