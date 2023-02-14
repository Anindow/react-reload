//Import the React and ReactDOM libraaries
import React from "react";
import ReactDOM from "react-dom";


// Create a react component
const App = () => {
  const buttonText ={text :'click me' };
  const lebelText ='Enter Name';
  return (
    <div>
      <label className="label" htmlFor="name">
        {lebelText}
      </label>
      <input id="name" type="text" />
      {/* <button style="background-color: blue; color:white;"></button> */}
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//Take the react component and show it on the screen

// ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.createRoot(document.querySelector('#root')).render(<App />);