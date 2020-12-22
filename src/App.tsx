import { Container } from "@material-ui/core";
import React from "react";
import { injectIntl } from "react-intl";

import ColorConverter from "./components/color-converter/color-converter";
import UnitConverter from "./components/css-unit-converter/css-unit-converter";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import { ColorContextProvider } from "./context/color-context";
import { useNavigationContext } from "./context/navigation-context";
import { UnitContextProvider } from "./context/unit-context";
import Components from "./model/components.enum";

function renderSelectedComponent(activeComponent: Components) {
  switch (activeComponent) {
    case Components.UnitConverter:
      return (
        <UnitContextProvider>
          <UnitConverter />
        </UnitContextProvider>
      );
    case Components.ColorConverter:
      return (
        <ColorContextProvider>
          <ColorConverter />
        </ColorContextProvider>
      );
    default:
      return <UnitConverter />;
  }
}

function App() {
  const navigationContext = useNavigationContext();
  return (
    <div style={{ height: "100%", minWidth: "320px" }}>
      <NavigationBar />
      {renderSelectedComponent(navigationContext.activeComponent)}
    </div>
  );
}

export default injectIntl(App);
