import "./App.css";
import CreateTask from "./Components/CreateTask";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import SeeTask from "./Components/SeeTask";
import Switch from "./Components/Switch";
import { TaskProvider } from "./Context/TaskContext";

function App() {
  const storedData = JSON.parse(localStorage.getItem("myDataKey")) || {};

  return (
    <TaskProvider initialValue={storedData}>
      <Nav />
      <Switch />
      <div className="App flex container">
        <Header />
      </div>
    </TaskProvider>
  );
}

export default App;
