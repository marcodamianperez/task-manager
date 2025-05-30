import styles from "./Navbar.module.css";
import { SiGoogletagmanager } from "react-icons/si";
import ThemeToggle from "../../theme/ThemeToggle";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1 className={styles.title}>
          <a href="/">
            <span className={styles.logo}>
              <SiGoogletagmanager />
            </span>
            <span className={styles.text}>Task Manager</span>
          </a>
        </h1>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
