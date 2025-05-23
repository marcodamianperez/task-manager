import Navbar from "./components/Narvbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import styles from "./App.module.css";
import TaskInput from "./components/TaskInput/TaskInput";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.appContainer}>
        <TaskInput />
        <TaskList />
      </div>
    </>
  );
}

export default App;
