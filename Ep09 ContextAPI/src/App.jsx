import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useState, createContext } from "react";

export let UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    uName: "Arun",
    age: 32,
    email: "arun@gmail.com",
  });


  // console.log(UserContext)

  return (
  <UserContext.Provider value={{user}}>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
