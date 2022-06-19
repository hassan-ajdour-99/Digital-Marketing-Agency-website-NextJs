import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
