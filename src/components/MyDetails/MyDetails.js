// CSS
import styles from "./MyDetails.module.css";

const MyDetails = () => {
  return (
    <div className={styles.details}>
      <h3 className={styles.title}>Meus detalhes</h3>
      <div className={styles.personal}>
        <h4>Informações pessoais</h4>
      </div>
      <form className={styles.form_personal}>
        <div className={styles.input_name}>
          <div className={styles.name}>
            <i className="fa-solid fa-user"></i>
            <input type="text" name="" placeholder="Primeiro nome" required />
          </div>
          <div className={styles.second_name}>
            <i className="fa-solid fa-user"></i>
            <input type="text" name="" placeholder="Sobrenome" required />
          </div>
        </div>
        <div className={styles.input_phone}>
          <div className={styles.cpf}>
            <i class="fa-solid fa-address-card"></i>
            <input type="text" name="" placeholder="CPF" required />
          </div>
          <div className={styles.phone}>
            <i className="fa-solid fa-phone"></i>
            <input type="number" name="" placeholder="Telefone" required />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyDetails;
