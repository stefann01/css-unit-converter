import Action from "../model/action.model";
import ColorEncoding from "../model/color-encoding.enum";
import ColorConverter from "../service/color-converter";
import ColorConvert from "color-convert";

export function colorReducer(
  state: {
    hexColor: string;
    rgbColor: number[];
    cmykColor: number[];
    hslColor: number[];
    hsvColor: number[];
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
      newState.hexColor =
        "#" +
        ColorConvert.rgb.hex(
          newState.rgbColor[0],
          newState.rgbColor[1],
          newState.rgbColor[2]
        );
      newState.cmykColor = ColorConvert.rgb.cmyk(
        newState.rgbColor[0],
        newState.rgbColor[1],
        newState.rgbColor[2]
      );
      newState.hslColor = ColorConvert.rgb.hsl(
        newState.rgbColor[0],
        newState.rgbColor[1],
        newState.rgbColor[2]
      );
      newState.hsvColor = ColorConvert.rgb.hsv(
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
      newState.hexColor =
        "#" +
        ColorConvert.cmyk.hex(
          newState.cmykColor[0],
          newState.cmykColor[1],
          newState.cmykColor[2],
          newState.cmykColor[3]
        );
      newState.rgbColor = ColorConvert.cmyk.rgb(
        newState.cmykColor[0],
        newState.cmykColor[1],
        newState.cmykColor[2],
        newState.cmykColor[3]
      );

      newState.hslColor = ColorConvert.cmyk.hsl(
        newState.cmykColor[0],
        newState.cmykColor[1],
        newState.cmykColor[2],
        newState.cmykColor[3]
      );

      newState.hsvColor = ColorConvert.cmyk.hsv(
        newState.cmykColor[0],
        newState.cmykColor[1],
        newState.cmykColor[2],
        newState.cmykColor[3]
      );

      return newState;
    }

    case ColorEncoding.Hsla: {
      const newState = { ...state };
      const index = action.payload.index;
      newState.hslColor[index] = action.payload.value;
      //update hex
      newState.hexColor =
        "#" +
        ColorConvert.hsl.hex(
          newState.hexColor[0],
          newState.hexColor[1],
          newState.hexColor[2]
        );
      //update cmyk
      newState.cmykColor = ColorConvert.hsl.cmyk(
        newState.hexColor[0],
        newState.hexColor[1],
        newState.hexColor[2]
      );
      //update rgb
      newState.rgbColor = ColorConvert.hsl.rgb(
        newState.hslColor[0],
        newState.hslColor[1],
        newState.hslColor[2]
      );

      newState.hsvColor = ColorConvert.hsl.hsv(
        newState.hslColor[0],
        newState.hslColor[1],
        newState.hslColor[2]
      );
      return newState;
    }

    case ColorEncoding.Hsv: {
      const newState = { ...state };
      const index = action.payload.index;
      newState.hsvColor[index] = action.payload.value;
      newState.hexColor =
        "#" +
        ColorConvert.hsv.hex(
          newState.hsvColor[0],
          newState.hsvColor[1],
          newState.hsvColor[2]
        );
      newState.cmykColor = ColorConvert.hsv.cmyk(
        newState.hsvColor[0],
        newState.hsvColor[1],
        newState.hsvColor[2]
      );
      newState.hslColor = ColorConvert.hsv.hsl(
        newState.hsvColor[0],
        newState.hsvColor[1],
        newState.hsvColor[2]
      );
      newState.rgbColor = ColorConvert.hsv.rgb(
        newState.hsvColor[0],
        newState.hsvColor[1],
        newState.hsvColor[2]
      );
      return newState;
    }

    default:
      return state;
  }
}
