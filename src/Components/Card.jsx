import React from "react";

import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="card zoom">
      <img
        className="robopic"
        alt="robopic"
        src={`https://robohash.org/robofriend${id}?200*200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
