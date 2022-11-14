import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Count and Comments</h1>
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

const LoadComments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h4>Comment: {comments.length}</h4>
      {comments.map((comment) => (
        <Comment email={comment.email} text={comment.body}></Comment>
      ))}
      <Device name={"iphone"} />
    </div>
  );
};
const Device = (props) => {
  return (
    <div>
      <h1>Device Name: {props.name}</h1>
    </div>
  );
};
const styleComment = {
  backgroundColor: "lightgray",
  border: "3px solid purple",
  margin: "20px",
  padding: "20px",
  borderRadius: "20px",
};
const Comment = (props) => {
  return (
    <div style={styleComment}>
      <h2>Email: {props.email}</h2>
      <p>{props.text}</p>
    </div>
  );
};

const StepCount = () => {
  const [steps, setSteps] = useState(0);
  console.log(steps);
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncreaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  );
};

export default App;
