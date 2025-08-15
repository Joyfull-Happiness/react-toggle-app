import "./Card.css";
import Button from "./Button.jsx";
import Toggle from "./Toggle.jsx";

function Card({ object, toggleChange, toggleChecked }) {
  return (
    <>
      <div className="card">
        <img src={object.logo} />
        <h3> {object.name}</h3>

        <p> {object.description}</p>
        <Toggle
          card={object.name}
          // i need to pass through an id as another prop (ie  activity={object.isActive} )
          activity={object.isActive}
          handleChange={toggleChange}
          checked={toggleChecked}
        />
        <Button text="Remove" />
      </div>
    </>
  );
}

export default Card;
