import React, { JSX } from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://static.independent.co.uk/2023/06/20/10/apple%20logo%20trademark.png?width=1200"
        alt="apple image"
      />
      <div className="details">
        <h2>{companyName}</h2>
        <p>{ticker}</p>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        laudantium?
      </p>
    </div>
  );
};

export default Card;
