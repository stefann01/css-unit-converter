import React from "react";
import { Box, Container, Grid, TextField } from "@material-ui/core";
import ColorCard, { SliderModel } from "../card/color-card";
import { useColorContext } from "../../context/color-context";
import ColorEncoding from "../../model/color-encoding.enum";

const xs = 6;
const sm = 2;
function ColorConverter() {
  const colorContext = useColorContext();
  return (
    <div>
      <Container>
        <Box p={1}>
          <Grid container justify="center">
            <Grid item>
              <h1>Color Converter</h1>
            </Grid>
          </Grid>
        </Box>
        <Box p={2}>
          <Grid container justify="center">
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Hex"
                variant="outlined"
                value={colorContext.hexColor}
                onChange={(e) =>
                  colorContext.dispatch({
                    type: ColorEncoding.Hex,
                    payload: { color: e.target.value },
                  })
                }
              />
            </Grid>
          </Grid>
        </Box>
        <Box p={2}>
          <Grid container spacing={6} justify="center">
            <Grid item xs={xs} sm={sm}>
              <ColorCard
                title={"RGB"}
                text={"Mock"}
                sliders={[
                  new SliderModel(0, 255, "Red", colorContext.rgbColor[0]),
                  new SliderModel(0, 255, "Green", colorContext.rgbColor[1]),
                  new SliderModel(0, 255, "Blue", colorContext.rgbColor[2]),
                ]}
                type={ColorEncoding.Rgba}
              />
            </Grid>
            <Grid item xs={xs} sm={sm}></Grid>
            <Grid item xs={xs} sm={sm}>
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
            <Grid item xs={xs} sm={sm}></Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default ColorConverter;
