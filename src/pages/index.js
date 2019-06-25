import React from "react"
import ReactDOM from "react-dom"

import { Button } from "../components/common"
import "../styles/index.css"
import "../styles/index.queries.css"
import logoWhite from "../images/supremeletters.png"

import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
import pic4 from "../images/pic4.jpg"
import ham from "../images/hamburger.png"
import SEO from "../components/seo"

var elem
var scaleFactor = 1
var opacityFactor = 0.3

class IndexPage extends React.Component {
  state = {
    x: 0,
    y: 0,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true)
    elem = ReactDOM.findDOMNode(this.refs.acelogo)
    //console.log(elem, elem.offsetHeight)
  }

  handleScroll = e => {
    let element = e.target
    //console.log(element.scrollTop / 1000 - 1)

    this.setState({ x: element.scrollTop, y: element.scrollHeight })

    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      //console.log("hello this works")
    }
  }

  render() {
    if (Math.abs(this.state.x / 1000 - 1) >= 0.5) {
      scaleFactor = Math.abs(this.state.x / 1000 - 1)
    }

    if (Math.abs(this.state.x / 1000 - 0.3) >= 0) {
      opacityFactor = Math.abs(this.state.x / 1000 - 0.3)
    }

    return (
      <div className="home-wrapper" onScroll={this.handleScroll}>
        <div className="page1">
          <h1 id="hellotext1" style={{ opacity: opacityFactor }}>
            hi there, i'm
          </h1>

          <div className={this.state.x > 333 ? "headerActive" : "header"}>
            <img
              ref="acelogo"
              id="ace-logo"
              src={logoWhite}
              style={{
                transform: `scale(${scaleFactor})`,
              }}
            />

            <img
              id="hamburger-item"
              src={ham}
              alt=""
              style={{ opacity: this.state.x > 0.204 * this.state.y ? 1 : 0 }}
            />
          </div>
          <h1 id="hellotext2" style={{ opacity: opacityFactor }}>
            and i'm a creator
          </h1>

          <img
            id="pic1"
            src={pic1}
            style={{
              transform: `translate(${"-" +
                this.state.x +
                "px"},0px) rotate(20deg)`,
            }}
          />
          <img
            id="pic2"
            src={pic2}
            style={{
              transform: `translate(${"-" +
                this.state.x +
                "px"},0px) rotate(10deg)`,
            }}
          />
          <img
            id="pic3"
            src={pic3}
            style={{
              transform:
                this.state.x > 0
                  ? `translate(${this.state.x + "px"},0px) rotate(-10deg)`
                  : "",
            }}
          />
          <img
            id="pic4"
            src={pic4}
            style={{
              transform:
                this.state.x > 0
                  ? `translate(${this.state.x + "px"},0px) rotate(-20deg)`
                  : "",
            }}
          />
        </div>

        <div className="page2" />
      </div>
    )
  }
}

export default IndexPage
