import * as React from "react";
import { render } from "react-dom";
import { App } from "./app";

// Get the main element
let el = document.querySelector("#app");
if (el) {
    // Render the app
    render(<App />, el);
}