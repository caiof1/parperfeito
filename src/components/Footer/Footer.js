// CSS
import styles from "./Footer.module.css";

// images
import visa from "../../images/pagamento1.png";
import mercadoPago from "../../images/pagamento3.png";
import masterCard from "../../images/pagamento4.png";

import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={`${styles.container_footer} center`}>
        <div className={styles.container_info}>
          <span className={styles.logo}>Par Perfeito</span>
          <div className={styles.info}>
            <div className={styles.info_single}>
              <h4 className={styles.title}>Contate-me</h4>
              <div className={styles.contact}>
                <div>
                  <i class="fa-brands fa-whatsapp"></i>
                  <div>
                    <span>WhatsApp</span>
                    <span>(11) 96043-4439</span>
                  </div>
                </div>
                <div>
                  <i class="fa-solid fa-envelope"></i>
                  <div>
                    <span>E-mail</span>
                    <span>sacparperfeito@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.info_single}>
              <h4 className={styles.title}>Redes Sociais</h4>
              <div className={styles.img_payment}>
                <img src={masterCard} alt="" />
                <img src={mercadoPago} alt="" />
                <img src={visa} alt="" />
              </div>
            </div>
            <div className={styles.info_single}>
              <h4 className={styles.title}>Redes Sociais</h4>
              <div className={styles.img_payment}>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100095367280504"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" href="https://www.instagram.com/parperfeito.official/"><i class="fa-brands fa-instagram"></i></a>
                <a target="_blank" href="https://wa.me/11960434439"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
