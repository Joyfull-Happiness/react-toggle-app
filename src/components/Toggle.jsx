import Switch from "react-switch";
import { useState } from "react";
export default function Toggle() {
  const [checked, setChecked] = useState(false);
  function handleChange(checked) {
    setChecked(checked);
  }
  return (
    <>
      <label>
        <Switch onChange={handleChange} checked={checked} />
      </label>
      <p style={{ color: checked ? "blue" : "red" }}>
        The switch is <span> {checked ? "on" : "off"} </span>
      </p>
    </>
  );
}

<div
  style={{
    width: "40px",
    height: "20px",
    backgroundColor: "#ff5c5c",
    borderRadius: "20px",
    position: "relative",
    cursor: "pointer",
  }}
>
  <div
    style={{
      width: "18px",
      height: "18px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      position: "absolute",
      top: "1px",
      right: "1px",
    }}
  ></div>
</div>;
