import { Box, Container } from "@material-ui/core";
import React from "react";

import CardsContainer from "./components/cards-container/cards-container";
import HexInput from "./components/hex-input/hex-input";
import ColorConverterTitle from "./components/title/color-converter-title";

function ColorConverter() {
  return (
    <Container style={{ overflowY: "auto", maxHeight: "calc(100% - 64px)" }}>
      <ColorConverterTitle />
      <HexInput />
      <CardsContainer />
    </Container>
  );
}

export default ColorConverter;
