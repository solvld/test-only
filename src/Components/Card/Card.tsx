import React from "react";
import './Card.scss'

function Card(props: any) {
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
};

export default Card;