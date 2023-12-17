// CSS
import styles from "./NewCategory.module.css";

// hooks
import { useEffect, useState } from "react";
import {useInsertDoc} from '../../hooks/useInsertDoc'

// components
import Loading from '../../components/Loading/Loading'

const NewCategory = ({ setRenderComponents }) => {
  const [nameCategory, setNameCategory] = useState("");
  const [urlCategory, setUrlCategory] = useState("");

  const {insertDoc, loading, error, acess} = useInsertDoc('categorys', 'Não podemos criar a sua categoria')

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      nameCategory,
      urlCategory
    }

    insertDoc(data)
  }

  useEffect(() => {
    if(acess) {
      setRenderComponents(5)
    }
  }, [acess])

  return (
    <div>
      <button onClick={() => setRenderComponents(5)} className={styles.back}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.name_category}>
          <input
            type="text"
            placeholder="Nome da categoria"
            required
            value={nameCategory}
            onChange={(e) => setNameCategory(e.target.value)}
          />
        </div>
        <div className={styles.url_category}>
          <input
            type="text"
            placeholder="Url da imagem da categoria"
            required
            value={urlCategory}
            onChange={(e) => setUrlCategory(e.target.value)}
          />
        </div>
        {urlCategory && (
          <div className={styles.img_principal}>
            <img src={urlCategory} alt="" />
          </div>
        )}
        <div className={styles.btndiv}>
          <button className={styles.btn}>Criar categoria</button>
        </div>
      </form>
      {loading && <Loading />}
    </div>
  );
};

export default NewCategory;
