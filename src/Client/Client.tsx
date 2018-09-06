import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import * as React from "react";
import App from "./Src";
const RenderApp = () => 
  <BrowserRouter>
    <App />
  </BrowserRouter>
render(<RenderApp/>, document.getElementById("root"));
