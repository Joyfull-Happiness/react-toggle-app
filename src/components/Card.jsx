import "./Card.css";

function Card({ cardApi }) {
  return (
    <>
      {cardApi.map((object, id) => (
        <div className="card" key={id}>
          <h3> {object.name}</h3>

          <p> {object.description}</p>
          {/* <Toggle></Toggle> */}
        </div>
      ))}
    </>
  );
}

export default Card;
