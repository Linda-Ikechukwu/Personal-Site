import React from "react"
import Navigation from "./navigation/navigation.component";
import Footer from "./footer/footer.component";

import "./layout.scss"

const Layout = (props) => {
  return (
    <div id="body">
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout;