import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: blue;
  color: white;
`;

const CounterApp = () => {
  // let count = 0;

  const [count, setCount] = useState(0);
  const [data, setData] = useState("Success");

  let message;
  let remainingClick = 10 - count;

  function returnState() {
    console.log(100);
    return 100;
  }

  let [sample, setSample] = useState(() => returnState());

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
    // count +=1
    // console.log(count)
  }

  function resetCount(){
    setCount(prevCount => prevCount = 0)
  }

  if (count < 10) {
    message = (
      <div>
        <h3> You Clicked {count} times </h3>
        <p> Still {remainingClick} more times to reach a 10% discount </p>
      </div>
    );
  } else if (count === 10) {
    message = (
      <div>
        <h3> You Clicked {count} times </h3>
        <p> You Unlocked a 10% discount </p>
      </div>
    );
  } else if (count < 20) {
    message = (
      <div>
        <h3> You Clicked {count} times </h3>
        <p>
          {" "}
          You're on the way to get more rewards! Keep clicking for 20% discount{" "}
        </p>
      </div>
    );
  } else {
    message = (
      <div>
        <h3> You Clicked {count} times </h3>
        <p> Awesome! You got 20% discount! </p>
      </div>
    );
  }

  let displayComp = () => {
    switch (data) {
      case "Loading":
        return <LoadingComp />;
        break;
      case "Success":
        return <SuccessComp />;
        break;
      case "Error":
        return <ErrorComp />;
        break;
    }
  };

  return (
    <div>
      <h1> Click to Unlock Rewards 🎁</h1>
      <Button onClick={handleIncrease}> Click Me!!!</Button>
      {message}
      {
        count >= 30 && <Button onClick={resetCount}>Reset Click</Button>
      }

      { displayComp() }
      {/* {count >= 10 ? (
        <p> You unlocked a 10% Discount</p>
      ) : (
        <p> Click 10 times to unlock reward</p>
      )}

      {
        count >= 20 && <p>You are a click master </p>
      } */}
    </div>
  );
};

export default CounterApp;

function LoadingComp() {
  return <h1> Loading... </h1>;
}

function SuccessComp() {
  return <h6> Success ❤️ </h6>;
}

function ErrorComp() {
  return <h6> Error 😭 </h6>;
}
