import React from "react";
import { Box, Container } from "@material-ui/core";
import ColorConverterTitle from "./components/title/color-converter-title";
import HexInput from "./components/hex-input/hex-input";
import CardsContainer from "./components/cards-container/cards-container";

function ColorConverter() {
  return (
    <Container>
      <ColorConverterTitle />
      <HexInput />
      <CardsContainer />
    </Container>
  );
}

export default ColorConverter;
