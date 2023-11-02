// CSS
import styles from "./PageProduct.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Hooks
import { useEffect, useState } from "react";

// components
import CarouselNoBanner from "../../components/CarouselNoBanner/CarouselNoBanner";
import { useFetchDocs } from "../../hooks/useFetchDocs";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useNavigate } from "react-router-dom";
import { useUpdateDoc } from "../../hooks/useUpdateDoc";

const PageProduct = ({
  user,
  setIsHeader,
  setType,
  setMessage,
  setTimeMessage,
}) => {
  setIsHeader(true)

  const navigate = useNavigate();

  // ranks stars
  const [oneStar, setOneStar] = useState("");
  const [twoStar, setTwoStar] = useState("");
  const [threeStar, setThreeStar] = useState("");
  const [fourStar, setFourStar] = useState("");
  const [fiveStar, setFiveStar] = useState("");

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");

  const [numberVariacao, setNumberVariacao] = useState("0")

  const { documents } = useFetchDocs("products");

  const [qtdProduct, setQtdProduct] = useState(1)

  const [products, setProducts] = useState([]);

  const [valueAvaliation, setValueAvaliation] = useState(0);

  const { documents: profile } = useFetchUser(user?.uid, "users");

  const { updateDocs, loading, acess } = useUpdateDoc("users");

  const { id } = useParams();

  useEffect(() => {
    setProducts(documents.find((element) => element.id === id));
  }, [documents, id]);

  const handleAddProductCart = () => {
    if (user) {
      if (profile[0]?.cart.find((element) => element.id === products.id)) {
        // Message Alert config
        setTimeMessage(true);
        setType("error");
        setMessage("Produto já está no carrinho");
      } else {
        const productsConfig = { 
          nameProduct: products.nameProduct,
          qtd: qtdProduct,
          id: products.id,
          image: products.variacoes[numberVariacao]?.imgVariacao,
          value: products?.variacoes[numberVariacao]?.value,
          valueTotal: products?.variacoes[numberVariacao]?.valueTotal,
          numberVariacao
         };
        profile[0]?.cart.push(productsConfig);
        updateDocs(profile[0]?.id, profile[0]);
        // Message Alert config
        setTimeMessage(true);
        setType("sucess");
        setMessage("Adicionado ao carrinho");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if(qtdProduct < 1) {
      setQtdProduct(1)
    }
  }, [qtdProduct])

  useEffect(() => {
    setValueAvaliation(0);
    setOneStar(0);
    setTwoStar(0);
    setThreeStar(0);
    setFourStar(0);
    setFiveStar(0);
    if (products) {
      products.avaliations?.map((avaliation) => {
        setValueAvaliation(
          (actualValueAvaliation) =>
            actualValueAvaliation + parseInt(avaliation.stars)
        );

        if (avaliation.stars === "5") {
          setFiveStar((actualFiveStar) => actualFiveStar + 1);
        } else if (avaliation.stars === "4") {
          setFourStar((actualFourStar) => actualFourStar + 1);
        } else if (avaliation.stars === "3") {
          setThreeStar((actualThreeStar) => actualThreeStar + 1);
        } else if (avaliation.stars === "2") {
          setTwoStar((actualTwoStar) => actualTwoStar + 1);
        } else if (avaliation.stars === "1") {
          setOneStar((actualOneStar) => actualOneStar + 1);
        }

        return null;
      });
    }
  }, [products]);

  useEffect(() => {
    if (products) {
      setOne((oneStar / products.avaliations?.length) * 100);
      setTwo((twoStar / products.avaliations?.length) * 100);
      setThree((threeStar / products.avaliations?.length) * 100);
      setFour((fourStar / products.avaliations?.length) * 100);
      setFive((fiveStar / products.avaliations?.length) * 100);
    }
  }, [oneStar, twoStar, threeStar, fourStar, fiveStar]);


  return (
    <div className={`${styles.container_pdp} center`}>
      {products && (
        <>
          <div className={styles.product_and_info}>
            <Swiper
              className={styles.product_img}
              style={{
                "--swiper-navigation-color": "#9D2235",
                "--swiper-pagination-color": "#9D2235",
              }}
              grabCursor={true}
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              {products.variacoes?.map((variacoe) => (
                <SwiperSlide>
                  <img src={variacoe.imgVariacao} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.info_product}>
              <span className={styles.value_avaliation}>
                <span> + {products.totalSales} vendidos</span> /{" "}
                <span>{products.avaliations?.length} Avaliações</span>
              </span>
              <h2 className={styles.name_product}>{products.nameProduct}</h2>
              <div className={styles.stars}>
                <div className={styles.star}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span className={styles.rank}>
                  {valueAvaliation / products.avaliations?.length}
                </span>
              </div>
              <div className={styles.value_selectqtd}>
                <div className={styles.value}>
                  <span className={styles.discount}>
                    R$ {products.variacoes && products.variacoes[numberVariacao].valueTotal}
                  </span>
                  <div className={styles.value_normal}>
                    <span className={styles.value_discount}>
                      R$ {products.variacoes && products.variacoes[numberVariacao].value}
                    </span>
                    <span className={styles.qtd_discount}>
                      
                      {products.variacoes &&
                        parseInt(
                          ((parseInt(products.variacoes[0].value) /
                            parseInt(products.variacoes[0].valueTotal)) *
                            100) - 100
                        )}
                      %
                    </span>
                  </div>
                  <span className={styles.no_juros}>
                    Ou em <span>10X sem juros</span>
                  </span>
                </div>
                <div className={styles.selectqtd}>
                  <div onClick={() => setQtdProduct((actualQtdProduct) => actualQtdProduct - 1)}  className={styles.less}>
                    <span>-</span>
                  </div>
                  <input
                    type="number"
                    className={styles.camp_number}
                    min={1}
                    value={qtdProduct}
                    disabled
                  />
                  <div onClick={() => setQtdProduct((actualQtdProduct) => actualQtdProduct + 1)} className={styles.more}>
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div className={styles.variantes}>
                {products.variacoes?.map((vari) => (
                  <div onClick={() => setNumberVariacao(vari.numberVariacao)} className={`${styles.variante} ${vari.numberVariacao === numberVariacao && styles.activeVariacao}`}>
                    <span>{vari.nameVariation.toUpperCase()}</span>
                  </div>
                ))}
              </div>
              <div className={styles.buy_frete}>
                <div className={styles.frete_days}>
                  <span className={styles.frete}>Frete: Grátis</span>
                  <span className={styles.days}>Chegará em 45 dias</span>
                </div>
                <button className={styles.btn} onClick={handleAddProductCart}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <section className={styles.carousel_more}>
            <h2>Produtos relacionados:</h2>
            <CarouselNoBanner />
          </section>

          <section className={styles.container_avaliations}>
            <h3 className={styles.title_avaliations}>Avaliações do produto</h3>
            <div className={styles.avaliations}>
              <div className={styles.block_avaliations}>
                <div className={styles.number_avaliations}>
                  <div className={styles.qtd_stars}>
                    <span className={styles.number_stars}>
                      {valueAvaliation / products.avaliations?.length}
                    </span>
                    <div className={styles.stars_avaliations}>
                      <div className={styles.star}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <span className={styles.qtd_avaliations}>
                        {products.avaliations?.length} avaliações
                      </span>
                    </div>
                  </div>
                  <div className={styles.porcentagem_avaliations}>
                    <div className={styles.container_number}>
                      <span className={styles.number}>5</span>
                      <div className={styles.porcentagem}>
                        <div style={{ width: `${five}%` }}></div>
                      </div>
                    </div>
                    <div className={styles.container_number}>
                      <span className={styles.number}>4</span>
                      <div className={styles.porcentagem}>
                        <div style={{ width: `${four}%` }}></div>
                      </div>
                    </div>
                    <div className={styles.container_number}>
                      <span className={styles.number}>3</span>
                      <div className={styles.porcentagem}>
                        <div style={{ width: `${three}%` }}></div>
                      </div>
                    </div>
                    <div className={styles.container_number}>
                      <span className={styles.number}>2</span>
                      <div className={styles.porcentagem}>
                        <div style={{ width: `${two}%` }}></div>
                      </div>
                    </div>
                    <div className={styles.container_number}>
                      <span className={styles.number}>1</span>
                      <div className={styles.porcentagem}>
                        <div style={{ width: `${one}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.avaliations_messages}>
                <div className={styles.messages}>
                  {products.avaliations?.map((avaliation) => (
                    <>
                      <div className={styles.message}>
                        <div className={styles.star}>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span>{avaliation.stars}</span>
                        </div>
                        <span className={styles.name_user}>
                          {avaliation.nameClient}
                        </span>
                        <p className={styles.avaliation_text}>
                          {avaliation.description}
                        </p>
                      </div>
                    </>
                  ))}
                  <div className={styles.view_more}>
                    <span>Ver todas as avaliações</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.carousel_more}>
            <h2>Outros produtos:</h2>
            <CarouselNoBanner />
          </section>
        </>
      )}
    </div>
  );
};

export default PageProduct;
