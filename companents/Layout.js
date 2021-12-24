import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </Fragment>
  );
}

export default Layout;
