import Home from "./components/Home";
import Login from "./components/Login";
import TodoApp from "./components/TodoApp";


function App() {
  
  return (
      <div className="app">
        <TodoApp />
        <Home />
        <Login />
      </div>
  );
}


export default App;
