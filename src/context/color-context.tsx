import React, { useContext, useReducer } from "react";
import { colorReducer } from "../reducers/color-reducer";

export interface ColorContextModel {
  hexColor: string;
  rgbColor: number[];
  cmykColor: number[];
  dispatch: CallableFunction;
}

const ColorContext = React.createContext({} as any);
const initialValue = {
  hexColor: "#000000",
  rgbColor: [0, 0, 0],
  cmykColor: [0, 0, 0, 100],
  hslColor: [0, 0, 0],
  hsvColor: [0, 0, 0],
};

export const ColorContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(colorReducer, initialValue);
  return (
    <ColorContext.Provider
      value={{
        hexColor: state.hexColor,
        rgbColor: state.rgbColor,
        cmykColor: state.cmykColor,
        hslColor: state.hslColor,
        hsvColor: state.hsvColor,
        dispatch,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export function useColorContext() {
  return useContext(ColorContext);
}
