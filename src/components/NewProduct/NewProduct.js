// CSS
import styles from "./NewProduct.module.css";

// hooks
import { useState } from "react";

const NewProduct = ({ setRenderComponents }) => {
  const [imgVariacao, setImgVariacao] = useState("");
  const [valueTotal, setValueTotal] = useState("");
  const [value, setValue] = useState("");
  const [variacoes, setVaricoes] = useState([]);

  const [stars, setStars] = useState('')
  const [nameClient, setNameClient] = useState('')
  const [description, setDescription] = useState('')
  const [avaliations, setAvaliations] = useState([])

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCreate = () => {
    setError("");

    if (imgVariacao === "" || valueTotal === "" || value === "") {
      setError("Faltou preencher algum campo.");
      return;
    }

    const varProduct = {
      imgVariacao,
      valueTotal,
      value,
    };

    setVaricoes((actualVaricoes) => [...actualVaricoes, varProduct]);

    setImgVariacao("");
    setValueTotal("");
    setValue("");
  };

  const handleCreateAvaliation = () => {
    setError("");

    if (stars === "" || nameClient === "" || description === "") {
      setError("Faltou preencher algum campo.");
      return;
    }

    const varProduct = {
      stars,
      nameClient,
      description,
    };

    setAvaliations((actualAvaliations) => [...actualAvaliations, varProduct]);

    setStars("");
    setNameClient("");
    setDescription("");
  };

  const deleteVariacao = (vari) => {
    setVaricoes((actualVaricoes) => actualVaricoes.filter(element => element !== vari));
  };

  const deleteAvaliation = (avaliation) => {

    setAvaliations((actualAvaliations) => actualAvaliations.filter(element => element !== avaliation));
  };

  return (
    <div className={styles.newproduct}>
      <button onClick={() => setRenderComponents(3)} className={styles.back}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <form onSubmit={handleSubmit} className={styles.form_create}>
        <div className={styles.nameproduct}>
          <input type="text" placeholder="Nome do produto" />
        </div>
        <div className={styles.description}>
          <textarea
            placeholder="Descrição do produto"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className={styles.sales}>
          <input type="text" placeholder="Total vendidos" />
        </div>
        <div className={styles.personal}>
          <h4>Variações do produto</h4>
        </div>
        <div className={styles.variacao}>
          <input
            type="text"
            placeholder="Imagem da variação"
            value={imgVariacao}
            onChange={(e) => setImgVariacao(e.target.value)}
          />
        </div>
        {imgVariacao && (
          <div className={styles.previewimg}>
            <img className={styles.preview} src={imgVariacao} alt="" />
          </div>
        )}
        <div className={styles.discount_variacao}>
          <input
            type="text"
            placeholder="Valor total"
            value={valueTotal}
            onChange={(e) => setValueTotal(e.target.value)}
          />
        </div>
        <div className={styles.value_variacao}>
          <input
            type="text"
            placeholder="Valor da variação"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button onClick={handleCreate} type="button" className={styles.btn}>
          Criar variação
        </button>
        {error && (
          <div className={styles.error}>
            <span className="error">{error}</span>
          </div>
        )}
        <div className={styles.personal}>
          <h4>Variações criadas</h4>
        </div>
        {variacoes.length === 0 && (
          <div className={styles.error}>
            <span>Nenhuma variação criada</span>
          </div>
        )}
        <section className={styles.product_variacoes}>
          {variacoes &&
            variacoes.map((vari) => (
              <div className={styles.product_variacao}>
                <div
                  className={styles.delete}
                  onClick={() => deleteVariacao(vari)}
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
                <img className={styles.img} src={vari.imgVariacao} alt="" />
                <span className={styles.valuetotal}>R$ {vari.valueTotal}</span>
                <span className={styles.valuediscount}>R$ {vari.value}</span>
              </div>
            ))}
        </section>
        <div className={styles.personal}>
          <h4>Cadastrar avaliação</h4>
        </div>
        <div className={styles.variacao}>
          <input
            type="text"
            placeholder="Estrelas"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
          />
        </div>
        <div className={styles.discount_variacao}>
          <input
            type="text"
            placeholder="Nome do cliente"
            value={nameClient}
            onChange={(e) => setNameClient(e.target.value)}
          />
        </div>
        <div className={styles.value_variacao}>
          <textarea
            placeholder="Texto da Avaliação"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button onClick={handleCreateAvaliation} type="button" className={styles.btn}>
          Cadastrar avaliação
        </button>
        {error && (
          <div className={styles.error}>
            <span className="error">{error}</span>
          </div>
        )}
        <div className={styles.personal}>
          <h4>Avaliações cadastradas</h4>
        </div>
        <section className={styles.avaliations_all}>
          {avaliations &&
            avaliations.map((avaliation) => (
              <div className={styles.product_variacao}>
                <span className={styles.star}>{avaliation.stars}</span>
                <span>{avaliation.nameClient}</span>
                <div
                  className={styles.delete}
                  onClick={() => deleteAvaliation(avaliation)}
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            ))}
        </section>
      </form>
    </div>
  );
};

export default NewProduct;
