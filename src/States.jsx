import React, { useState } from "react";

function States() {
  const [name, setName] = useState("Sarthak Tripathi");
  const [user, setUser] = useState({
    names: "Raj Tiwari",
    emails: "rajtiwari007@gmail.com",
  });

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={() => setName("Saksham Tripathi")}>Change Name</button>
      <button onClick={() => setName("Sarthak Tripathi")}>Reset Name</button>

      <p>User name: {user.names}</p>
      <p>User email: {user.emails}</p>
      <button
        onClick={() =>
          setUser({ names: "Saksham Tripathi", emails: "saksham@gmail.com" })
        }
      >
        Change User
      </button>
    </div>
  );
}

export default States;
