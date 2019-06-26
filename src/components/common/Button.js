import React from "react"
import "../../styles/button.css"

const Button = props => {
  return (
    <div className="buttonBody" style={props.style}>
      <div className="upper">{props.children}</div>
      <div className="downer" />
    </div>
  )
}

export { Button }
