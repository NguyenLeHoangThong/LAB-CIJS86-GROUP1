import React from "react";

export default function UserDetail() {
  return (
    <div style={{ backgroundColor: "#fff", width: "300px" }}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}
