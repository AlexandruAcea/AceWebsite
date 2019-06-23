import React from "react"
import { Link } from "gatsby"
import { Button } from "../components/common"
import "../styles/index.css"
import "../styles/index.queries.css"
import logoWhite from "../images/supremeletters.png"

import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"

import SEO from "../components/seo"

//#f7ece1 color you might (not) need

class IndexPage extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="page1">
          <h1 id="hellotext1">hi there, i'm</h1>
          <img id="ace-logo" src={logoWhite}></img>
          <h1 id="hellotext2">and i'm a creator</h1>

          <img id="pic1" src={pic1}></img>
          <img id="pic2" src={pic2}></img>
          <img id="pic3" src={pic3}></img>
        </div>

        <div className="page2">
          <h1>Helloooo</h1>
        </div>
      </div>
    )
  }
}

export default IndexPage
