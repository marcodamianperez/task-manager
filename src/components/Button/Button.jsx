import styles from "./Button.module.css";

function Button({ children }) {
  return <div className={`${styles.btn} ${children === "Done" ? styles.btnDone : styles.btnDelete}`}>{children}</div>;
}

export default Button;
