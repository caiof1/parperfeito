// Hooks
import { useState } from "react";

// CSS
import styles from "./Header.module.css";
import {useLogoutAuth} from '../../hooks/useLogoutAuth'

// Router
import { Link, useNavigate } from "react-router-dom";
import MiniCart from "../MiniCart/MiniCart";
import { useFetchUser } from "../../hooks/useFetchUser";

const Header = ({ user, setType, setMessage, setTimeMessage }) => {
  const [loginOrRegister, setLoginOrRegister] = useState(false);
  const [active, setActive] = useState(false)

  const logout = useLogoutAuth()

  const [search, setSearch] = useState("")

  const {documents} = useFetchUser(user?.uid, "users")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(search) {
      navigate(`/search?q=${search}`)
      setSearch("")
    }
  }

  const handleLogout = () => {
    logout()
    setLoginOrRegister(false)

    // Message Alert config
    setTimeMessage(true)
    setType('sucess')
    setMessage('Saiu da conta')
  }

  return (
    <header className={styles.header}>
      <div className={styles.black_notification}>
        <span>Frete grátis para todo o Brasil</span>
      </div>
      <nav className="center">
        <div className={styles.container_header}>
          <div className={styles.logo}>
            <Link to="/">Par Perfeito</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <i
                className="fa-solid fa-user"
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
            <li onClick={() => setActive((actualActive) => !actualActive)} className={styles.cart}>
              <i className="fa-solid fa-bag-shopping"></i>
              <div>
                <span>{documents[0]?.cart?.length}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.container_form}>
          <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="O que você está buscando?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`${styles.search} input_form`}
            />
            <i className="fa-solid fa-gift"></i>
          </form>
        </div>
      </nav>
      <MiniCart active={active} setActive={setActive} user={user} />
    </header>
  );
};

export default Header;
