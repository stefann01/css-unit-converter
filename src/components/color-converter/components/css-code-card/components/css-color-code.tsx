import { IconButton, Typography } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import styles from "./css-color-code.module.scss";

import React from "react";
import { useSnackbar } from "notistack";
import copy from "copy-to-clipboard";

interface ICssColorCodeProps {
  value: string;
}

export default function CssColorCode(props: ICssColorCodeProps) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function copyCodeToClipboard(value: string) {
    copy(value);
    enqueueSnackbar("Copied to clipboard", {
      variant: "success",
      autoHideDuration: 1200,
    });
  }

  return (
    <Typography className={"text"}>
      <code>{props.value}</code>
      <IconButton aria-label="clippboard">
        <FileCopyIcon
          className={styles.copyIcon}
          onClick={() => {
            copyCodeToClipboard(props.value);
          }}
        />
      </IconButton>
    </Typography>
  );
}
