import Image from "next/image";
import classes from "./testimontials.module.css";
import { users } from "../../data";

function Testimontials() {
  const users = [
    {
      id: 1,
      logo: "yahoo.png",
      avatar: "user1.jpeg",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utconsectetur veniam fugiat labore quaerat possimus laudantium.",
      name: "Harold Brown",
      title: "Executive Manager",
    },
    {
      id: 2,
      logo: "google.png",
      avatar: "user2.jpeg",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utconsectetur veniam fugiat labore quaerat possimus laudantium.",
      name: "Anna Taylor",
      title: "HR Manager",
    },
    {
      id: 3,
      logo: "facebook.png",
      avatar: "user3.jpeg",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utconsectetur veniam fugiat labore quaerat possimus laudantium.",
      name: "James Garry",
      title: "UI Designer",
    },
  ];

  return (
    <div className={classes.container}>
      <h2 className={classes.header}> Testimonials </h2>
      <div className={classes.feedbacks}>
        <div className={classes.feedback}>
          <div>
            <Image src="/images/draw/003.png" width="300" height="300" alt="" />
          </div>
          <h3> Mostafa ben Hassou </h3>
          <span style={{ color: "yellow" }}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </span>
          <p>
            "Investigate Media offrent un service incroyable à l'époque. les
            développeurs et les concepteurs de l'agence écoutent clairement les
            instructions et s'appliquent à eux exactement ... "
          </p>
        </div>
        <div className={classes.feedback}>
          <div>
            <Image
              src="/images/testers/testimonials-5.jpg"
              width="300"
              height="300"
              alt=""
            />
          </div>
          <h3> Mohamed Maaroufi </h3>
          <span style={{ color: "yellow" }}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </span>
          <p>
            "Investigate Media has an Good service with suitable price . without
            no doubt I'm very satisfied with website now & its new Design . "
          </p>
        </div>
        <div className={classes.feedback}>
          <div>
            <Image src="/images/draw/003.png" width="300" height="300" alt="" />
          </div>
          <h3> Chaimae foussa </h3>
          <span style={{ color: "yellow" }}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </span>
          <p>
            "Investigate Media agency, has good a service . I really like their
            social media poster for instegram ... me & my friend we have created
            our posters alaways our promote posters Investigate us "
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimontials;
