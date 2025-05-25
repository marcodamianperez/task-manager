import Task from "../Task/Task";
import styles from "./TaskList.module.css";

const initialTasks = [
  {
    id: crypto.randomUUID(),
    taskName: "Buy bread",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    taskName: "Go to gym",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    taskName: "Make dinner",
    completed: true,
  },
];

function TaskList() {
  return (
    <>
      <h2 className={styles.taskListTitle}>Tasks</h2>
      <ul className={styles.taskList}>
        {initialTasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
