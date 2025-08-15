import data from "../data.js";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import React, { useState } from "react";

function Home() {
  const [dataApi, setDataApi] = useState(data);
  const [activity, setActivity] = useState("all");
  const [checked, setChecked] = useState(true);

  function handleChange(checked) {
    setChecked(checked);
  }

  const filterCards = dataApi.filter((obj) => {
    if (activity === "active") return obj.isActive;
    if (activity === "inactive") return !obj.isActive;
    return true;
  });
  // move useState and handle change from toogle to here and then pass it
  // through to the toggle
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
          <Card
            object={object}
            key={id}
            toggleChange={handleChange}
            toggleChecked={checked}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
