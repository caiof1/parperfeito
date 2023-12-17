// CSS
import { useFetchDocs } from "../../hooks/useFetchDocs";
import { useInsertDoc } from "../../hooks/useInsertDoc";
import Loading from "../Loading/Loading";
import styles from "./NewProduct.module.css";

// hooks
import { useEffect, useState } from "react";

const NewProduct = ({ setRenderComponents }) => {
  const [imgVariacao, setImgVariacao] = useState("");
  const [valueTotal, setValueTotal] = useState("");
  const [value, setValue] = useState("");
  const [nameVariation, setNameVariation] = useState("")
  const [numberVariacao, setNumberVariacao] = useState("")
  const [variacoes, setVaricoes] = useState([]);

  const [stars, setStars] = useState('')
  const [nameClient, setNameClient] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState("")
  const [imgAvaliation, setImgAvaliation] = useState([])
  const [avaliations, setAvaliations] = useState([])

  const [titleBanner, setTitleBanner] = useState('')
  const [urlBanner, setUrlBanner] = useState('')
  const [textBanner, setTextBanner] = useState('')
  const [banners, setBanners] = useState([])

  const [nameProduct, setNameProduct] = useState("")
  const [totalSales, setTotalSales] = useState("")
  const [category, setCategory] = useState("0")
  const [frete, setFrete] = useState("")

  const [error, setError] = useState("");

  const {documents} = useFetchDocs("categorys")
  const { insertDoc, loading, acess } = useInsertDoc('products', 'Tivemos um erro ao criar o produto')

  console.log(documents)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      nameProduct,
      totalSales,
      category,
      frete,
      variacoes,
      avaliations,
      banners
    }

    insertDoc(newProduct)
  };

  useEffect(() => {
    if(acess) {
      setRenderComponents(3)
    }
  }, [acess])

  const handleCreate = () => {
    setError("");

    if (imgVariacao === "" || valueTotal === "" || value === "" || nameVariation === "") {
      setError("Faltou preencher algum campo.");
      return;
    }

    const varProduct = {
      imgVariacao,
      valueTotal,
      value,
      nameVariation,
      numberVariacao
    };

    setVaricoes((actualVaricoes) => [...actualVaricoes, varProduct]);

    setImgVariacao("");
    setValueTotal("");
    setValue("");
    setNameVariation("")
    setNumberVariacao("")
  };

  const handleCreateAvaliation = () => {
    setError("");

    if (stars === "" || nameClient === "") {
      setError("Faltou preencher algum campo.");
      return;
    }

    const varProduct = {
      stars,
      nameClient,
      description,
      imgAvaliation
    };

    setAvaliations((actualAvaliations) => [...actualAvaliations, varProduct]);

    setStars("");
    setNameClient("");
    setDescription("");
    setImgAvaliation([])
  };

  const handleCreateBanner = () => {
    const varProduct = {
      titleBanner,
      urlBanner,
      textBanner,
    };

    setBanners((actualBanners) => [...actualBanners, varProduct]);

    setTitleBanner("");
    setUrlBanner("");
    setTextBanner("");
  };
  
  const handleAddImg = () => {
    setImgAvaliation((actualImgAvaliation) => [
      ...actualImgAvaliation,
      img
    ])

    setImg("")
  }

  const deleteVariacao = (vari) => {
    setVaricoes((actualVaricoes) => actualVaricoes.filter(element => element !== vari));
  };

  const deleteAvaliation = (avaliation) => {
    setAvaliations((actualAvaliations) => actualAvaliations.filter(element => element !== avaliation));
  };

  const deleteBanner = (banner) => {
    setBanners((actualBanners) => actualBanners.filter(element => element !== banner));  
  }

  return (
    <div className={styles.newproduct}>
      <button onClick={() => setRenderComponents(3)} className={styles.back}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <form onSubmit={handleSubmit} className={styles.form_create}>
        <div className={styles.nameproduct}>
          <input type="text" placeholder="Nome do produto" required value={nameProduct || ""} onChange={(e) => setNameProduct(e.target.value)} />
        </div>
        <div className={styles.sales}>
          <input type="text" placeholder="Total vendidos" required value={totalSales || ""} onChange={(e) => setTotalSales(e.target.value)}/>
        </div>
        <div className="sales">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="0" selected disabled>- - - Categoria - - -</option>
            {documents && documents.map((doc) => (
              <option value={doc.id} key={doc.id}>{doc.nameCategory}</option>
            ))}
          </select>
        </div>
        <div className={styles.sales}>
          <input type="text" placeholder="Dias do Frente" required value={frete || ""} onChange={(e) => setFrete(e.target.value)}/>
        </div>
        <div className={styles.personal}>
          <h4>Cadastrar banners</h4>
        </div>
        <div className={styles.variacao}>
          <input
            type="text"
            placeholder="Titulo do banner"
            value={titleBanner || ""}
            onChange={(e) => setTitleBanner(e.target.value)}
          />
        </div>
        <div className={styles.discount_variacao}>
          <input
            type="text"
            placeholder="Url do banner"
            value={urlBanner || ""}
            onChange={(e) => setUrlBanner(e.target.value)}
          />
        </div>
        {urlBanner && (
          <div className={styles.previewimg}>
            <img className={styles.preview} src={urlBanner} alt="" />
          </div>
        )}
        <div className={styles.value_variacao}>
          <textarea
            placeholder="Texto abaixo do banner"
            value={textBanner || ""}
            onChange={(e) => setTextBanner(e.target.value)}
          />
        </div>
        <button onClick={handleCreateBanner} type="button" className={styles.btn}>
          Cadastrar banner
        </button> 
        <div className={styles.personal}>
          <h4>Banners cadastrados</h4>
        </div>
        {banners.length === 0 && (
          <div className={styles.error}>
            <span>Nenhum banner criado</span>
          </div>
        )}
        <section className={styles.avaliations_all}>
          {banners &&
            banners.map((banner) => (
              <div className={styles.product_variacao}>
                <img className={styles.img} src={banner.urlBanner} alt="" />
                <div
                  className={styles.delete}
                  onClick={() => deleteBanner(banner)}
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            ))}
        </section>

        <div className={styles.personal}>
          <h4>Variações do produto</h4>
        </div>
        <div className={styles.variacao}>
          <input type="text" placeholder="Nome da variação" value={nameVariation || ""} onChange={(e) => setNameVariation(e.target.value)} />
        </div>
        <div className={styles.variacao}>
          <input
            type="text"
            placeholder="Imagem da variação"
            value={imgVariacao || ""}
            onChange={(e) => setImgVariacao(e.target.value)}
          />
        </div>
        
        {imgVariacao && (
          <div className={styles.previewimg}>
            <img className={styles.preview} src={imgVariacao} alt="" />
          </div>
        )}
        <div className={styles.variacao}>
          <input
            type="number"
            placeholder="Número da variação"
            value={numberVariacao || ""}
            onChange={(e) => setNumberVariacao(e.target.value)}
          />
        </div>
        <div className={styles.discount_variacao}>
          <input
            type="text"
            placeholder="Valor total"
            value={valueTotal || ""}
            onChange={(e) => setValueTotal(e.target.value)}
          />
        </div>
        <div className={styles.value_variacao}>
          <input
            type="text"
            placeholder="Valor da variação"
            value={value || ""}
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
            value={stars || ""}
            onChange={(e) => setStars(e.target.value)}
          />
        </div>
        <div className={styles.discount_variacao}>
          <input
            type="text"
            placeholder="Nome do cliente"
            value={nameClient || ""}
            onChange={(e) => setNameClient(e.target.value)}
          />
        </div>
        <div className={styles.value_variacao}>
          <textarea
            placeholder="Texto da Avaliação"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.value_variacao}>
          <input
            type="text"
            placeholder="URL da imagem da avaliação"
            value={img || ""}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        {img && (
          <div className={styles.previewimg}>
            <img className={styles.preview} src={img} alt="" />
          </div>
        )}
        <button type="button" onClick={handleAddImg} className={styles.btn}>Adicionar imagem</button>
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
        {avaliations.length === 0 && (
          <div className={styles.error}>
            <span>Nenhuma avaliação criada</span>
          </div>
        )}
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
        <button className={styles.btn} type="submit">Criar produto</button>
      </form>
      {loading && <Loading />}
    </div>
  );
};

export default NewProduct;
