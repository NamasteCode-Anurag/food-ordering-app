const Parent= React.createElement(
    "div", 
    {id: "Parent"},
    React.createElement(
        "div",
        {id: "Child"},
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 element")]
    )
);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);