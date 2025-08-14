import Switch from "react-switch";
import { useState } from "react";
import "./Toggle.css"; // Import your CSS for styling

export default function Toggle({ activity }) {
  const [checked, setChecked] = useState(false);
  function handleChange(checked) {
    setChecked(checked);
  }

  return (
    <>
      <label className="toggle">
        <Switch onChange={handleChange} checked={activity ? true : false} />
      </label>
      <p style={{ color: activity ? "green" : "red" }}>
        <span> {activity ? "active" : "inactive"} </span>
      </p>
    </>
  );
}
