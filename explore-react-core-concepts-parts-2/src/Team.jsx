import { useState } from "react";

//
export default function Team() {
  const [team, setTime] = useState(10);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTime(newTeam);
  };

  const handleRemove = () => {
    const newTeam = team - 1;
    setTime(newTeam);
  };

  const teamStyle = {
    border: "2px solid purple",
    borderRadius: "15px",
    padding: "15px",
    margin: "15px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players : {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
