import React, { Component } from "react"
import { Link } from "gatsby"
import "../styles/index.css"
import logo from "../images/logo.svg"

import SEO from "../components/seo"

class IndexPage extends React.Component {
  state = {
    titles: [
      "ace",
      "alexandru",
      "alexacea",
      "the ace",
      "ya boi",
      "thelegend27",
    ],
    title: "ace",
    count: 0,
  }

  tick() {
    if (this.state.count !== this.state.titles.length - 1)
      this.setState(prevState => ({
        title: this.state.titles[prevState.count],
        count: prevState.count + 1,
      }))
    else
      this.setState(prevState => ({
        title: this.state.titles[prevState.count],
        count: 0,
      }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="background">
        <SEO title="Home" />
        <div className="inner">
          <img id="aceLogo" src={logo} />

          <div className="text">
            <div id="title">
              <h1>Hello,</h1>
              <div id="smartTitle">
                <h1>I'm</h1>
                <div id="smart">
                  <h1>{this.state.title}</h1>
                </div>
                <h1>.</h1>
              </div>

              <p>I BUILD ALL KINDS OF COOL STUFF</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
