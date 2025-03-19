import React from "react";
import styled from "styled-components"

let Button = styled.button`
background-color : blue;
color: white;
width: 100px;
height: 50px;
`

let NewButton = styled(Button)`
background-color: red;
box-shadow: 10px 10px 10px black;
`

const Content = () => {
  let headingStyle = {
    backgroundColor: "red",
    color: "white",
    boxShadow: "10px 10px 5px black",
  };

  let user = "Arun"


  function printSomething(e){
    // console.log(e.target.innerText)

    // console.log("Hello")
    user = "Welcome, Arun"
    console.log(user)
  }
  
  function printSomething1(event){
    // console.log(event.target.innerText)
    // console.log("Hello World!!!")
    user = "Thank you, Arun Kumar"
    console.log(user)
  } 

  return (
    <main>
      <h1 style={headingStyle}> Main Content - {user}</h1>
      <Button onClick={printSomething}> Click Me! </Button>
      <NewButton onClick={ (e)=> printSomething1(e)}> Duplicate </NewButton>
    </main>
  );
};

export default Content;
