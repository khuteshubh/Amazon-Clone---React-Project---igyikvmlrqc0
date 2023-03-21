import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css"
import reducer,{ initialState } from "./reducer";
import { StateProvider } from "./StateProvider";




ReactDOM.render(
    <BrowserRouter>

    <StateProvider initialState={initialState} reducer={reducer}>
        <App />

    </StateProvider>
      

    </BrowserRouter>,
    document.getElementById("root"));

    