import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div>
      <div className="img-container">
        <img alt={props.name} src={props.image} height="200" onClick={() => props.randomize()} className="remove"/>
      </div>
      <div className="content">
        {/* <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul> */}
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
