import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div>
      <h1>Namaste React</h1>
    </div>
  );
};

// react components
// class based components - old way
// function based components - present way

//component compositions
const Heading = () => {
  return (
    <div>
      <Title />
      <h1 className="heading">Hi ajay felix wecome to react</h1>
    </div>
  );
};

//1st props is for tag type , 2nd for atribute id or name 2rd props is for component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
