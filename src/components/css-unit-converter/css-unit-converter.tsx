import React from "react";
import { useUnitContext } from "../../context/unit-context";
import UnitMeasures from "../../model/unit-measure.enum";
import { UnitActions } from "../../reducers/unit-reducer";

import UnitCard from "./card/card";
import Controls from "./controls/controls";

import "./css-unit-converter.scss";

export default function UnitConverter() {
  const unitContext = useUnitContext();

  const handleSelectCard = (unitType: UnitMeasures) => {
    debugger;
    unitContext.dispatch({
      type: UnitActions.Select,
      payload: { newSelectedUnit: unitType },
    });
  };

  return (
    <div className={"parent"}>
      <Controls className="controlsContainer" />
      <div className="container">
        <UnitCard
          unitType={UnitMeasures.PIXELS}
          value={unitContext.pixelValue}
          className="card"
          onSelect={() => handleSelectCard(UnitMeasures.PIXELS)}
          selected={unitContext.selectedUnit === UnitMeasures.PIXELS}
        />
        <UnitCard
          unitType={UnitMeasures.REMS}
          value={unitContext.remValue}
          className="card"
          onSelect={() => handleSelectCard(UnitMeasures.REMS)}
          selected={unitContext.selectedUnit === UnitMeasures.REMS}
        />
      </div>
    </div>
  );
}
