import data from "../data.js";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
// import Toggle from "./components/Toggle";
import React, { useState } from "react";

function Home() {
  const [dataApi, setDataApi] = useState(data);

  return (
    <>
      <h1>Extensions List</h1>
      {/* <Button text="Active" /> */}
      <div className="card-container">
        {dataApi.map((object, id) => (
          <Card object={object} key={id} />
        ))}
      </div>
    </>
  );
}

export default Home;
