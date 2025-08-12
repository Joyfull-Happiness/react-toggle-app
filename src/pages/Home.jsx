import data from "../data.js";
import Card from "../components/Card.jsx";
// import Toggle from "./components/Toggle";
import React, { useState } from "react";

function Home() {
  const [dataApi, setDataApi] = useState();

  return (
    <>
      <div className="home">
        <h1>HELLO</h1>
        <Card cardApi={dataApi} />
      </div>
    </>
  );
}

export default Home;
