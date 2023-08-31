// CSS
import styles from "./CreateProduct.module.css";

const CreateProduct = ({setRenderComponents}) => {
  return (
    <div className={styles.create_product}>
      <div className={styles.button}>
        <h3 className={styles.title}>Produtos</h3>
        <button className={styles.btn} onClick={() => setRenderComponents(4)}>Criar produto</button>
      </div>
      <div className={styles.personal}>
        <h4>Produtos criados.</h4>
      </div>
    </div>
  );
};

export default CreateProduct;
