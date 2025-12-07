const div1 = React.createElement(
    "div",
    {},
    [
        React.createElement("div",{},
            [React.createElement("h1",{},"Hello ji nested 1"),React.createElement("h1",{},"Hello ji sibling 1")]
        ), 
        React.createElement("div",{},
            [React.createElement("h1",{},"Hello ji nested 2"),React.createElement("h1",{},"Hello ji sibling 2")]
        )
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div1)