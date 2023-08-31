// CSS
import styles from "./MiniCart.module.css";

// images
import product from "../../images/produto_teste.png";

// Router
import { Link } from "react-router-dom";

const MiniCart = ({ active, setActive }) => {
  return (
    <div className={`${styles.cart} ${active && styles.active}`}>
      <div className={styles.close}>
        <h2>Carrinho</h2>
        <i className="fa-solid fa-xmark" onClick={() => setActive(false)}></i>
      </div>
      <section className={styles.products}>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </h3>
            <span className={styles.value_product}>R$ 109,90</span>
            <i className={`fa-solid fa-trash ${styles.icon}`}></i>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </h3>
            <span className={styles.value_product}>R$ 109,90</span>
            <i className={`fa-solid fa-trash ${styles.icon}`}></i>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </h3>
            <span className={styles.value_product}>R$ 109,90</span>
            <i className={`fa-solid fa-trash ${styles.icon}`}></i>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </h3>
            <span className={styles.value_product}>R$ 109,90</span>
            <i className={`fa-solid fa-trash ${styles.icon}`}></i>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </h3>
            <span className={styles.value_product}>R$ 109,90</span>
            <i className={`fa-solid fa-trash ${styles.icon}`}></i>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </h3>
            <span className={styles.value_product}>R$ 109,90</span>
            <i className={`fa-solid fa-trash ${styles.icon}`}></i>
          </div>
        </div>
      </section>
      <div className={styles.total}>
        <div className={styles.subtotal}>
          <div className={styles.sub}>
            <span>Subtotal:</span>
            <span>R$ 299,99</span>
          </div>
          <div className={styles.frete}>
            <span>Frete:</span>
            <span>Grátis</span>
          </div>
        </div>
        <div className={styles.valuetotal}>
          <span>Total:</span>
          <span>R$ 299,99</span>
        </div>
      </div>
      <div className={styles.btndiv}>
        <Link onClick={() => setActive(false)} to="/cart">
          <button className={styles.btn}>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};

export default MiniCart;
