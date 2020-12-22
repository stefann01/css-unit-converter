import React, { useContext, useReducer } from "react";
import UnitMeasures from "../model/unit-measure.enum";
import { unitReducer } from "../reducers/unit-reducer";

const UnitContext = React.createContext({} as any);

const initialValue = {
  pixelValue: 1,
  remValue: 1,
  defaultFontValue: 16,
  baseValue: 2,
  selectedUnit: UnitMeasures.PIXELS,
};

export interface UnitContextProviderProps {
  children: JSX.Element;
}

export const UnitContextProvider = (props: UnitContextProviderProps) => {
  const [state, dispatch] = useReducer(unitReducer, initialValue);
  return (
    <UnitContext.Provider
      value={{
        pixelValue: state.pixelValue,
        remValue: state.remValue,
        defaultFontValue: state.defaultFontValue,
        baseValue: state.baseValue,
        selectedUnit: state.selectedUnit,
        dispatch,
      }}
    >
      {props.children}
    </UnitContext.Provider>
  );
};

export function useUnitContext() {
  return useContext(UnitContext);
}
