import Action from "../model/action.model";
import UnitMeasures from "../model/unit-measure.enum";
import UnitConverter from "../service/unit-converter";

export enum UnitActions {
  Select,
  Convert,
}

export function unitReducer(
  state: {
    pixelValue: number;
    remValue: number;
    defaultFontValue: number;
    baseValue: number;
    selectedUnit: UnitMeasures;
  },
  action: Action<UnitActions, any>
) {
  debugger;
  switch (action.type) {
    case UnitActions.Convert: {
      const newState = { ...state };
      newState.baseValue = action.payload.selectedValue;
      newState.defaultFontValue = action.payload.defaultSelectedValue;
      switch (state.selectedUnit) {
        case UnitMeasures.PIXELS: {
          newState.pixelValue = newState.baseValue;
          newState.remValue = UnitConverter.remToPixels(
            newState.defaultFontValue,
            newState.baseValue
          );
          return newState;
        }
        case UnitMeasures.REMS: {
          newState.remValue = newState.baseValue;
          newState.pixelValue = UnitConverter.pixelsToRem(
            newState.defaultFontValue,
            newState.baseValue
          );
          return newState;
        }
        default:
          return state;
      }
    }

    case UnitActions.Select: {
      debugger;
      switch (action.payload.selectedUnit) {
        case UnitMeasures.PIXELS: {
          const newState = { ...state };
          newState.pixelValue = newState.baseValue;
          newState.selectedUnit = action.payload.selectedUnit;
          newState.remValue = UnitConverter.remToPixels(
            newState.defaultFontValue,
            newState.baseValue
          );
          return newState;
        }
        case UnitMeasures.REMS: {
          const newState = { ...state };
          newState.remValue = newState.baseValue;
          newState.selectedUnit = action.payload.selectedUnit;
          newState.pixelValue = UnitConverter.pixelsToRem(
            newState.defaultFontValue,
            newState.baseValue
          );
          return newState;
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
}
