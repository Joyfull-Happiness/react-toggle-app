import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// import home from "./components/Home";
// import route from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
