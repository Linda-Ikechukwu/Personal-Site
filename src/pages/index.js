import React from "react";

import Header from "../components/header/header.component";
import Layout from "../components/layout"
import MetaData from "../components/metadata"
import Info from "../components/info/info.component"
import Projects from "../components/projects/projects.component"
import Contact from "../components/contact/contact.component"
import AnimatedSvgLoader from "../components/svg-loader/svg-loader.component"


const Index = () => {

  return (
    <>
      <AnimatedSvgLoader />
      <Layout>
        <MetaData 
          lang="en"
          title="Linda Ikechukwu: Frontend Developer and Technical Writer from Lagos, Nigeria" 
        />
        <div class="homepage">
          <Header />
          <Info />
          <Projects />
          <Contact />
        </div>

      </Layout>
    </>
  )
}

export default Index;
