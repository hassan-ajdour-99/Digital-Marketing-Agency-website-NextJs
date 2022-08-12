import React from "react";
import Head from "next/head";

function HeadComponent(props) {
  return (
    <div>
      <Head>
        <title> Forevaiten | {props.subtitle} </title>
        <meta
          name="description"
          content=" Forevaiten Digital is the best recommended Digital Marketing company in Morocco"
        />
        <meta
          name="description"
          content="We Provide Amazing designs , Social media posters , and Logos to our Customers"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          referrerpolicy="no-referrer"
        />
        <meta
          name="description"
          content="The Best Digital Marketing Agency in Morocco"
        />
      </Head>
    </div>
  );
}

export default HeadComponent;
