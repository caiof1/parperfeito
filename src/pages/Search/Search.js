import styles from "./Search.module.css";

import banner1 from "../../images/banner_principal.png";
import AllProducts from "../../components/AllProducts/AllProducts";

import { useQuery } from "../../hooks/useQuery";
import { useFetchSearch } from "../../hooks/useFetchSearch";
import { useNavigate } from "react-router-dom";

const Search = ({ setIsHeader }) => {
  const query = useQuery();
  const search = query.get("q");

  const navigate = useNavigate()
  const { documents } = useFetchSearch(search, "products");

  setIsHeader(true);

  console.log(documents);

  return (
    <div className={`${styles.category} center`}>
      <div className={styles.banner}>
        <img src={banner1} alt="" />
      </div>
      {documents &&
        documents.map((doc) => (
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
        ))}

        {documents && documents.length === 0 && (
            <span>Nenhum produto encontrado...</span>
        )}
    </div>
  );
};

export default Search;
