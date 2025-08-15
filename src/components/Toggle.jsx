import Switch from "react-switch";
import "./Toggle.css"; // Import your CSS for styling

export default function Toggle({ activity, handleChange, checked }) {
  return (
    <>
      <label className="toggle">
        <Switch onChange={handleChange} checked={checked} />
      </label>
      <p style={{ color: activity ? "green" : "red" }}>
        <span> {activity ? "active" : "inactive"} </span>
      </p>
    </>
  );
}
