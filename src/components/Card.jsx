import "./Card.css";
import React, { useState } from "react";
import Button from "./Button.jsx";
import Toggle from "./Toggle.jsx";

function Card({ object, id, updateData }) {
  const [checked, setChecked] = useState(false);
  const handleToggleChange = (nextChecked) => {
    updateData(id, nextChecked);
    setChecked(nextChecked);
  };

  // const handleRemoveBtn = ({ remove }) => {

  //   if (removeBtn === click) {
  //       return { delete item };
  // };

  return (
    <>
      <div className="card">
        <img src={object.logo} />
        <h3> {object.name}</h3>

        <p> {object.description}</p>
        <Toggle
          /* below we are connecting the toggle to the data */
          activity={object.isActive}
          toggleChange={handleToggleChange}
          id={id}
        />
        <Button text="Remove" />
      </div>
    </>
  );
}

export default Card;
