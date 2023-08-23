// CSS
import styles from "./Register.module.css";

// hooks
import { useRegisterAuth } from "../../hooks/useRegisterAuth";
import { useEffect, useState } from "react";

// Router
import {useNavigate} from 'react-router-dom'

// components
import Loading from "../../components/Loading/Loading";

const Register = ({ setIsHeader }) => {
  setIsHeader(false);

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState('')

  const { register, loading, error: registerError, acess } = useRegisterAuth()

  useEffect(() => {
    if(registerError) {
      setError(registerError)
    }
  }, [registerError])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(password !== confirmPassword) {
      setError('As senhas devem ser iguais.')
      return;
    }

    const data = {
      email,
      password,
      name
    }

    register(data)
  }

  useEffect(() => {
    if(acess) {
      navigate('/')
    }
  }, [acess])

  return (
    <div className={styles.register}>
      <section className={styles.container_register}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.title}>Fazer cadastro</h3>
          <div className={styles.input_form}>
            <i className={`fa-solid fa-user ${styles.icon}`}></i>
            <input type="text" name="" required placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.input_form}>
            <i className={`fa-solid fa-envelope ${styles.icon}`}></i>
            <input type="email" name="" required placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.input_form}>
            <i className={`fa-solid fa-lock ${styles.icon}`}></i>
            <input type="password" name="" required placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={styles.input_form}>
            <i className={`fa-solid fa-lock ${styles.icon}`}></i>
            <input type="password" name="" required placeholder="Confirme a senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className={styles.btn}>Cadastrar</button>
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

export default Register;
