import { Card } from "@material-ui/core";
import React from "react";
import PaperClipIcon from "../../../assets/paper-clip";
import UnitMeasures from "../../../model/unit-measure.enum";
import styles from "./unit-card.module.scss";
interface UnitCardProps {
  value: number;
  unitType: UnitMeasures;
  onSelect: CallableFunction;
  className: any;
  selected: boolean;
}

export default function UnitCard(props: UnitCardProps) {
  return (
    <div
      className={`${props.className} ${styles.unitCardContainer}`}
      style={{
        backgroundColor: props.selected ? "#00ff00" : "#4691f6",
      }}
      onClick={() => props.onSelect()}
    >
      <p className={styles.unitCardValueTitle}>{props.unitType}</p>
      <PaperClipIcon className={styles.copyIcon} />
      <p className={styles.unitCardValue}>{props.value}</p>
    </div>
  );
}
