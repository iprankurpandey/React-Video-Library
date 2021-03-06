import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { VideoListContext } from "./component/context/VideoListContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoListContext>
        <App />
      </VideoListContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
