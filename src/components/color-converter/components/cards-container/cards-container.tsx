import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useColorContext } from "../../../../context/color-context";
import ColorEncoding from "../../../../model/color-encoding.enum";
import ColorCard, { SliderModel } from "../card/color-card";
const xs = 6;
const sm = 4;
const md = 6;
const lg = 3;
const xl = 3;

export default function CardsContainer() {
  const colorContext = useColorContext();
  return (
    <Box p={2} className={"colorCardsContainer"}>
      <Grid container spacing={6} justify="center">
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <ColorCard
            title={"RGB"}
            text={"Mock"}
            sliders={[
              new SliderModel(0, 255, "Red", colorContext.rgbColor[0]),
              new SliderModel(0, 255, "Green", colorContext.rgbColor[1]),
              new SliderModel(0, 255, "Blue", colorContext.rgbColor[2]),
            ]}
            type={ColorEncoding.Rgb}
          />
        </Grid>
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <ColorCard
            title={"HSL"}
            text={"Mock"}
            sliders={[
              new SliderModel(0, 360, "Hue", colorContext.hslColor[0]),
              new SliderModel(0, 100, "Saturation", colorContext.hslColor[1]),
              new SliderModel(0, 100, "Lightness", colorContext.hslColor[2]),
            ]}
            type={ColorEncoding.Hsl}
          />
        </Grid>
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <ColorCard
            title={"CMYK"}
            text={"Mock"}
            sliders={[
              new SliderModel(0, 100, "Cyan", colorContext.cmykColor[0]),
              new SliderModel(0, 100, "Magenta", colorContext.cmykColor[1]),
              new SliderModel(0, 100, "Yellow", colorContext.cmykColor[2]),
              new SliderModel(0, 100, "Key", colorContext.cmykColor[3]),
            ]}
            type={ColorEncoding.Cmyk}
          />
        </Grid>
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <ColorCard
            title={"HSV"}
            text={"Mock"}
            sliders={[
              new SliderModel(0, 360, "Hue", colorContext.hsvColor[0]),
              new SliderModel(0, 100, "Saturation", colorContext.hsvColor[1]),
              new SliderModel(0, 100, "Value", colorContext.hsvColor[2]),
            ]}
            type={ColorEncoding.Hsv}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
