import React from "react"
import { Link } from "gatsby"
import { Button } from "../components/common"
import "../styles/index.css"
import "../styles/index.queries.css"
import logo from "../images/logo.svg"

import SEO from "../components/seo"

class IndexPage extends React.Component {
  state = {
    titles: [
      "ace",
      "alexandru",
      "@alexacea",
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
          <div className="logoContainer">
            <img id="aceLogo" src={logo} />
          </div>

          <div className="links">
            <h1>Home</h1>
            <h1>Blog</h1>
            <h1>Shop</h1>
          </div>

          <div className="title">
            <h1>Hello, I'm {this.state.title}</h1>
          </div>

          <div className="paragraph">
            <p>I'M BUILDING ONLINE EXPERIENCES &amp; INSPIRE PEOPLE.</p>
          </div>

          <div className="subtitle">
            <h2>
              My name is Alex, but you can call me Ace. I create the best
              experiences for web &amp; mobile using some of the newest
              technologies and principles.
            </h2>
          </div>

          <div id="buttonSayHi">
            <Button>
              <h1>SAY HI</h1>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
