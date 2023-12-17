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
  setIsHeader(true);

  const navigate = useNavigate();

  const [previewImg, setPreviewImg] = useState([]);
  const [activePreview, setActivePreview] = useState(false);

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

  const { documents: allProducts } = useFetchDocs("products");

  const [numberVariacao, setNumberVariacao] = useState("0");

  const { documents } = useFetchDocs("products");

  const [qtdProduct, setQtdProduct] = useState(1);

  const [products, setProducts] = useState([]);

  const [valueAvaliation, setValueAvaliation] = useState(0);

  const { documents: profile } = useFetchUser(user?.uid, "users");

  const { updateDocs, loading, acess } = useUpdateDoc("users");

  const [qtdAvaliations, setQtdAvaliations] = useState(3);

  const [avaliationStar, setAvaliationStar] = useState(0);

  const [relation, setRelation] = useState([])
  const [saleProduct, setSaleProduct] = useState([])

  const { id } = useParams();

  useEffect(() => {
    setRelation([])
    setSaleProduct([])
    allProducts.map((product) => {
      if (product.category === "sZAmLgEIFraM1fBfKAlQ") {
        setRelation((actualRelation) => [...actualRelation, product]);
      }

      if(product.category === "W97aO8BSSP3McccHq4dw") {
        setSaleProduct((actualSaleProduct) => [
          ...actualSaleProduct,
          product
        ])
      }

      return null;
    });
  }, [allProducts]);

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
          numberVariacao,
          variacao: products?.variacoes[numberVariacao]?.nameVariation,
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

  const handleViewImg = (imgs) => {
    setActivePreview(true);

    setPreviewImg(imgs);
  };

  const handleRemovePreview = () => {
    setActivePreview(false);

    setPreviewImg([]);
  };

  const handleAvaliations = () => {
    if (qtdAvaliations === 3) {
      setQtdAvaliations(products.avaliations?.length);
    } else {
      setQtdAvaliations(3);
    }
  };

  useEffect(() => {
    if (qtdProduct < 1) {
      setQtdProduct(1);
    }
  }, [qtdProduct]);

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

  useEffect(() => {
    setAvaliationStar(valueAvaliation / products?.avaliations?.length);
  }, [valueAvaliation]);

  return (
    <div className={`${styles.container_pdp} center`}>
      {activePreview && (
        <div className={styles.previewimg}>
          <span onClick={handleRemovePreview}>
            <i class="fa-solid fa-x"></i>
          </span>
          <Swiper
            className={styles.preview_img}
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            slidesPerView={1}
            navigation
            pagination={{ dynamicBullets: true, clickable: true }}
            grabCursor={true}
          >
            {previewImg &&
              previewImg.map((preview) => (
                <SwiperSlide className={styles.images}>
                  <img src={preview} alt="" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
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
                <span className={styles.rank}>{avaliationStar.toFixed(1)}</span>
              </div>
              <div className={styles.value_selectqtd}>
                <div className={styles.value}>
                  <span className={styles.discount}>
                    R${" "}
                    {products.variacoes &&
                      products.variacoes[numberVariacao].valueTotal}
                  </span>
                  <div className={styles.value_normal}>
                    <span className={styles.value_discount}>
                      R${" "}
                      {products.variacoes &&
                        products.variacoes[numberVariacao].value}
                    </span>
                    <span className={styles.qtd_discount}>
                      {products.variacoes &&
                        parseInt(
                          (parseInt(products.variacoes[0].value) /
                            parseInt(products.variacoes[0].valueTotal)) *
                            100 -
                            100
                        )}
                      %
                    </span>
                  </div>
                  <span className={styles.no_juros}>
                    Ou em até <span>12 Vezes</span>
                  </span>
                </div>
                <div className={styles.selectqtd}>
                  <div
                    onClick={() =>
                      setQtdProduct((actualQtdProduct) => actualQtdProduct - 1)
                    }
                    className={styles.less}
                  >
                    <span>-</span>
                  </div>
                  <input
                    type="number"
                    className={styles.camp_number}
                    min={1}
                    value={qtdProduct}
                    disabled
                  />
                  <div
                    onClick={() =>
                      setQtdProduct((actualQtdProduct) => actualQtdProduct + 1)
                    }
                    className={styles.more}
                  >
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div className={styles.variantes}>
                {products.variacoes?.map((vari) => (
                  <div
                    onClick={() => setNumberVariacao(vari.numberVariacao)}
                    className={`${styles.variante} ${
                      vari.numberVariacao === numberVariacao &&
                      styles.activeVariacao
                    }`}
                  >
                    <span>{vari.nameVariation.toUpperCase()}</span>
                  </div>
                ))}
              </div>
              <div className={styles.buy_frete}>
                <div className={styles.frete_days}>
                  <span className={styles.frete}>Frete: Grátis</span>
                  <span className={styles.days}>
                    Chegará em {products.frete} dias
                  </span>
                </div>
                <button className={styles.btn} onClick={handleAddProductCart}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <section className={styles.carousel_more}>
            <h2>Produtos relacionados:</h2>
            <CarouselNoBanner products={relation} />
          </section>

          {products &&
            products.banners?.map((product) => (
              <div className={styles.banners}>
                <img src={product.urlBanner} alt="" />
                <h2>{product.titleBanner}</h2>
                <p>{product.textBanner}</p>
              </div>
            ))}

          <section className={styles.container_avaliations}>
            <h3 className={styles.title_avaliations}>Avaliações do produto</h3>
            <div className={styles.avaliations}>
              <div className={styles.block_avaliations}>
                <div className={styles.number_avaliations}>
                  <div className={styles.qtd_stars}>
                    <span className={styles.number_stars}>
                      {avaliationStar.toFixed(1)}
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
                  {products.avaliations
                    ?.slice(0, qtdAvaliations)
                    .map((avaliation) => (
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
                          <div className={styles.avaliation_img}>
                            {avaliation.imgAvaliation?.map((img) => (
                              <div
                                onClick={() =>
                                  handleViewImg(avaliation.imgAvaliation)
                                }
                                className={styles.img_avaliation}
                              >
                                <img alt="" src={img} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ))}
                  {products.avaliations?.length > 3 && (
                    <div className={styles.view_more}>
                      <span onClick={handleAvaliations}>
                        Ver todas as avaliações
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className={styles.carousel_more}>
            <h2>Outros produtos:</h2>
            <CarouselNoBanner products={saleProduct} />
          </section>
        </>
      )}
    </div>
  );
};

export default PageProduct;
