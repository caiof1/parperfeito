// CSS
import styles from "./Carousel.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Images
import bannerProduto from "../../images/banner_produto.png";
import product from "../../images/produto_teste.png";

// hooks
import { useState, useEffect } from "react";

// Router
import { useNavigate } from "react-router-dom";

const Carousel = ({ reverse, products }) => {
  const [amountSlidePerView, setAmountSlidePerView] = useState(3);
  const [onNavigation, setOnNavigation] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setOnNavigation(false);
        setAmountSlidePerView(1);
      } else if (window.innerWidth < 900) {
        setOnNavigation(false);
        setAmountSlidePerView(2);
      } else if (window.innerWidth < 1100) {
        setOnNavigation(true);
        setAmountSlidePerView(2);
      } else {
        setOnNavigation(true);
        setAmountSlidePerView(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      className={`${styles.container_carousel} ${reverse && styles.reverse}`}
    >
      <div className={styles.img_banner}>
        <img src={bannerProduto} alt="" />
      </div>
      <Swiper
        className={styles.carousel}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        slidesPerView={amountSlidePerView}
        navigation={onNavigation}
        pagination={{ dynamicBullets: true, clickable: true }}
        grabCursor={true}
      >
        {products &&
          products.map((product) => (
            <SwiperSlide
              onClick={() => navigate(`/pdp/${product.id}`)}
              className={styles.product}
            >
              <div className={styles.product_single}>
                <span className={styles.discount}>
                  {parseInt(
                    ((parseInt(product.variacoes[0].value) /
                      parseInt(product.variacoes[0].valueTotal)) *
                      100) - 100
                  )}
                  %
                </span>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#9D2235",
                    "--swiper-pagination-color": "#9D2235",
                  }}
                  slidesPerView={1}
                  navigation
                  grabCursor={true}
                >
                  {product.variacoes &&
                    product.variacoes.map((variacoe) => (
                      <SwiperSlide className={styles.img_product}>
                        <img src={variacoe.imgVariacao} alt="" />
                      </SwiperSlide>
                    ))}
                </Swiper>
                <p className={styles.name_product}>
                {product.nameProduct.substr(0, 77)}
                </p>
                <div className={styles.stars}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span>({product.avaliations.length})</span>
                </div>
                <div className={styles.prices}>
                  <span className={styles.price_total}>R$ {product.variacoes[0].valueTotal}</span>
                  <div className={styles.price_discount}>
                    <span className={styles.price}>R$ {product.variacoes[0].value}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
