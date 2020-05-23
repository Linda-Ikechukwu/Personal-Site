import React from "react";
import Layout from "../components/layout"
import Header from "../components/header/header.component";
import MetaData from "../components/metadata"
import Info from "../components/info/info.component"
import Projects from "../components/projects/projects.component"
import Contact from "../components/contact/contact.component"

const Index = () => {
    return (
      <Layout>
        <MetaData title="Linda Ikechukwu"/>
        <Header/>
        <Info/>
        <Projects/>
        <Contact/>
      </Layout>
    )
  }
  
  export default Index;
