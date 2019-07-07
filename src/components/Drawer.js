import React from "react"
import "../styles/drawerstyle.css"

import { Link } from "gatsby"

import insta from "../images/svgs/insta.svg"
import linked from "../images/svgs/linkedin.svg"
import git from "../images/svgs/git.svg"

const Drawer = props => {
  return (
    <div
      className="drawer-wrapper"
      style={{ display: props.active ? "flex" : "none" }}
      onClick={props.drawerSwitch}
    >
      <ul>
        <li>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <h1>Blog</h1>
        </li>
        <li>
          <h1>Shop</h1>
        </li>
        <li>
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </li>
      </ul>

      <div className="socialMediaLinks">
        <a href="https://www.instagram.com/alexacea">
          <img src={insta} alt="instagram"></img>
        </a>
        <a href="https://www.github.com/AlexandruAcea">
          <img src={git} alt="github"></img>
        </a>
        <a href="https://www.linkedin.com/in/alexandru-acea-5132a859/">
          <img src={linked} alt="linked in" style={{ marginRight: 0 }}></img>
        </a>
      </div>
    </div>
  )
}

export default Drawer
