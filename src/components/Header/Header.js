// Hooks
import { useState } from "react";

// CSS
import styles from "./Header.module.css";
import {useLogoutAuth} from '../../hooks/useLogoutAuth'

// Router
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  const [loginOrRegister, setLoginOrRegister] = useState(false);
  const logout = useLogoutAuth()

  const handleLogout = () => {
    logout()
    setLoginOrRegister(false)
  }

  return (
    <header className={styles.header}>
      <nav className="center">
        <div className={styles.container_header}>
          <div className={styles.logo}>
            <Link to="/">Par Perfeito</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <i
                class="fa-solid fa-user"
                onClick={() =>
                  setLoginOrRegister(
                    (actualLoginOrRegister) => !actualLoginOrRegister
                  )
                }
              ></i>
              {loginOrRegister && (
                <>
                  {!user ? (
                    <div className={styles.menu_suspenso}>
                      <Link to="/register">Cadastrar</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  ) : (
                    <div className={styles.menu_suspenso}>
                      <Link to="/myaccount" onClick={() => setLoginOrRegister(false)}>Minha conta</Link>
                      <span onClick={handleLogout}>Sair</span>
                    </div>
                  )}
                </>
              )}
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
