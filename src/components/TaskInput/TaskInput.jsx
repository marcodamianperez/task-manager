import styles from "./TaskInput.module.css";

function TaskInput() {
  return (
    <form className={styles.form}>
      <input id="taskInput" type="text" placeholder="Add a new task" className={styles.taskInput} />
    </form>
  );
}

export default TaskInput;
