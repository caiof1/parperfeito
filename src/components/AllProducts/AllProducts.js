import styles from "./AllProducts.module.css";
import { useNavigate, useParams } from "react-router-dom";

const AllProducts = ({ documents }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <div className={styles.all_products}>
      {documents &&
        documents.map((doc) => (
          <>
            {doc.category === id && (
              <div
                className={styles.product}
                onClick={() => navigate(`/pdp/${doc.id}`)}
              >
                <div className={styles.product_single}>
                  <span className={styles.discount}>
                    {parseInt(
                      (parseInt(doc.variacoes[0].value) /
                        parseInt(doc.variacoes[0].valueTotal)) *
                        100 -
                        100
                    )}
                    %
                  </span>
                  <div className={styles.img_product}>
                    <img src={doc.variacoes[0]?.imgVariacao} alt="" />
                  </div>
                  <p className={styles.name_product}>{doc.nameProduct}</p>
                  <div className={styles.stars}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span>({doc.avaliations?.length})</span>
                  </div>
                  <div className={styles.prices}>
                    <span className={styles.price_total}>
                      R$ {doc.variacoes[0]?.valueTotal}
                    </span>
                    <div className={styles.price_discount}>
                      <span className={styles.price}>
                        R$ {doc.variacoes[0]?.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}

      {documents && documents.length === 0 && (
        <span>Nenhum produto encontrado...</span>
      )}
    </div>
  );
};

export default AllProducts;
