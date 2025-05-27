import styles from "./Button.module.css";

function Button({ children, onClick, type = "btnDefault" }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
