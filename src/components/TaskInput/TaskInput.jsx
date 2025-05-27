import { useState } from "react";
import styles from "./TaskInput.module.css";

function TaskInput({ onAddTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input === "") return;
    onAddTask(input);
    setInput("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="taskInput"
        type="text"
        placeholder="Add a new task"
        className={styles.taskInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default TaskInput;
