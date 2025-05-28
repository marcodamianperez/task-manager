import styles from "./Button.module.css";

function Button({ children, onClick, type = "btnDefault", ariaLabel }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
