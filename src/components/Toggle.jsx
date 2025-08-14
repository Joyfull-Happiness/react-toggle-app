import Switch from "react-switch";
import { useState } from "react";
import "./Toggle.css"; // Import your CSS for styling

export default function Toggle() {
  const [checked, setChecked] = useState(false);
  function handleChange(checked) {
    setChecked(checked);
  }

  return (
    <>
      <label className="toggle">
        <Switch onChange={handleChange} checked={checked} />
      </label>
      <p style={{ color: checked ? "blue" : "red" }}>
        The switch is <span> {checked ? "active" : "inactive"} </span>
      </p>
    </>
  );
}
