import React from "react"
import "../../styles/header.css"
import logoWhite from "../../images/supremeletters.png"
import ham from "../../images/hamburger.png"

const Header = props => {
  return (
    <div className="header-common-wrapper">
      <img id="ace-logo-header" src={logoWhite} />

      <img id="hamburger-item-header" src={ham} alt="" />
    </div>
  )
}

export { Header }
