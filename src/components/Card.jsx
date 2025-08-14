import "./Card.css";
import Button from "./Button.jsx";
import Toggle from "./Toggle.jsx";

function Card({ object }) {
  return (
    <>
      <div className="card">
        <img src={object.logo} />
        <h3> {object.name}</h3>

        <p> {object.description}</p>
        <Toggle activity={object.isActive} />
        <Button text="Remove" />
      </div>
    </>
  );
}

export default Card;
