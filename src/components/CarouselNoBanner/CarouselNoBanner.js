// CSS
import styles from "./CarouselNoBanner.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";

const CarouselNoBanner = ({products}) => {
  const [amountSlidePerView, setAmountSlidePerView] = useState(4);
  const [onNavigation, setOnNavigation] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setOnNavigation(false);
        setAmountSlidePerView(1);
      } else if (window.innerWidth < 900) {
        setOnNavigation(false);
        setAmountSlidePerView(2);
      } else if (window.innerWidth < 1100) {
        setOnNavigation(true);
        setAmountSlidePerView(3);
      } else {
        setOnNavigation(true);
        setAmountSlidePerView(4);
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
      className={`${styles.container_carousel}`}
    >
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

export default CarouselNoBanner;
