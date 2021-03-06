import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./Theme/dark.scss";
import "./Theme/light.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "./context/theme-context";
import { IntlProvider } from "react-intl";
import { SnackbarProvider } from "notistack";

import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
import { NavigationProvider } from "./context/navigation-context";

const messages = {
  de: messages_de,
  en: messages_en,
};
// const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="de" messages={messages["de"]}>
      <ThemeProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <NavigationProvider>
            <App />
          </NavigationProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
