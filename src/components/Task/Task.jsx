import Button from "../Button/Button";
import styles from "./Task.module.css";

function Task({ task, onDeleteTask }) {
  return (
    <div className={styles.taskWrapper}>
      <p className={styles.taskText}>{task.text}</p>
      <div className={styles.buttons}>
        <Button type="btnDone">Done</Button>
        <Button type="btnDelete" onClick={() => onDeleteTask(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Task;
