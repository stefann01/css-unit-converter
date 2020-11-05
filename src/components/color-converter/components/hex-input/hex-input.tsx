import { Box, Grid, TextField } from "@material-ui/core";
import React from "react";
import { useColorContext } from "../../../../context/color-context";
import ColorEncoding from "../../../../model/color-encoding.enum";

export default function HexInput() {
  const colorContext = useColorContext();

  return (
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
  );
}
