import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/*let const
class Demo {
  methodone() {
    let a = 5;
    let b = 10;
    let c = a + b;
    document.getElementById("root").innerHTML = c;
  }
  methodtwo() {
    let a = 50;
    let b = 50;
    let c = a + b;
    document.getElementById("root").innerHTML = c;
  }
}
let mydemo = new Demo();
mydemo.methodtwo();*/

/*arrow function
let a = () => {
  let a = 5;
  let b = 20;
  let c = a + b;
  document.getElementById("root").innerHTML = c;
};
a();*/

/*passing parameter in arrow function
let z = (x) => {
  let a = 5;
  let b = 20;
  let c = a + b + x;
  document.getElementById("root").innerHTML = c;
};
z(7);*/

/*varibles
const n = () => {
  const a = 5;
  if (a === 15) {
    let a = 10;
    //document.getElementById("root").innerHTML = a;
  }
  document.getElementById("root").innerHTML = a;
};
n();*/

/*jsx*/
// const myele = <h1>hiiiii</h1>;
// ReactDOM.render(myele, document.getElementById(`root`));

// const myele = React.createElement(`h1`, {}, "Hello, shree");
// ReactDOM.render(myele, document.getElementById(`root`));

//const mysampl = ReactDOM.createRoot(document.getElementById("root"));
//mysampl.render(<h1 className="header">Hello, yuvi</h1>);

/*functions*/

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = <Welcome name="Shree" />;
// root.render(element);

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
