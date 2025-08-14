import data from "../data.js";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import React, { useState } from "react";

function Home() {
  const [dataApi, setDataApi] = useState(data);
  const [activity, setActivity] = useState("all");

  // create an function that updates isactive key
  // based on your ha change from your toggle

  const filterCards = dataApi.filter((obj) => {
    if (activity === "active") return obj.isActive;
    if (activity === "inactive") return !obj.isActive;
    return true;
  });

  return (
    <>
      <div className="banner">
        <h2>Extensions List</h2>
        <Button onClick={() => setActivity("active")} text="Active"></Button>
        <Button
          onClick={() => setActivity("inactive")}
          text="Inactive"
        ></Button>
        <Button onClick={() => setActivity("all")} text="Show All"></Button>
      </div>
      {/* <Button text="Active" /> */}
      <div className="card-container">
        {filterCards.map((object, id) => (
          <Card object={object} key={id} />
        ))}
      </div>
    </>
  );
}

export default Home;
