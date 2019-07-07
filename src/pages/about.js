import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Drawer from "../components/Drawer"

import "../styles/about.css"

import ovride from "../images/ovride.mp4"

import { Header } from "../components/common"

class About extends React.Component {
  state = { drawerActive: false }

  drawerSwitch = () => {
    this.setState({ drawerActive: !this.state.drawerActive })
  }

  render() {
    return (
      <div className="about-wrapper">
        <Header drawerSwitch={this.drawerSwitch}></Header>

        <Drawer
          active={this.state.drawerActive}
          drawerSwitch={this.drawerSwitch}
        ></Drawer>

        <div className="backdrop"></div>

        <video
          className="video-container"
          autoPlay="autoplay"
          loop={true}
          muted={true}
          data-reactid=".0.1.0.0"
          playsInline
        >
          <source
            type="video/mp4"
            data-reactid=".0.1.0.0.0"
            src={ovride}
          ></source>
        </video>

        <div className="aboutContent">
          <h1>Hello there,</h1>
          <h2>
            This page is currently under construction. But while you're here,
            enjoy this dope video I made 🔥
          </h2>
        </div>
      </div>
    )
  }
}

export default About
