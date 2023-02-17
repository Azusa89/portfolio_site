import React from "react";
import "./fx.css";

const pointer = document.getElementById("pointer");
document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  pointer.style.left = `${clientX}px`;
  pointer.style.top = `${clientY}px`;
};

function Fx() {
  return (
    <>
      <div className="pointer"></div>
      <div className="blur"></div>
    </>
  );
}

export default Fx;
