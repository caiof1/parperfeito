// CSS
import { useFetchDocs } from "../../hooks/useFetchDocs";
import Loading from "../Loading/Loading";
import styles from "./CreateCategory.module.css";

const CreateCategory = ({ setRenderComponents }) => {
  const { documents, loading, error } = useFetchDocs("categorys");

  return (
    <div>
      <div className={styles.button}>
        <h3 className={styles.title}>Categorias</h3>
        <button className={styles.btn} onClick={() => setRenderComponents(6)}>
          Criar categoria
        </button>
      </div>
      <div className={styles.personal}>
        <h4>Categorias criadas.</h4>
      </div>
      <section className={styles.categorys}>
        {documents &&
          documents.map((doc) => (
            <div className={styles.category}>
              <img src={doc.urlCategory} alt="" />
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          ))}
      </section>
      {loading && <Loading />}
    </div>
  );
};

export default CreateCategory;
