import Action from "../model/action.model";
import ColorEncoding from "../model/color-encoding.enum";
import ColorConverter from "../service/color-converter";

export function colorReducer(
  state: {
    hexColor: string;
    rgbColor: number[];
    cmykColor: number[];
  },
  action: Action<ColorEncoding, any>
) {
  switch (action.type) {
    case ColorEncoding.Hex:
      if (/^#[0-9A-F]{0,6}$/i.test(action.payload.color)) {
        return action.payload.color;
      }
      return state;
    case ColorEncoding.Rgba: {
      const newState = { ...state };
      const index = action.payload.index;
      newState.rgbColor[index] = action.payload.value;
      newState.hexColor = ColorConverter.rgbToHex(
        newState.rgbColor[0],
        newState.rgbColor[1],
        newState.rgbColor[2]
      );
      newState.cmykColor = ColorConverter.rgbToCmyk(
        newState.rgbColor[0],
        newState.rgbColor[1],
        newState.rgbColor[2]
      );
      return newState;
    }

    case ColorEncoding.Cmyk: {
      const newState = { ...state };
      const index = action.payload.index;
      newState.cmykColor[index] = action.payload.value;
      newState.hexColor = ColorConverter.cmykToHex(
        newState.cmykColor[0],
        newState.cmykColor[1],
        newState.cmykColor[2],
        newState.cmykColor[3]
      );
      newState.rgbColor = ColorConverter.cmykToRgb(
        newState.cmykColor[0],
        newState.cmykColor[1],
        newState.cmykColor[2],
        newState.cmykColor[3]
      );

      return newState;
    }

    default:
      return state;
  }
}
