import "./App.css";
import Todo from "../src/components/taskList";
import Empty from "./pages/emptyTodo/index";
import Header from "./components/Header";
import Search from "./components/searchbox";
import Create from "./components/createTask";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Create />
      <Todo />
    </div>
  );
}

export default App;
