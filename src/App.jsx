import Navbar from "./components/Narvbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import styles from "./App.module.css";
import TaskInput from "./components/TaskInput/TaskInput";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(taskText) {
    const newTask = { id: crypto.randomUUID(), text: taskText, completed: false };
    setTasks((prev) => [...prev, newTask]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <Navbar />
      <div className={styles.appContainer}>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </>
  );
}

export default App;
