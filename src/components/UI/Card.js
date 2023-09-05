import React from "react";
import "./Card.css";

//create a re-usable wrapper component with similar styling
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
