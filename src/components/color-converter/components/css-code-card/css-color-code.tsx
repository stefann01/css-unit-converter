import { Grid, IconButton } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import React, { useRef } from "react";
import { useSnackbar } from "notistack";
import copy from "copy-to-clipboard";
import { useColorContext } from "../../../../context/color-context";
import ColorEncoding from "../../../../model/color-encoding.enum";

function getCode(type: ColorEncoding, colorContext) {
  switch (type) {
    case ColorEncoding.Rgb:
      return (
        <code
          className={"cssCode"}
        >{`rgb(${colorContext.rgbColor[0]}, ${colorContext.rgbColor[1]}, ${colorContext.rgbColor[2]});`}</code>
      );
    case ColorEncoding.Hsl:
      return (
        <code
          className={"cssCode"}
        >{`hsl(${colorContext.hslColor[0]}, ${colorContext.hslColor[1]}, ${colorContext.hslColor[2]});`}</code>
      );
    case ColorEncoding.Hsv:
      return (
        <code
          className={"cssCode"}
        >{`hsl(${colorContext.hsvColor[0]}, ${colorContext.hsvColor[1]}, ${colorContext.hsvColor[2]});`}</code>
      );
    case ColorEncoding.Cmyk:
      return (
        <code
          className={"cssCode"}
        >{`hsl(${colorContext.cmykColor[0]}, ${colorContext.cmykColor[1]}, ${colorContext.cmykColor[2]}, ${colorContext.cmykColor[3]});`}</code>
      );
    default:
      return <></>;
  }
}

interface ICssColorCodeProps {
  type: ColorEncoding;
}

export default function CssColorCode(props: ICssColorCodeProps) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const colorContext = useColorContext();
  const cssCode = useRef<HTMLSpanElement>(null);

  function copyCodeToClipboard(value: string | undefined) {
    if (value) {
      copy(value);
      enqueueSnackbar("Copied to clipboard", {
        variant: "success",
        autoHideDuration: 1200,
      });
    }
  }

  return (
    <Grid container spacing={1} justify={"center"} alignItems={"center"}>
      <Grid item>
        {<span ref={cssCode}>{getCode(props.type, colorContext)}</span>}
      </Grid>
      <Grid item>
        <IconButton aria-label="clippboard" className={"iconButton"}>
          <FileCopyIcon
            className={"copyIcon"}
            onClick={() => {
              copyCodeToClipboard(cssCode.current?.innerText);
            }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}
