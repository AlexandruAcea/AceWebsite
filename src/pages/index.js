import React from "react"
import ReactDOM from "react-dom"

import MetaTags from "../components/MetaTags"

import { Button } from "../components/common"
import "../styles/index.css"
import "../styles/index.queries.css"
import logoWhite from "../images/supremeletters.png"

import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
import pic4 from "../images/pic4.jpg"

import ham from "../images/hamburger.png"
import thumbnail from "../images/thumb.jpg"

import SEO from "../components/seo"

import lgpic from "../images/svgs/lg.svg"
import lifxpic from "../images/svgs/lifx.svg"
import rhinopic from "../images/svgs/rhino.svg"
import revopic from "../images/svgs/revolut.svg"
import sgnlpic from "../images/svgs/sgnl.svg"

import meridio from "../images/svgs/meridio.svg"
import orbitkey from "../images/svgs/orbitkey.svg"
import ismpic from "../images/svgs/ism.svg"

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
    //console.log(element.scrollTop)

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
        <MetaTags thumbnail={thumbnail} />

        <h1
          style={{
            position: "fixed",
            color: "white",
            left: "0",
            top: "0",
            zIndex: "120",
            fontSize: "13px",
            fontFamily: "GTMono",
          }}
        >
          alpha 0.8 💁
        </h1>

        <div className="page1">
          <h1 id="hellotext1" style={{ opacity: opacityFactor }}>
            hi there, i'm
          </h1>

          <div
            className={
              this.state.x > 0.135 * this.state.y ? "headerActive" : "header"
            }
          >
            <img
              ref="acelogo"
              id="ace-logo"
              src={logoWhite}
              style={{
                transform:
                  this.state.x > 0.3 * this.state.y
                    ? "scale(0.5)"
                    : `scale(${scaleFactor})`,
              }}
            />

            <img
              id="hamburger-item"
              src={ham}
              alt=""
              style={{ opacity: this.state.x > 0.135 * this.state.y ? 1 : 0 }}
            />
          </div>
          <h1 id="hellotext2" style={{ opacity: opacityFactor }}>
            and i'm a creator
          </h1>

          <img
            id="pic1"
            src={pic1}
            style={{
              transform:
                this.state.x > 0
                  ? `translate(${"-" + this.state.x + "px"},0px) rotate(20deg)`
                  : "",
            }}
          />
          <img
            id="pic2"
            src={pic2}
            style={{
              transform:
                this.state.x > 0
                  ? `translate(${"-" + this.state.x + "px"},0px) rotate(10deg)`
                  : "",
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

          <div
            className="page1Content"
            style={{
              display: this.state.x > 250 ? "flex" : "none",
            }}
          >
            <h1 id="descriptionHome">
              I'm Alexandru but you can call me Ace. I make dope websites ( like
              this one ), take pics and inspire people.
            </h1>
          </div>
        </div>

        <div className="page2">
          <div
            className="page2Content"
            style={{
              display: this.state.x > 250 ? "flex" : "none",
            }}
          >
            <div className="buttonSection">
              <a
                href="mailto:hi@alexacea.com?Subject=Let's%20collab!"
                target="_top"
              >
                {" "}
                <Button style={{ marginTop: "30px" }}>Let's Collab</Button>
              </a>
            </div>

            <div className="collaborations">
              <img src={lgpic} alt="" />

              <img src={lifxpic} alt="" />

              <img src={rhinopic} alt="" />

              <img src={revopic} alt="" />

              <img src={meridio} alt="" />

              <img src={orbitkey} alt="" />

              <img src={ismpic} alt="" />

              <img src={sgnlpic} alt="" />
            </div>
            <h1>i've worked with them</h1>
            <h2>(and many others)</h2>

            <div className="page2Content2">
              <h1>So how can I help you?</h1>
              <h2>
                I'm a JavaScript dev, working with the newest technologies such
                as ReactJS, Sass, GraphQL and others. I'm currently looking to
                get hired or get freelance projects.
              </h2>

              <h1 style={{ marginTop: "40px" }}>Instagram</h1>
              <h2>
                Aside from coding I take a lot of pictures, and most of them end
                up on Instagram where I have a community of 45k people. I care a
                lot about good design and strive to achieve that in eveyrthing I
                do.
              </h2>
            </div>
          </div>
          <div
            className="buttonSection"
            style={{
              marginTop: "70px",
              display: this.state.x > 250 ? "flex" : "none",
            }}
          >
            <a
              href="mailto:hi@alexacea.com?Subject=Let's%work together!"
              target="_top"
            >
              {" "}
              <Button>Let's work together</Button>
            </a>
          </div>
        </div>

        {
          //&lt; &frasl; &gt;
        }
      </div>
    )
  }
}

export default IndexPage
