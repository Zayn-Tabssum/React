const container = React.createElement(
 "h1",
 {}, "heading"
);
const container2 = React.createElement(
 "h1",
 {}, "heading2"
);
const div =React.createElement(
 "div",{id:"div"},[container,container2]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);