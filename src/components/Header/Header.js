import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="center">
        <div className={styles.container_header}>
          <div className={styles.logo}>
            <span>Logo</span>
          </div>
          <ul className={styles.menu}>
            <li>
              <i class="fa-solid fa-user"></i>
            </li>
            <li>
              <i class="fa-solid fa-bag-shopping"></i>
            </li>
            <li>
              <i class="fa-solid fa-heart"></i>
            </li>
          </ul>
        </div>
        <div className={styles.container_form}>
          <form autoComplete="off" className={styles.form}>
            <input
              type="text"
              placeholder="O que você está buscando?"
              className={`${styles.search} input_form`}
            />
            <i class="fa-solid fa-gift"></i>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
