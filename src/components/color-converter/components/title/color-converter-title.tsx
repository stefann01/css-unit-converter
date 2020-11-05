import { Box, Grid } from "@material-ui/core";
import React from "react";

export default function ColorConverterTitle() {
  return (
    <Box p={1}>
      <Grid container justify="center">
        <Grid item>
          <h1 className={"text"}>Color Converter</h1>
        </Grid>
      </Grid>
    </Box>
  );
}
