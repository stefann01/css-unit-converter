import { IconButton, Typography } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import styles from "./css-color-code.module.scss";

import React from "react";

interface ICssColorCodeProps {
  value: string;
}

export default function CssColorCode(props: ICssColorCodeProps) {
  return (
    <Typography className={"text"}>
      <code>{props.value}</code>
      <IconButton aria-label="clippboard">
        <FileCopyIcon className={styles.copyIcon} />
      </IconButton>
    </Typography>
  );
}
