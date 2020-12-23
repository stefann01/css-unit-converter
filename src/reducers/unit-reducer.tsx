import Action from "../model/action.model";
import UnitMeasures from "../model/unit-measure.enum";
import UnitConverter from "../service/unit-converter";


function getNewUnitMeasureValues(newState: UnitReducerState) {
  switch (newState.selectedUnit) {
    case UnitMeasures.REMS: {
      newState.remValue = newState.baseValue;
      newState.pixelValue = UnitConverter.pixelsToRem(
        newState.defaultFontValue,
        newState.baseValue
      );
      return newState
    }

    case UnitMeasures.PIXELS: {
      newState.pixelValue = newState.baseValue;
      newState.remValue = UnitConverter.remToPixels(
        newState.defaultFontValue,
        newState.baseValue
      );
      return newState
    }
    default: {
      return newState;
    }
  }

}

interface UnitReducerState {
  pixelValue: number;
  remValue: number;
  defaultFontValue: number;
  baseValue: number;
  selectedUnit: UnitMeasures;
}

export enum UnitActions {
  Select,
  DefaultFontChanged,
  ValueChanged
}

export function unitReducer(
  state: UnitReducerState,
  action: Action<UnitActions, any>
) {

  switch (action.type) {
    case UnitActions.Select: {
      let newState = { ...state }
      newState.selectedUnit = action.payload.newSelectedUnit;
      newState = getNewUnitMeasureValues(newState);
      return newState;
    }

    case UnitActions.DefaultFontChanged: {
      let newState = {...state}
      newState.defaultFontValue = action.payload.newDefaultFontValue;
      newState = getNewUnitMeasureValues(newState);
      return newState;
    }

    case UnitActions.ValueChanged:{
      debugger;
      let newState = {...state}
      newState.baseValue = action.payload.newBaseValue;
      newState = getNewUnitMeasureValues(newState);
      return newState;
    }

    default:
      return state;
  }
}
