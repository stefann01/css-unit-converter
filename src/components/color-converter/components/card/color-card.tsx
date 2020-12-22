import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@material-ui/core";
import Slider from "@material-ui/core/Slider/Slider";
import React from "react";

import { useColorContext } from "../../../../context/color-context";
import ColorEncoding from "../../../../model/color-encoding.enum";
import CssColorCode from "../css-code-card/css-color-code";

import "./color-card.scss";

function isNumberKey(evt) {
  var charCode = evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
export class SliderModel {
  constructor(
    public min: number,
    public max: number,
    public title: string,
    public value: number
  ) {}
}

interface IColorCardProps {
  title: string;
  sliders: SliderModel[];
  text: string;
  type: ColorEncoding;
}

function ColorCard(props: IColorCardProps) {
  const colorContext = useColorContext();
  return (
    <Card className={"color-card"}>
      <CardHeader
        title={
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography className={"text"}>{props.title}</Typography>
            <div
              style={{
                backgroundColor: colorContext.hexColor,
                width: "50px",
                height: "20px",
                borderRadius: "3px",
              }}
            ></div>
          </span>
        }
      />
      <CardContent>
        {props.sliders.map((slide, index) => {
          return (
            <div key={index}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography className={"text"}>{slide.title}</Typography>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                  style={{ marginLeft: "auto" }}
                >
                  <Button
                    size="small"
                    className={"changeValueButton"}
                    onClick={() => {
                      if (slide.value < slide.max) {
                        colorContext.dispatch({
                          type: props.type,
                          payload: {
                            index,
                            value: slide.value + 1,
                          },
                        });
                      }
                    }}
                  >
                    +
                  </Button>

                  <div className="TextField-without-border-radius">
                    <TextField
                      type="number"
                      inputProps={{
                        style: {
                          height: "26px",
                          width: "64px",
                          padding: "0",
                          textAlign: "center",
                        },
                      }}
                      value={slide.value}
                      onChange={(e) => {
                        if (
                          e.target.value === "" ||
                          (/^[0-9\b]+$/.test(e.target.value) &&
                            parseInt(e.target.value) <= slide.max)
                        ) {
                          colorContext.dispatch({
                            type: props.type,
                            payload: { index, value: parseInt(e.target.value) },
                          });
                        }
                      }}
                      variant="outlined"
                    />
                  </div>

                  <Button
                    size="small"
                    className={"changeValueButton"}
                    onClick={() => {
                      if (slide.value > slide.min) {
                        colorContext.dispatch({
                          type: props.type,
                          payload: { index, value: slide.value - 1 },
                        });
                      }
                    }}
                  >
                    -
                  </Button>
                </ButtonGroup>
              </div>

              <Slider
                className={"slider"}
                key={index}
                value={slide.value}
                min={slide.min}
                max={slide.max}
                onChange={(e, newValue) => {
                  colorContext.dispatch({
                    type: props.type,
                    payload: { index, value: newValue },
                  });
                }}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              ></Slider>
            </div>
          );
        })}
      </CardContent>
      <CssColorCode type={props.type} />
    </Card>
  );
}

export default ColorCard;
