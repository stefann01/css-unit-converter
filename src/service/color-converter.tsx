export default class ColorConverter {
  /////////////////////////////////
  public static hexToRgb(hex: string) {
    let red, green, blue;
    if (hex.length === 7) {
      red = Number.parseInt(hex[1] + hex[2], 16);
      green = Number.parseInt(hex[3] + hex[4], 16);
      blue = Number.parseInt(hex[5] + hex[6], 16);
      return { red, green, blue };
    }
    if (hex.length === 4) {
      red = Number.parseInt(hex[1]);
      green = Number.parseInt(hex[2]);
      blue = Number.parseInt(hex[3]);
    }
  }

  public static rgbToHex(red: number, green: number, blue: number) {
    let redhex =
      red.toString(16).length === 2 ? red.toString(16) : `0${red.toString(16)}`;
    let greenhex =
      green.toString(16).length === 2
        ? green.toString(16)
        : `0${green.toString(16)}`;
    let bluehex =
      blue.toString(16).length === 2
        ? blue.toString(16)
        : `0${blue.toString(16)}`;
    return `#${redhex}${greenhex}${bluehex}`;
  }

  public static rgbToCmyk(red: number, green: number, blue: number) {
    const redP = red / 255;
    const greenP = green / 255;
    const blueP = blue / 255;
    const key = 1 - Math.max(redP, greenP, blueP);
    let cyan = (1 - redP - key) / (1 - key);
    let magenta = (1 - greenP - key) / (1 - key);
    let yellow = (1 - blueP - key) / (1 - key);
    cyan = isNaN(cyan) ? 0 : cyan;
    magenta = isNaN(magenta) ? 0 : magenta;
    yellow = isNaN(yellow) ? 0 : yellow;
    return [
      Math.round(cyan * 100),
      Math.round(magenta * 100),
      Math.round(yellow * 100),
      Math.round(key * 100),
    ];
  }

  public static cmykToRgb(
    cyan: number,
    magenta: number,
    yellow: number,
    key: number
  ) {
    const red = Math.floor(255 * (1 - cyan / 100) * (1 - key / 100));
    const green = Math.floor(255 * (1 - magenta / 100) * (1 - key / 100));
    const blue = Math.floor(255 * (1 - yellow / 100) * (1 - key / 100));
    return [red, green, blue];
  }

  public static hexToCmyk(hex: string) {
    const rgb = ColorConverter.hexToRgb(hex);
    return ColorConverter.rgbToCmyk(rgb?.red, rgb?.green, rgb?.blue);
  }

  public static cmykToHex(
    cyan: number,
    magenta: number,
    yellow: number,
    key: number
  ) {
    const rgb = ColorConverter.cmykToRgb(cyan, magenta, yellow, key);
    return ColorConverter.rgbToHex(rgb[0], rgb[1], rgb[2]);
  }

  public static rgbToHsl(red: number, green: number, blue: number) {
    const redP = red / 255;
    const greenP = green / 255;
    const blueP = blue / 255;
    const cMax = Math.max(redP, greenP, blueP);
    const cMin = Math.min(redP, greenP, blueP);
    const delta = cMax - cMin;
    let hue = 0;
    let saturation = 0;
    let lightness = (cMax + cMin) / 2;

    switch (delta) {
      case 0:
        saturation = 0;
      default:
        saturation = delta / (1 - Math.abs(2 * lightness - 1));
    }

    if (delta === 0) {
      hue = 0;
    } else if (cMax === redP) {
      hue = 60 * (((greenP - blueP) / delta) % 6);
    } else if (cMax === greenP) {
      hue = 60 * ((blueP - redP) / delta + 2);
    } else if (cMax === blueP) {
      hue = 60 * ((redP - greenP) / delta + 4);
    }
    return [hue, saturation, lightness];
  }

  public static hslToRgb(hue: number, saturation: number, luminance: number) {
    let red,
      green,
      blue = 0;
    if (saturation === 0) {
      red = green = blue = saturation;
    } else {
      var hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      var q =
        luminance < 0.5
          ? luminance * (1 + saturation)
          : luminance + saturation - luminance * saturation;
      var p = 2 * luminance - q;
      red = hue2rgb(p, q, hue + 1 / 3);
      green = hue2rgb(p, q, hue);
      blue = hue2rgb(p, q, hue - 1 / 3);
    }
    return [
      Math.round(red * 255),
      Math.round(green * 255),
      Math.round(blue * 255),
    ];
  }
}
