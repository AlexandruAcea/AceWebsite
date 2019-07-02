import React from "react"
import "../../styles/button.css"

const Button = props => {
  return (
    <div className="upper" style={props.style}>
      {props.children}
    </div>
  )
}

export { Button }
