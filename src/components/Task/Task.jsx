import Button from "../Button/Button";
import styles from "./Task.module.css";

function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    <div className={styles.taskWrapper}>
      <p className={`${styles.taskText} ${task.completed && styles.taskTextCompleted}`}>{task.text}</p>
      <div className={styles.buttons}>
        <Button
          type="btnDone"
          ariaLabel={task.completed ? "Mark task as not completed" : "Mark task as completed"}
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Done"}
        </Button>
        <Button type="btnDelete" ariaLabel="Delete Task" onClick={() => onDeleteTask(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Task;
