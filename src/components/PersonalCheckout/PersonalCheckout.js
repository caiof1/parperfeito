// hooks
import { useEffect, useState } from "react";

// CSS
import styles from "./PersonalCheckout.module.css";

const PersonalCheckout = ({ setPersonal, personal, setAcess, documents }) => {
  const [name, setName] = useState("");
  const [sobrename, setSobrename] = useState("");
  const [cpf, setCPF] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setPersonal({
      name,
      sobrename: sobrename ? sobrename : "",
      cpf,
      phone,
    });

    setAcess(1);
  };

  useEffect(() => {
    if (personal) {
      setName(personal.name);
      setSobrename(personal.sobrename);
      setCPF(personal.cpf);
      setPhone(personal.phone);
    }
  }, [personal]);

  useEffect(() => {
    setName(documents[0]?.name)
    setSobrename(documents[0]?.sobrename)
    setCPF(documents[0]?.cpf)
    setPhone(documents[0]?.phone)
  }, [documents])

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.name}>
        <i className="fa-solid fa-user"></i>
        <input
          type="text"
          placeholder="Nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.sobrename}>
        <i className="fa-solid fa-user"></i>
        <input
          type="text"
          placeholder="Sobrenome (Opcional)"
          value={sobrename}
          onChange={(e) => setSobrename(e.target.value)}
        />
      </div>
      <div className={styles.cpf}>
        <i class="fa-solid fa-address-card"></i>
        <input
          type="text"
          placeholder="CPF"
          required
          value={cpf}
          onChange={(e) => setCPF(e.target.value)}
        />
      </div>
      <div className={styles.phone}>
        <i className="fa-solid fa-phone"></i>
        <input
          type="text"
          placeholder="Número telefone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {error && <span className="error">{error}</span>}
      <div className={styles.divbtn}>
        <button className={styles.btn}>Ir para Entrega</button>
      </div>
    </form>
  );
};

export default PersonalCheckout;
