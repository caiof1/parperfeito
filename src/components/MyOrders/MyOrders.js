// CSS
import styles from "./MyOrders.module.css";

// images
import product from "../../images/produto_teste.png";

const MyOrders = () => {
  return (
    <div className={styles.orders}>
      <h3 className={styles.title}>Meus pedidos</h3>
      <section className={styles.container_orders}>
        <div className={styles.order}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h4 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento, Criativo Dia dos Namorados, Presente da Mãe, Drop
              Shipping... x 2
            </h4>
            <div className={styles.time}>
              <span>Chegará em: 45 dias</span>
            </div>
            <div className={styles.single_value}>
              <span>Valor individual: 109,99</span>
            </div>
            <div className={styles.total_value}>
              <span>Valor total: 219,98</span>
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h4 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento, Criativo Dia dos Namorados, Presente da Mãe, Drop
              Shipping... x 2
            </h4>
            <div className={styles.time}>
              <span>Chegará em: 45 dias</span>
            </div>
            <div className={styles.single_value}>
              <span>Valor individual: 109,99</span>
            </div>
            <div className={styles.total_value}>
              <span>Valor total: 219,98</span>
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h4 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento, Criativo Dia dos Namorados, Presente da Mãe, Drop
              Shipping... x 2
            </h4>
            <div className={styles.time}>
              <span>Chegará em: 45 dias</span>
            </div>
            <div className={styles.single_value}>
              <span>Valor individual: 109,99</span>
            </div>
            <div className={styles.total_value}>
              <span>Valor total: 219,98</span>
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h4 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento, Criativo Dia dos Namorados, Presente da Mãe, Drop
              Shipping... x 2
            </h4>
            <div className={styles.time}>
              <span>Chegará em: 45 dias</span>
            </div>
            <div className={styles.single_value}>
              <span>Valor individual: 109,99</span>
            </div>
            <div className={styles.total_value}>
              <span>Valor total: 219,98</span>
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.img}>
            <img src={product} alt="" />
          </div>
          <div className={styles.info}>
            <h4 className={styles.name_product}>
              Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
              casamento, Criativo Dia dos Namorados, Presente da Mãe, Drop
              Shipping... x 2
            </h4>
            <div className={styles.time}>
              <span>Chegará em: 45 dias</span>
            </div>
            <div className={styles.single_value}>
              <span>Valor individual: 109,99</span>
            </div>
            <div className={styles.total_value}>
              <span>Valor total: 219,98</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
