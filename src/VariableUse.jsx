import React from "react";

function VariableUse() {
  const name = "Sumit kumar Jha sir";
  const sum = 10 + 555;

  // function showAlert() {
  //   alert("This ia a alert to wake up ");
  // }

  const showAlert = () => {
    alert("This is a wake up call");
  };
  return (
    <div>
      <h2>My real mentor is {name}</h2>
      <p>this is to aboard you {showAlert}</p>
      {/* <button onClick={showAlert}>Show alert</button> */}
      <button
        onClick={() =>
          alert("THis is the wake up call if not today then no tommorow")
        }
      >
        Showing the alert
      </button>
      <p>the sum is {sum}</p>
    </div>
  );
}

export default VariableUse;
