// CSS
import styles from "./HeaderSimple.module.css";

// Router
import { Link } from "react-router-dom";

const HeaderSimple = () => {
  return (
    <header className={styles.header}>
      <Link to={-1} className={styles.back}>
        <i class="fa-solid fa-chevron-left"></i>
      </Link>
      <Link to="/" className={styles.logo}>Par Perfeito</Link>
    </header>
  );
};

export default HeaderSimple;
