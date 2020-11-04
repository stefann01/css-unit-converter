import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigationContext } from "../../context/navigation-context";
import ThemeIcon from "../theme-icon/theme-icon";
import Components from "../../model/components.enum";

export default function NavigationBar() {
  const navigationContext = useNavigationContext();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button
            color="inherit"
            onClick={() => {
              navigationContext.setActiveComponent(Components.UnitConverter);
            }}
          >
            Unit Converter
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigationContext.setActiveComponent(Components.ColorConverter);
            }}
          >
            Color Converter
          </Button>
          <ThemeIcon />
        </Toolbar>
      </AppBar>
    </>
  );
}
