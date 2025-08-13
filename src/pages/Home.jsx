import data from "../data.js";

import Card from "../components/Card.jsx";
// import Toggle from "./components/Toggle";
import React, { useState } from "react";

function Home() {
  const [dataApi, setDataApi] = useState(data);

  return (
    <>
      <h1>Extensions</h1>
      <div className="card-container">
        <Card cardApi={dataApi} />
      </div>
    </>
  );
}

export default Home;
