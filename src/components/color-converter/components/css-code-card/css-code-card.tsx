import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useColorContext } from "../../../../context/color-context";
import copy from "copy-to-clipboard";
import { useSnackbar } from "notistack";
import CssColorCode from "./components/css-color-code";

export default function CssCodeCard() {
  const colorContext = useColorContext();

  return (
    <Box
      p={2}
      className={"codeContainer"}
      style={{ borderRadius: "2px", marginTop: "20px" }}
    >
      {/* {codes} */}
      <Grid container justify="center">
        <Grid item>
          <CssColorCode
            value={`hsl(${colorContext.rgbColor[0]}, ${colorContext.rgbColor[1]}, ${colorContext.rgbColor[2]});`}
          />
          <CssColorCode
            value={`hsl(${colorContext.hslColor[0]}, ${colorContext.hslColor[1]}, ${colorContext.hslColor[2]});`}
          />
          <CssColorCode
            value={`cmyk(${colorContext.cmykColor[0]}, ${colorContext.cmykColor[1]}, ${colorContext.cmykColor[2]}, ${colorContext.cmykColor[3]});`}
          />
          <CssColorCode
            value={`hsv(${colorContext.hsvColor[0]}, ${colorContext.hsvColor[1]}, ${colorContext.hsvColor[2]});`}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
