import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useContext, createContext } from "react";
// import parent from "./parent";
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <h1>Hello, world!</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
// function App() {
//   const [click, setClick] = useState(0);
//   // using array destructuring here
//   // to assign initial value 0
//   // to click and a reference to the function
//   // that updates click to setClick
//   return (
//     <div>
//       <p>You clicked {click} times</p>

//       <button onClick={() => setClick(click + 1)}>Click me</button>
//     </div>
//   );
// }

// export default App;

// function Greet({ name }) {
//   const message = `Hello, ${name}!`;
//   useEffect(() => {
//     document.title = `Greetings to ${name}`;
//   }, [name]);
//   return <div> that is {message}</div>;
// }
// export default Greet;

// function RepeatMessage({ message }) {
//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log(message);
//     }, 2000);
//     return () => {
//       clearInterval(id);
//     };
//   }, [message]);

//   return <div className="message">I'm logging to console "{message}"</div>;
// }

// export default function App() {
//   const [message, setMessage] = useState("Hello, World!");

//   return (
//     <div className="App">
//       <h3>Type the message to log to console</h3>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <RepeatMessage message={message} />
//     </div>
//   );
// }

// function App() {
//   //usestate
//   const [name, setName] = useState("yyyy");
//   return <p>hiii {name}</p>;
// }
// export default App;

// function Color() {
//   const [color, setColor] = useState("red");

//   return (
//     <div>
//       <h1>My favorite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("blue")}>
//         Blue
//       </button>
//     </div>
//   );
// }
// export default Color;

// function colors() {
//   const [colors, setColors] = useState("colors");
//   return (
//     <div>
//       <p>heloooo {colors}!</p>
//       <button type="button" onClick={() => setColors("pink")}>
//         pink
//       </button>
//     </div>
//   );
// }
// export default colors;

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     color: "red",
//   });
// const [brand, setBrand] = useState("Ford");
// const [model, setModel] = useState("Mustang");
// const [color, setColor] = useState("pink");

//update brand
//   const updateBrand = () => {
//     setCar((previousState) => {
//       return { ...previousState, brand: "aadi" };
//     });
//   };
//   return (
//     <div>
//       <h1>
//         this is {car.brand} of that {car.model} at of {car.color}
//       </h1>
//       <button type="button" onClick={updateBrand}>
//         aadi
//       </button>
//     </div>
//   );
// }
// export default Car;

//use effect
// function Timer() {
//   const [count, setCount] = useState(100);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);

//   return <h1>I've rendered {count} times!</h1>;
// }
// export default Timer;

// const Tutorials = (props) => {
//   useEffect(() => {
//     console.log("hello");
//     setTimeout(() => {
//       alert("hello");
//     }, 2000);
//     return () => {
//       console.log("cleanup on change player props");
//     };
//   }, [props.player]);
// };
// export default Tutorials;

//use context
// export const Context = React.createContext();
// function App() {
//   // const [val, setVal] = useState("orange");
//   return (
//     <Context.Provider value={"orange"}>
//       <h1>what's ?</h1>
//       <div className="border">
//         <h2>parent </h2>
//       </div>
//     </Context.Provider>
//   );
// }
// export default App;

const userDetailContext = React.createContext();

function UserDetails() {
  const [userDetails] = useState({
    name: "yyyyy",
    age: 10,
    city: "vellore",
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <Child userDetails={userDetails} />
    </userDetailContext.Provider>
  );
}

function Child() {
  return (
    <div>
      <h2>This is Child </h2>
      <hr />
      <SubChild />
    </div>
  );
}

function SubChild() {
  const contextData = React.useContext(userDetailContext);
  return (
    <div>
      <h3>This is Sub Child </h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
      <h4>User city: {contextData.city}</h4>
    </div>
  );
}

export default UserDetails;
