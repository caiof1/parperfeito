// CSS
import styles from "./MyOrders.module.css";

// hooks
import { useState } from "react";

// images
import product from '../../images/produto_teste.png'

const MyOrders = () => {
  const [active, setActive] = useState();

  return (
    <div className={styles.orders}>
      <h3 className={styles.title}>Meus pedidos</h3>
      <section className={styles.container_orders}>
        <div className={`${styles.order} ${active === 0 && styles.active}`}>
          <div className={styles.exib}>
            <span className={styles.idproduct}>#929sadnnasdmkkasdmksnadk</span>
            {active !== 0 ? (
              <button onClick={() => setActive(0)}>
                <span className={styles.details}>Detalhe do pedido</span> <i className="fa-solid fa-chevron-down"></i>
              </button>
            ) : (
              <button onClick={() => setActive()}>
                <span className={styles.details}>Detalhe do pedido</span> <i className="fa-solid fa-chevron-up"></i>
              </button>
            )}
          </div>
          {active === 0 && (
            <>
              <div className={styles.address}>
                <h3>Endereço:</h3>
                <span>05791-040</span>
                <span>
                  Rua cabeceira de bastos - Jardim Mitsutani - 140 - São Paulo -
                  SP
                </span>
                <span>Casa amarela, portão branco</span>
              </div>
              <div className={styles.alert}>
                <div className={styles.icon}>
                  <span>!</span>
                </div>
                <span>AVISO IMPORTANTE</span>
              </div>
              <div className={styles.messagealert}>
                Garantias e arrependimentos só podem ser solicitadas após o recebimento do produto. Caso haja desistência da compra, pedimos que recuse o produto no ato da entrega.
              </div>
              <section className={styles.products}>
                <div className={styles.product}>
                  <img className={styles.img} src={product} alt="" />
                  <div className={styles.info}>
                    <h4>Flor da bela e a fera com iluminação totalmente linda para a sua namorada, mãe, irma, dropssing</h4>
                    <span>Quantidade: 1</span>
                    <span className={styles.value}>R$ 109,99</span>
                  </div>
                </div>
                <div className={styles.product}>
                  <img className={styles.img} src={product} alt="" />
                  <div className={styles.info}>
                    <h4>Flor da bela e a fera com iluminação totalmente linda para a sua namorada, mãe, irma, dropssing</h4>
                    <span>Quantidade: 1</span>
                    <span className={styles.value}>R$ 109,99</span>
                  </div>
                </div>
                <div className={styles.product}>
                  <img className={styles.img} src={product} alt="" />
                  <div className={styles.info}>
                    <h4>Flor da bela e a fera com iluminação totalmente linda para a sua namorada, mãe, irma, dropssing</h4>
                    <span>Quantidade: 1</span>
                    <span className={styles.value}>R$ 109,99</span>
                  </div>
                </div>
              </section>
              <section className={styles.value_total}>
                <div className={styles.subtotal}>
                  <span>SubTotal:</span>
                  <span>R$ 109,99</span>
                </div>
                <div className={styles.frete}>
                  <span>Frete:</span>
                  <span>Grátis</span>
                </div>
                <div className={styles.total}>
                  <span>Total:</span>
                  <span>R$ 109,99</span>
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
