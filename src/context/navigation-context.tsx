import React, { useContext, useState } from "react";

import Components from "../model/components.enum";

interface NavigationContextModel {
  activeComponent: Components;
  setActiveComponent: CallableFunction;
}

const NavigationContext = React.createContext({} as NavigationContextModel);

export const NavigationProvider = (props: any) => {
  const [activeComponent, setActiveComponent] = useState(
    Components.ColorConverter
  );
  return (
    <NavigationContext.Provider value={{ activeComponent, setActiveComponent }}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export function useNavigationContext() {
  return useContext(NavigationContext);
}
