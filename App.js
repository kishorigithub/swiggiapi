import React from "react";
import ReactDOM from "react-dom";

// const heading= React.createElement("h1",{},"Hello world from react");

// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

const createnew = React.createElement("div",{},
    [React.createElement("div",{},[React.createElement("h1",{},"I am nested h1 tag"),
        React.createElement("h2",{},"I am nested h2 tag")]),React.createElement("div",{},[React.createElement("h1",{},"I am nested h1 tag"),
            React.createElement("h2",{},"I am nested h2 tag")])])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(createnew)