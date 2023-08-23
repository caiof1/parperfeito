import styles from "./HeaderSimple.module.css";

const HeaderSimple = () => {
  return (
    <header className={styles.header}>
      <span className={styles.back}>
        <i class="fa-solid fa-chevron-left"></i>
      </span>
      <h2 className={styles.logo}>Logo</h2>
    </header>
  );
};

export default HeaderSimple;
