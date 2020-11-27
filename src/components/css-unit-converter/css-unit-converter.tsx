import React from "react";

import useRows from "../../service/useRows";
import Card from "./card/card";
import Controls from "./controls/controls";

import "./css-unit-converter.scss";

export default function UnitConverter() {
  const { value, setValue, fontBaseSize, setFontBaseSize, rows } = useRows();

  return (
    <div className={"parent"}>
      <Controls className="controlsContainer" />
      <div className="container">
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
      </div>
    </div>
  );
}
