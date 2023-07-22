import React from "react";
import "./styles.css";

export default function CheckList() {
  const data = [
    {
      name: "Clean up bedroom",
      id: 1
    }, 
    {
      name: "Buy some milk",
      id: 2
    },
    {
      name: "Jogging",
      id: 3
    },
    {
      name: "Learn React",
      id: 4
    },
    {
      name: "Doing Exercises",
      id: 5
    }
  ];

  return (
    <div className="check-list">
      {data.map((item) => (
        <div>
          <input type="radio" name="checklist" /> <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
