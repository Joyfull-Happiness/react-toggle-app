import data from "../data.js";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import React, { useState } from "react";

function Home() {
  //usestate data is passing in the data array from data.js
  const [dataApi, setDataApi] = useState(data);
  const [activity, setActivity] = useState("all");

  /* handlechange is updateing the array for each card we click on (or each object we click
  on it is only updating the is active key */
  function handleChange(id, newIsActive) {
    console.log("apiData", dataApi);

    const updatedData = dataApi.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: newIsActive };
      }
      return item;
    });
    setDataApi(updatedData);
  }
  // below we are difinning filterCards. filtercards when we arrive on the
  // page is the ustate initial array so then it filters through the array via the
  //ifstatements only run line
  // the return rtue means just be the initial variable. be the array that already existst in
  // data api
  const filterCards = dataApi.filter((obj) => {
    if (activity === "active") return obj.isActive;
    if (activity === "inactive") return !obj.isActive;
    return true;
  });

  function removeCard(id) {
    setDataApi((prevData) => prevData.filter((item) => item.id !== id));
  }
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
        {/* between the return statement is called jsx, 
        the filtercards.map is pasing through each object in the array.

        we are passing through speicific objects so we can build and display certain 
        elements to the user. We're giving the necesary information to for the card to use later */}
        {filterCards.map((object) => (
          <Card
            object={object}
            id={object.id}
            key={object.id}
            updateData={handleChange}
            onRemove={() => removeCard(object.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
