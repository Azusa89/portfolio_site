import React from "react";
import { useEffect, useState } from "react";
import "./fx.css";

function Fx() {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="pointer"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      ></div>
      <div className="blur"></div>
    </>
  );
}

export default Fx;
