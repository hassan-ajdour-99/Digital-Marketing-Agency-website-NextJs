import classes from "../styles/Contact.module.css";

export default function contact() {
  const submitContactMessage = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h2 className={classes.title2}> Feel Free to Contact Us </h2>
        <form className={classes.form}>
          <input className={classes.inputSmall} placeholder="Username" />
          <input className={classes.inputSmall} placeholder="Phone" />
          <input className={classes.inputSmall} placeholder="Email" />
          <textarea className={classes.textarea} placeholder="Message" />
          <button className={classes.button} onClick={submitContactMessage}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
