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

  // Terminar!!!
  function handleCompleteTask(id) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  return (
    <>
      <Navbar />
      <div className={styles.appContainer}>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} />
      </div>
    </>
  );
}

export default App;
