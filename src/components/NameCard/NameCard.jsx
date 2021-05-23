import React from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard = ({ suggestedName }) => {
  return (
    <a
      target="_blanck"
      rel="noreferrer"
      className="card-link"
      href={`${nameCheapUrl}${suggestedName}`}
    >
      <div className="result-name-card">
        <h2 className="result-name">{suggestedName}</h2>
      </div>
    </a>
  );
};

export default NameCard;
