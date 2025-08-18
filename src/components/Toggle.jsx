import Switch from "react-switch";
import "./Toggle.css"; // Import your CSS for styling

export default function Toggle({ activity, toggleChange }) {
  return (
    <>
      <label className="toggle">
        <Switch onChange={toggleChange} checked={activity ? true : false} />
      </label>
      <p style={{ color: activity ? "green" : "red" }}>
        <span> {activity ? "active" : "inactive"} </span>
      </p>
    </>
  );
}
/* in toggle we only have two props.  */
