import React from "react";
import { useUnitContext } from "../../../context/unit-context";
import { UnitActions } from "../../../reducers/unit-reducer";

export default function Controls(props) {
  const unitContext = useUnitContext();
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
          <input
            min={1}
            max={100}
            value={unitContext.defaultFontValue}
            onChange={(e) => {
              debugger;
              unitContext.dispatch({
                type: UnitActions.Convert,
                payload: {
                  selectedValue: unitContext.selectedValue,
                  defaultSelectedValue: parseInt(e.target.value),
                },
              });
            }}
          />
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
          <input
            min={1}
            value={unitContext.baseValue}
            onChange={(e) => {
              debugger;
              unitContext.dispatch({
                type: UnitActions.Convert,
                payload: {
                  selectedValue: parseInt(e.target.value),
                  defaultSelectedValue: unitContext.defaultFontValue,
                },
              });
            }}
          />
          <button>-</button>
        </div>
      </div>
    </div>
  );
}
