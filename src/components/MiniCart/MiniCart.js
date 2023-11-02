// CSS
import styles from "./MiniCart.module.css";

// images
import product from "../../images/produto_teste.png";

// Router
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MiniCart = ({ active, setActive, documents }) => {

  const [subTotal, setSubTotal] = useState(0)
  
  
  useEffect(() => {
    if(documents) {
      setSubTotal(0)
      documents.cart?.map((product) => {

        setSubTotal((actualSubTotal) =>  actualSubTotal + (parseFloat(product.value) * product.qtd))

        return null
      })
    }
  }, [documents])

  return (
    <div className={`${styles.cart} ${active && styles.active}`}>
      <div className={styles.close}>
        <h2>Carrinho</h2>
        <i className="fa-solid fa-xmark" onClick={() => setActive(false)}></i>
      </div>
      <section className={styles.products}>
        {documents?.cart?.map((product) => (
          <div className={styles.product}>
            <div className={styles.img}>
              <img src={product.image} alt="" />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name_product}>
                {product.nameProduct} * {product.qtd}
              </h3>
              <span className={styles.value_product}>R$ {parseFloat(product.value) * product.qtd}</span>
              <i className={`fa-solid fa-trash ${styles.icon}`}></i>
            </div>
          </div>
        ))}
        {documents?.cart?.length === 0 && (
          <p>Carrinho vazio</p>
        )}
      </section>
      <div className={styles.total}>
        <div className={styles.subtotal}>
          <div className={styles.sub}>
            <span>Subtotal:</span>
            <span>R$ {subTotal}</span>
          </div>
          <div className={styles.frete}>
            <span>Frete:</span>
            <span>Grátis</span>
          </div>
        </div>
        <div className={styles.valuetotal}>
          <span>Total:</span>
          <span>R$ {subTotal}</span>
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
