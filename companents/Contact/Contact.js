import React, { useEffect, useRef } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function contact() {
  // const navigate = Navigation();

  const ShowNotificationSuccessMessage = () => {
    return toast.success("Success Notification !");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const formRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_4534o6e",
        "template_n9xx6vq",
        formRef.current,
        "rrbCVn1x2XcgLjxyW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.contactPhoto} data-aos="fade-down">
          <p> Hello! We are Forevaiten Team . </p>
          <p> Let's Work Together, Feel Free to Contact us! </p>
          <p> We will get back to you as soon as possible . </p>
        </div>
        <div className={classes.contactForm}>
          <div className={classes.card} data-aos="fade-down">
            <h2 className={classes.title2}> Feel Free to Contact Us </h2>
            <form
              ref={formRef}
              className={classes.form}
              onSubmit={SubmitHandler}
            >
              <input
                type="text"
                className={classes.inputSmall}
                name="user_name"
                placeholder="Username"
              />
              <input
                type="text"
                className={classes.inputSmall}
                name="user_subject"
                placeholder="Subject"
              />
              <input
                type="text"
                className={classes.inputSmall}
                name="user_phone"
                placeholder="Phone"
              />
              <input
                type="email"
                className={classes.inputSmall}
                name="user_email"
                placeholder="Email"
              />
              <textarea
                type="text"
                className={classes.textarea}
                name="user_message"
                placeholder="Message"
              />
              <button className={classes.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
