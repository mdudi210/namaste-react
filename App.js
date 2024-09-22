import React from "react";
import ReactDOM from "react-dom/client";
// <div>
//     <div>
//         <h1>i am h1 tag</h1>
//     </div>
// </div>

// ReactElement(Object) => HTML(browers understands)
const nested = React.createElement("div" ,{id : "parent"} ,
    [ 
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"i am h1 tag"),
                React.createElement("h2",{},"i am h2 tag")
            ]
        ) , 
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"i am h1 tag"),
                React.createElement("h2",{},"i am h2 tag")
            ]
        )
    ]
);


// This is the createation of Element in react , Here @nd parameter is used for giving attributr to our tages.
const heading =  React.createElement("h1",{id:"head"},"Hello World using React!");
// This is the connection b/w react and root id
const root = ReactDOM.createRoot(document.getElementById("root"));
// This is the place where we are adding react code to that particular id
// root.render(heading);
root.render(nested);