import data from "../data.js";
import Card from "../components/Card.jsx";
// import Toggle from "./components/Toggle";
import React, { useState } from "react";

function Home() {
  const [dataApi, setDataApi] = useState(data);

  return (
    <>
      <div
        className="home"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "##050B21",
          minHeight: "100vh",
        }}
      >
        <h1>Extensions</h1>
        <br></br>
        <Card cardApi={dataApi} />
      </div>
    </>
  );
}

export default Home;
