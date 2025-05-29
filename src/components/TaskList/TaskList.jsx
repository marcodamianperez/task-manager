import { useState } from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.css";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  const [showValue, setShowValue] = useState("all");

  let tasksToShow;

  if (showValue === "all") tasksToShow = tasks;
  if (showValue === "pending") tasksToShow = tasks.filter((task) => !task.completed);
  if (showValue === "completed") tasksToShow = tasks.filter((task) => task.completed);

  return (
    <>
      <div className={styles.flexWrapper}>
        <h2 className={styles.taskListTitle}>Tasks</h2>
        <div>
          <label className={styles.labelSelect} htmlFor="show">
            Show:
          </label>
          <select
            className={styles.showSelect}
            id="show"
            value={showValue}
            onChange={(e) => setShowValue(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <ul className={styles.taskList}>
        {!tasksToShow.length ? (
          <p className={styles.emptyList}>No tasks to show</p>
        ) : (
          tasksToShow.map((task) => (
            <Task task={task} key={task.id} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />
          ))
        )}
      </ul>
    </>
  );
}

export default TaskList;
