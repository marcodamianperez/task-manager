import styles from "./Navbar.module.css";
import { TbTriangleInvertedFilled } from "react-icons/tb";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.logo}>
            <TbTriangleInvertedFilled />
          </span>
          <span className={styles.text}>Task Manager</span>
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
