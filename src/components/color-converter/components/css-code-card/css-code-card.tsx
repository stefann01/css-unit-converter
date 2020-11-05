import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useColorContext } from "../../../../context/color-context";
import { MdContentCopy } from "react-icons/md";

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
          <Typography className={"text"}>
            <code>{`rgb(${colorContext.rgbColor[0]}, ${colorContext.rgbColor[1]}, ${colorContext.rgbColor[2]});`}</code>
            <Button variant="contained">
              <MdContentCopy />
            </Button>
          </Typography>

          <Typography className={"text"}>
            <code>
              {`hsl(${colorContext.hslColor[0]}, ${colorContext.hslColor[1]}, ${colorContext.hslColor[2]});`}
            </code>
            <Button variant="contained">
              <MdContentCopy />
            </Button>
          </Typography>
          <Typography className={"text"}>
            <code>
              {`cmyk(${colorContext.cmykColor[0]}, ${colorContext.cmykColor[1]}, ${colorContext.cmykColor[2]}, ${colorContext.cmykColor[3]});`}
            </code>
            <Button variant="contained">
              <MdContentCopy />
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
