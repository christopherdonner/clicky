import React from "react";

image = (props) => {
    return (
        <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    )
}