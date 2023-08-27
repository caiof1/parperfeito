// CSS
import styles from "./Footer.module.css";

// images
import visa from "../../images/pagamento1.png";
import boleto from "../../images/pagamento2.png";
import mercadoPago from "../../images/pagamento3.png";
import masterCard from "../../images/pagamento4.png";
import pix from "../../images/pagamento5.png";

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
                    <span>caionl2071@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.info_single}>
              <h4 className={styles.title}>Formas de pagamento</h4>
              <div className={styles.img_payment}>
                <img src={visa} alt="" />
                <img src={boleto} alt="" />
                <img src={mercadoPago} alt="" />
                <img src={masterCard} alt="" />
                <img src={pix} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
