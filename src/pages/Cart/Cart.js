// CSS
import styles from "./Cart.module.css";

// images
import product from "../../images/produto_teste.png";

// Router
import { Link } from "react-router-dom";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useEffect, useState } from "react";
import { useUpdateDoc } from "../../hooks/useUpdateDoc";

const Cart = ({ setIsHeader, user }) => {
  const { documents } = useFetchUser(user?.uid, "users");

  const { updateDocs } = useUpdateDoc("users");

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    if (documents) {
      setSubTotal(0);
      documents[0]?.cart?.map((product) => {
        setSubTotal(
          (actualSubTotal) =>
            actualSubTotal + parseFloat(product.value) * product.qtd
        );

        return null;
      });
    }
  }, [documents]);

  const addQtd = (id) => {
    let contador = 0;
    documents[0].cart.map((product) => {
      if (id === product.id) {
        documents[0].cart[contador].qtd = documents[0].cart[contador].qtd + 1;
      }

      contador = contador + 1;

      return null;
    });
    updateDocs(documents[0].id, documents[0]);
  };

  const removeQtd = (id) => {
    let contador = 0;
    documents[0].cart.map((product) => {
      if (id === product.id && product.qtd > 1) {
        documents[0].cart[contador].qtd = documents[0].cart[contador].qtd - 1;
      }

      contador = contador + 1;

      return null;
    });
    updateDocs(documents[0].id, documents[0]);
  };

  setIsHeader(false);
  return (
    <div className={`${styles.cart} center`}>
      <div className={styles.titlediv}>
        <h3 className={styles.title}>Seu carrinho</h3>
      </div>
      <section
        className={`${styles.products} ${
          documents?.length === 0 && styles.not_products
        }`}
      >
        <>
          {documents?.length === 0 && (
            <div className={styles.no_products}>
              <h3>Carrinho vazio</h3>
            </div>
          )}
          {documents &&
            documents[0]?.cart?.map((product) => (
              <div key={product.id} className={styles.product}>
                <div className={styles.img}>
                  <img src={product.image} alt="" />
                  <span>{product.nameProduct}</span>
                </div>
                <div className={styles.value_qtd}>
                  <div className={styles.selectqtd}>
                    <div
                      onClick={() => removeQtd(product.id)}
                      className={styles.less}
                    >
                      <span>-</span>
                    </div>
                    <input
                      type="number"
                      className={styles.camp_number}
                      value={product.qtd}
                      name=""
                      disabled
                    />
                    <div
                      onClick={() => addQtd(product.id)}
                      className={styles.more}
                    >
                      <span>+</span>
                    </div>
                  </div>
                  <div className={styles.totalproduct}>
                    <span>R$ {parseFloat(product.value) * product.qtd}</span>
                  </div>
                </div>
              </div>
            ))}
        </>
      </section>
      <section className={styles.prices}>
        <div className={styles.subprice}>
          <span>Subtotal:</span>
          <span>R$ {subTotal}</span>
        </div>
        <div className={styles.freteprice}>
          <span>Frete:</span>
          <span>Grátis</span>
        </div>
        <div className={styles.totalprice}>
          <span>Total</span>
          <span>R$ {subTotal}</span>
        </div>
        <Link to="/checkout" className={styles.btndiv}>
          <button className={styles.btn}>Avançar</button>
        </Link>
      </section>
    </div>
  );
};

export default Cart;
