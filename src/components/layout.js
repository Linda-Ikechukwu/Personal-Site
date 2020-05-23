import React from "react"
import Navigation from "./navigation/navigation.component";
import Footer from "./footer/footer.component";

import "./layout.scss"

const Layout = ({children, dark}) => {
  return (
    <div id="body">
      {dark ? <Navigation dark/> : <Navigation />}
      {children}
      <Footer />
    </div>
  )
}

export default Layout;