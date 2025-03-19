import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

let firstname = "Arun";
let lastname = "Kumar K"

function App() {
  return (
    <div className="app">
      <Header user={firstname} />
      <Content />
      <Footer user ={lastname} />
    </div>
  );
}

export default App;
