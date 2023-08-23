// Components
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

// Hooks
import { useLoginAuth } from "../../hooks/useLoginAuth";

// CSS
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsHeader }) => {
  setIsHeader(false);

  const navigate = useNavigate()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login, loading, error, acess} = useLoginAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      email,
      password
    }

    login(data)
  }

  useEffect(() => {
    if(acess) {
      navigate('/')
    }
  }, [acess])

  return (
    <div className={styles.login}>
      <section className={styles.container_login}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.title}>Fazer Login</h3>
          <div className={styles.input_form}>
            <i className={`fa-solid fa-envelope ${styles.icon}`}></i>
            <input type="email" name="" required placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.input_form}>
            <i className={`fa-solid fa-lock ${styles.icon}`}></i>
            <input type="password" name="" required placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className={styles.btn}>Entrar</button>
          <div className={styles.other_method}>Ou use outro método</div>
          <div className={styles.google}>
            <i class="fa-brands fa-google"></i>
          </div>
          {error && <span className={'error'}>{error}</span>}
        </form>
      </section>
      {loading && <Loading />}
    </div>
  );
};

export default Login;
