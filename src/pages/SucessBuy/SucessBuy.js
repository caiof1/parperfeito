import { Link, useNavigate } from "react-router-dom";
import styles from "./SucessBuy.module.css";

const SucessBuy = ({ setIsHeader, user }) => {
  setIsHeader(false);
  return (
    <div className={styles.sucess}>
      <div className={styles.icon}>
        <i class="fa-solid fa-check"></i>
      </div>
      <h1>
        Opaaa! Você concluiu a sua compra, ficamos felizes por escolher a nossa
        loja :D
      </h1>
      <div>
        <span>O seu pedido será preparado e separado para o envio,</span>
        <span>
          quando isso acontecer, iremos avisar via WhatsApp, por isso e super
          importante que tenha colocado seu número corretamente :D
        </span>
        <span>
          Caso não tenha colocado o seu número corretamente no campo de
          Telefone, nos envie uma mensagem no número: (11) 9 6043-4439 e fale
          com o nosso SAC
        </span>
      </div>
      <span>Espero que tenha um dia Perfeito!</span>
      <Link to="/myaccount">Ver o pedido na minha conta!</Link>
    </div>
  );
};

export default SucessBuy;
