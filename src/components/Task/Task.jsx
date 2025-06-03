import Button from "../Button/Button";
import styles from "./Task.module.css";
import { LuTrash2, LuUndo2 } from "react-icons/lu";
import { MdDone } from "react-icons/md";

function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    <div className={styles.taskWrapper}>
      <p className={`${styles.taskText} ${task.completed && styles.taskTextCompleted}`}>{task.text}</p>
      <div className={styles.buttons}>
        <Button
          type="btnDone"
          ariaLabel={task.completed ? "Mark task as not completed" : "Mark task as completed"}
          onClick={() => onToggleTask(task.id)}
          title={task.completed ? "Undo" : "Mark as completed"}
        >
          {task.completed ? <LuUndo2 /> : <MdDone />}
        </Button>
        <Button type="btnDelete" ariaLabel="Delete Task" onClick={() => onDeleteTask(task.id)} title="Delete">
          <LuTrash2 />
        </Button>
      </div>
    </div>
  );
}

export default Task;
