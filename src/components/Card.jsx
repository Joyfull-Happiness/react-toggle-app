import "./Card.css";
import React, { useState } from "react";
import Button from "./Button.jsx";
import Toggle from "./Toggle.jsx";

function Card({ object, id, updateData, onRemove }) {
  const [checked, setChecked] = useState(false);
  const handleToggleChange = (nextChecked) => {
    updateData(id, nextChecked);
    setChecked(nextChecked);
  };

  return (
    <>
      <div className="card">
        <div className="imageHeadderWrapper">
          <img src={object.logo} />
          <div>
            <h3> {object.name}</h3>

            <p> {object.description}</p>
          </div>
        </div>
        <div className="toggleButtonWrapper">
          <Button text="Remove" onClick={onRemove} />
          <Toggle
            /* below we are connecting the toggle to the data */
            activity={object.isActive}
            toggleChange={handleToggleChange}
            id={id}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
