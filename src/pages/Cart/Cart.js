// CSS
import styles from "./Cart.module.css";

// images
import product from "../../images/produto_teste.png";

// Router
import { Link } from "react-router-dom";

const Cart = ({ setIsHeader }) => {
  setIsHeader(false);
  return (
    <div className={`${styles.cart} center`}>
      <div className={styles.titlediv}>
        <h3 className={styles.title}>Seu carrinho</h3>
      </div>
      <section className={styles.products}>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
            <span>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </span>
          </div>
          <div className={styles.value_qtd}>
            <div className={styles.selectqtd}>
              <div className={styles.less}>
                <span>-</span>
              </div>
              <input
                type="number"
                className={styles.camp_number}
                value={1}
                name=""
              />
              <div className={styles.more}>
                <span>+</span>
              </div>
            </div>
            <div className={styles.totalproduct}>
              <span>R$ 159,90</span>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
            <span>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </span>
          </div>
          <div className={styles.value_qtd}>
            <div className={styles.selectqtd}>
              <div className={styles.less}>
                <span>-</span>
              </div>
              <input
                type="number"
                className={styles.camp_number}
                value={1}
                name=""
              />
              <div className={styles.more}>
                <span>+</span>
              </div>
            </div>
            <div className={styles.totalproduct}>
              <span>R$ 159,90</span>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
            <span>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </span>
          </div>
          <div className={styles.value_qtd}>
            <div className={styles.selectqtd}>
              <div className={styles.less}>
                <span>-</span>
              </div>
              <input
                type="number"
                className={styles.camp_number}
                value={1}
                name=""
              />
              <div className={styles.more}>
                <span>+</span>
              </div>
            </div>
            <div className={styles.totalproduct}>
              <span>R$ 159,90</span>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
            <span>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </span>
          </div>
          <div className={styles.value_qtd}>
            <div className={styles.selectqtd}>
              <div className={styles.less}>
                <span>-</span>
              </div>
              <input
                type="number"
                className={styles.camp_number}
                value={1}
                name=""
              />
              <div className={styles.more}>
                <span>+</span>
              </div>
            </div>
            <div className={styles.totalproduct}>
              <span>R$ 159,90</span>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={product} alt="" />
            <span>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento
            </span>
          </div>
          <div className={styles.value_qtd}>
            <div className={styles.selectqtd}>
              <div className={styles.less}>
                <span>-</span>
              </div>
              <input
                type="number"
                className={styles.camp_number}
                value={1}
                name=""
              />
              <div className={styles.more}>
                <span>+</span>
              </div>
            </div>
            <div className={styles.totalproduct}>
              <span>R$ 159,90</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.prices}>
        <div className={styles.subprice}>
          <span>Subtotal:</span>
          <span>R$ 109,99</span>
        </div>
        <div className={styles.freteprice}>
          <span>Frete:</span>
          <span>Grátis</span>
        </div>
        <div className={styles.totalprice}>
          <span>Total</span>
          <span>R$ 109,99</span>
        </div>
        <Link to="/checkout" className={styles.btndiv}>
          <button className={styles.btn}>Avançar</button>
        </Link>
      </section>
    </div>
  );
};

export default Cart;
