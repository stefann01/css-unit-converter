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
      const newState = { ...state };
      newState.hexColor = action.payload.color;
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i.test(action.payload.color)) {
        newState.hexColor = action.payload.color;
        newState.cmykColor = ColorConvert.hex.cmyk(action.payload.color);
        newState.rgbColor = ColorConvert.hex.rgb(action.payload.color);
        newState.hslColor = ColorConvert.hex.hsl(action.payload.color);
        newState.hsvColor = ColorConvert.hex.hsv(action.payload.color);
      }
      return newState;
    case ColorEncoding.Rgb: {
      const newState = { ...state };
      const index = action.payload.index;
      newState.rgbColor[index] = action.payload.value || 0;
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
      newState.cmykColor[index] = action.payload.value || 0;
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

    case ColorEncoding.Hsl: {
      const newState = { ...state };
      const index = action.payload.index;
      newState.hslColor[index] = action.payload.value || 0;
      newState.hexColor =
        "#" +
        ColorConvert.hsl.hex(
          newState.hslColor[0],
          newState.hslColor[1],
          newState.hslColor[2]
        );
      newState.cmykColor = ColorConvert.hsl.cmyk(
        newState.hslColor[0],
        newState.hslColor[1],
        newState.hslColor[2]
      );
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
      newState.hsvColor[index] = action.payload.value || 0;
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
