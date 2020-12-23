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
          <button
            onClick={() => {
              unitContext.dispatch({
                type: UnitActions.DefaultFontChanged,
                payload: {
                  newDefaultFontValue: unitContext.defaultFontValue + 1,
                },
              });
            }}
          >
            +
          </button>
          <input
            min={1}
            max={100}
            value={unitContext.defaultFontValue}
            onChange={(e) => {
              unitContext.dispatch({
                type: UnitActions.DefaultFontChanged,
                payload: {
                  newDefaultFontValue: parseInt(e.target.value),
                },
              });
            }}
          />
          <button
            onClick={() => {
              if (unitContext.defaultFontValue > 1) {
                unitContext.dispatch({
                  type: UnitActions.DefaultFontChanged,
                  payload: {
                    newDefaultFontValue: unitContext.defaultFontValue - 1,
                  },
                });
              }
            }}
          >
            -
          </button>
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
          <button
            onClick={() => {
              unitContext.dispatch({
                type: UnitActions.ValueChanged,
                payload: { newBaseValue: unitContext.baseValue + 1 },
              });
            }}
          >
            +
          </button>
          <input
            min={1}
            value={unitContext.baseValue}
            onChange={(e) => {
              unitContext.dispatch({
                type: UnitActions.ValueChanged,
                payload: {
                  newBaseValue: parseInt(e.target.value),
                },
              });
            }}
          />
          <button
            onClick={() => {
              if (unitContext.baseValue > 1) {
                unitContext.dispatch({
                  type: UnitActions.ValueChanged,
                  payload: { newBaseValue: unitContext.baseValue - 1 },
                });
              }
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
