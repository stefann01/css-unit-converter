import React from "react";

export default function Controls(props) {
  return (
    <div className={props.className}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>Default font size</label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button>+</button>
          <input />
          <button>-</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>Value</label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button>+</button>
          <input />
          <button>-</button>
        </div>
      </div>
    </div>
  );
}
