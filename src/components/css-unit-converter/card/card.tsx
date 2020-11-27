import { Card } from "@material-ui/core";
import React from "react";
import PaperClipIcon from "../../../assets/paper-clip";

export default function UnitCard(props) {
  return (
    <div
      className={props.className}
      style={{
        backgroundColor: "#4691f6",
        position: "relative",
        margin: "10px",
      }}
    >
      <p
        style={{ position: "absolute", top: "1rem", left: "1rem", margin: "0" }}
      >
        Pixels
      </p>
      <PaperClipIcon
        style={{
          position: "absolute",
          fontSize: "20px",
          top: "1rem",
          right: "1rem",
        }}
      />
      <p
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          margin: "0",
        }}
      >
        0.54634
      </p>
    </div>
  );
}
