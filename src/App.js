import "./App.css";
import Todo from "../src/components/taskList";
import Header from "./components/Header";
import Search from "./components/searchbox";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />

      {/* <Empty /> */}
      <Todo />
    </div>
  );
}

export default App;
