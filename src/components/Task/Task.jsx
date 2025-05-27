import Button from "../Button/Button";
import styles from "./Task.module.css";

function Task({ task }) {
  return (
    <div className={styles.taskWrapper}>
      <p className={styles.taskText}>{task.text}</p>
      <div className={styles.buttons}>
        <Button>Done</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
}

export default Task;
