import React from "react"
import "./buttonStyle.css"

const Button = props => {
  return (
    <div className="buttonBody">
      <div className="upper">{props.children}</div>
      <div className="downer" />
    </div>
  )
}

export { Button }
