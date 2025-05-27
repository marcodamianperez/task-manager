import Task from "../Task/Task";
import styles from "./TaskList.module.css";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <>
      <h2 className={styles.taskListTitle}>Tasks</h2>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <Task task={task} key={task.id} onDeleteTask={onDeleteTask} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
