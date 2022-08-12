import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import HeadComponent from "./HeadComponent";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <HeadComponent subtitle="Home" />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
