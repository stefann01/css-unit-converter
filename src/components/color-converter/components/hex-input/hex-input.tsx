import { Box, Grid, TextField } from "@material-ui/core";
import React from "react";
import { useColorContext } from "../../../../context/color-context";
import { useThemeContext } from "../../../../context/theme-context";
import ColorEncoding from "../../../../model/color-encoding.enum";
import Theme from "../../../../Theme/themes.enum";

function getStyle(theme: Theme) {
  if (theme === Theme.Dark) {
    return {
      labelColor: "white",
      inputColor: "white",
      backgroundColor: "#2d2d2d",
    };
  }
}

export default function HexInput() {
  const colorContext = useColorContext();
  const appTheme = useThemeContext();
  const style = getStyle(appTheme.theme);
  return (
    <Box p={2}>
      <Grid container justify="center">
        <Grid item>
          <TextField
            variant="outlined"
            InputProps={{
              style: {
                color: style?.inputColor,
                backgroundColor: style?.backgroundColor,
              },
            }}
            InputLabelProps={{
              style: { color: style?.labelColor },
            }}
            id="outlined-basic"
            label="Hex"
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
  );
}
