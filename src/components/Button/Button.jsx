import styles from "./Button.module.css";

function Button({ children, onClick, type = "btnDefault", ariaLabel, title }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick} aria-label={ariaLabel} title={title}>
      {children}
    </button>
  );
}

export default Button;
