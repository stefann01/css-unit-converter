import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import Slider from "@material-ui/core/Slider/Slider";
import React from "react";
import { useColorContext } from "../../../../context/color-context";
import ColorEncoding from "../../../../model/color-encoding.enum";
import CssColorCode from "../css-code-card/css-color-code";
import "./color-card.scss";
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
    <Card className={"card"}>
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
            <>
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
                      if (slide.value < 255) {
                        colorContext.dispatch({
                          type: props.type,
                          payload: { index, value: slide.value + 1 },
                        });
                      }
                    }}
                  >
                    +
                  </Button>

                  <Button
                    size="small"
                    disabled
                    className={"changeValueButtonDisabled"}
                  >
                    {slide.value}
                  </Button>
                  <Button
                    size="small"
                    className={"changeValueButton"}
                    onClick={() => {
                      if (slide.value > 0) {
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
            </>
          );
        })}
      </CardContent>
      <CssColorCode type={props.type} />
    </Card>
  );
}

export default ColorCard;
