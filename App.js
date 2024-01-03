const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello from react!"
);
//1st props is for tag type , 2nd for atribute id or name 2rd props is for component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
