import React from "react";
import "./style.css";

function image(props) {
  return (
    <div>
      <div className="img-container">
        <img id={props.id} alt={props.name} src={props.image} height="200" width="200" onClick={() => props.clickhandler(props.id)} className="remove"/>
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default image;
