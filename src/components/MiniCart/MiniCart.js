// CSS
import styles from "./MiniCart.module.css";

// Router
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useUpdateDoc } from "../../hooks/useUpdateDoc";

const MiniCart = ({ active, setActive, user }) => {
  const [subTotal, setSubTotal] = useState(0);

  const { documents } = useFetchUser(user?.uid, "users");

  const [cart, setCart] = useState([]);

  const { updateDocs } = useUpdateDoc("users");

  useEffect(() => {
    if (documents[0]) {
      setSubTotal(0);
      documents[0].cart?.map((product) => {
        setSubTotal(
          (actualSubTotal) =>
            actualSubTotal + parseFloat(product.value) * product.qtd
        );

        return null;
      });
    }
  }, [documents]);

  useEffect(() => {
    setCart(documents[0]?.cart);
  }, [documents]);

  const handleDelete = (product) => {
    setCart((actualCart) =>
      actualCart.filter((element) => element.id !== product.id)
    );
  };

  useEffect(() => {
    const newObject = {
      adress: documents[0]?.adress,
      ID: documents[0]?.ID,
      avaliations: documents[0]?.avaliations,
      bairro: documents[0]?.bairro,
      cep: documents[0]?.cep,
      city: documents[0]?.city,
      complement: documents[0]?.complement,
      cpf: documents[0]?.cpf,
      createAt: documents[0]?.createAt,
      email: documents[0]?.email,
      id: documents[0]?.id,
      name: documents[0]?.name,
      orders: documents[0]?.orders,
      phone: documents[0]?.phone,
      state: documents[0]?.state,
      subName: documents[0]?.subName,
      uid: documents[0]?.uid,
      cart,
    };

    console.log(documents[0]?.id);

    updateDocs(documents[0]?.id, newObject);
  }, [cart]);

  return (
    <div className={`${styles.cart} ${active && styles.active}`}>
      <div className={styles.close}>
        <h2>Carrinho</h2>
        <i className="fa-solid fa-xmark" onClick={() => setActive(false)}></i>
      </div>
      <section
        className={`${styles.products} ${
          cart?.length === 0 && styles.not_products
        }`}
      >
        {cart?.map((product) => (
          <div className={styles.product}>
            <div className={styles.img}>
              <img src={product.image} alt="" />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name_product}>
                {product.nameProduct} * {product.qtd}
              </h3>
              <span className={styles.value_product}>
                R$ {parseFloat(product.value) * product.qtd}
              </span>
              <i
                onClick={() => handleDelete(product)}
                className={`fa-solid fa-trash ${styles.icon}`}
              ></i>
            </div>
          </div>
        ))}
        {cart?.length === 0 && (
          <p className={styles.no_products}>Carrinho vazio</p>
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
      {cart?.length > 0 && (
        <div className={styles.btndiv}>
          <Link onClick={() => setActive(false)} to="/cart">
            <button className={styles.btn}>Finalizar compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
