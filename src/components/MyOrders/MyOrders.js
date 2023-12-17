// CSS
import styles from "./MyOrders.module.css";

// hooks
import { useEffect, useState } from "react";

// images
import { useFetchDocs } from "../../hooks/useFetchDocs";
import { useFetchUser } from "../../hooks/useFetchUser";

const MyOrders = ({ user }) => {
  const [active, setActive] = useState();

  const { documents } = useFetchDocs("orders");

  const { documents: profile } = useFetchUser(user?.uid, "users");

  console.log(profile);

  return (
    <div className={styles.orders}>
      <h3 className={styles.title}>Meus pedidos</h3>
      {documents &&
        documents.map((doc) => (
          <>
            {doc.uid === user.uid && profile[0]?.ID === 0 && (
              <section className={styles.container_orders}>
                <div
                  className={`${styles.order} ${
                    active === doc.id && styles.active
                  }`}
                >
                  <div className={styles.exib}>
                    <span className={styles.idproduct}>
                      Status: {doc.status}
                    </span>
                    {active !== doc.id ? (
                      <button onClick={() => setActive(doc.id)}>
                        <span className={styles.details}>
                          Detalhe do pedido
                        </span>{" "}
                        <i className="fa-solid fa-chevron-down"></i>
                      </button>
                    ) : (
                      <button onClick={() => setActive()}>
                        <span className={styles.details}>
                          Detalhe do pedido
                        </span>{" "}
                        <i className="fa-solid fa-chevron-up"></i>
                      </button>
                    )}
                  </div>
                  {active === doc.id && (
                    <>
                      
                      <div className={styles.address}>
                        <h3>Dados pessoais:</h3>
                        <span>{doc.name}</span>
                        <span>{doc.phone}</span>
                      </div>
                      <div className={styles.address}>
                        <h3>Endereço:</h3>
                        <span>{doc.cep}</span>
                        <span>
                          {doc.adress} - {doc.bairro} - {doc.number} -{" "}
                          {doc.city} - {doc.state}
                        </span>
                        <span>{doc.complement}</span>
                      </div>
                      <div className={styles.alert}>
                        <div className={styles.icon}>
                          <span>!</span>
                        </div>
                        <span>AVISO IMPORTANTE</span>
                      </div>
                      <div className={styles.messagealert}>
                        Garantias e arrependimentos só podem ser solicitadas
                        após o recebimento do produto. Caso haja desistência da
                        compra, pedimos que recuse o produto no ato da entrega.
                      </div>
                      <section className={styles.products}>
                        {doc.products &&
                          doc.products.map((product) => (
                            <div className={styles.product}>
                              <img
                                className={styles.img}
                                src={product.image}
                                alt=""
                              />
                              <div className={styles.info}>
                                <h4>
                                  {product.nameProduct} - {product.variacao}
                                </h4>
                                <span>Quantidade: {product.qtd}</span>
                                <span className={styles.value}>
                                  R$ {product.value}
                                </span>
                              </div>
                            </div>
                          ))}
                      </section>
                      <section className={styles.value_total}>
                        <div className={styles.subtotal}>
                          <span>SubTotal:</span>
                          <span>R$ {documents[0].value}</span>
                        </div>
                        <div className={styles.frete}>
                          <span>Frete:</span>
                          <span>Grátis</span>
                        </div>
                        <div className={styles.total}>
                          <span>Total:</span>
                          <span>R$ {documents[0].value}</span>
                        </div>
                      </section>
                    </>
                  )}
                </div>
              </section>
            )}

            {profile[0]?.ID === 1 && (
              <section className={styles.container_orders}>
                <div
                  className={`${styles.order} ${
                    active === doc.id && styles.active
                  }`}
                >
                  <div className={styles.exib}>
                    <span className={styles.idproduct}>
                      Status: {doc.status}
                    </span>
                    {active !== doc.id ? (
                      <button onClick={() => setActive(doc.id)}>
                        <span className={styles.details}>
                          Detalhe do pedido
                        </span>{" "}
                        <i className="fa-solid fa-chevron-down"></i>
                      </button>
                    ) : (
                      <button onClick={() => setActive()}>
                        <span className={styles.details}>
                          Detalhe do pedido
                        </span>{" "}
                        <i className="fa-solid fa-chevron-up"></i>
                      </button>
                    )}
                  </div>
                  {active === doc.id && (
                    <>
                      <div className={styles.address}>
                        <h3>Dados pessoais:</h3>
                        <span>Nome: {doc.name}</span>
                        <span>Telefone: {doc.phone}</span>
                      </div>
                      <div className={styles.address}>
                        <h3>Endereço:</h3>
                        <span>{doc.cep}</span>
                        <span>
                          {doc.adress} - {doc.bairro} - {doc.number} -{" "}
                          {doc.city} - {doc.state}
                        </span>
                        <span>{doc.complement}</span>
                      </div>
                      <div className={styles.alert}>
                        <div className={styles.icon}>
                          <span>!</span>
                        </div>
                        <span>AVISO IMPORTANTE</span>
                      </div>
                      <div className={styles.messagealert}>
                        Garantias e arrependimentos só podem ser solicitadas
                        após o recebimento do produto. Caso haja desistência da
                        compra, pedimos que recuse o produto no ato da entrega.
                      </div>
                      <section className={styles.products}>
                        {doc.products &&
                          doc.products.map((product) => (
                            <div className={styles.product}>
                              <img
                                className={styles.img}
                                src={product.image}
                                alt=""
                              />
                              <div className={styles.info}>
                                <h4>
                                  {product.nameProduct} - {product.variacao}
                                </h4>
                                <span>Quantidade: {product.qtd}</span>
                                <span className={styles.value}>
                                  R$ {product.value}
                                </span>
                              </div>
                            </div>
                          ))}
                      </section>
                      <section className={styles.value_total}>
                        <div className={styles.subtotal}>
                          <span>SubTotal:</span>
                          <span>R$ {documents[0].value}</span>
                        </div>
                        <div className={styles.frete}>
                          <span>Frete:</span>
                          <span>Grátis</span>
                        </div>
                        <div className={styles.total}>
                          <span>Total:</span>
                          <span>R$ {documents[0].value}</span>
                        </div>
                      </section>
                    </>
                  )}
                </div>
              </section>
            )}
          </>
        ))}
    </div>
  );
};

export default MyOrders;
