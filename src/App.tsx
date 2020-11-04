import React from "react";
import { injectIntl } from "react-intl";
import ColorConverter from "./components/color-converter/color-converter";
import UnitConverter from "./components/css-unit-converter/css-unit-converter";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import { ColorContextProvider } from "./context/color-context";
import { useNavigationContext } from "./context/navigation-context";
import Components from "./model/components.enum";

function renderSelectedComponent(activeComponent: Components) {
  switch (activeComponent) {
    case Components.UnitConverter:
      return <UnitConverter />;
    case Components.ColorConverter:
      return (
        <ColorContextProvider>
          <ColorConverter />;
        </ColorContextProvider>
      );
    default:
      return <UnitConverter />;
  }
}

function App() {
  const navigationContext = useNavigationContext();
  return (
    <>
      <NavigationBar />
      {renderSelectedComponent(navigationContext.activeComponent)}
    </>
  );
}

export default injectIntl(App);
