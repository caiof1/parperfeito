// CSS
import styles from "./Carousel.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Images
import bannerProduto from "../../images/banner_produto.png";
import product from "../../images/produto_teste.png";

// hooks
import { useState, useEffect } from "react";

const Carousel = ({reverse}) => {
  const [amountSlidePerView, setAmountSlidePerView] = useState(3);
  const [onNavigation, setOnNavigation] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setOnNavigation(false);
        setAmountSlidePerView("auto");
      } else if (window.innerWidth < 1100) {
        setOnNavigation(true);
        setAmountSlidePerView("auto");
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
    <section className={`${styles.container_carousel} ${reverse && styles.reverse}`}>
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
        <SwiperSlide className={styles.product}>
          <Swiper 
            style={{
              "--swiper-navigation-color": "#9D2235",
              "--swiper-pagination-color": "#9D2235",
            }}
            slidesPerView={1}
            navigation
            grabCursor={true}
          >
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
          </Swiper>
          <p className={styles.name_product}>
            Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
            casamento...
          </p>
          <div className={styles.prices}>
            <span className={styles.price_total}>R$ 169,20</span>
            <div className={styles.price_discount}>
              <span className={styles.price}>R$ 109,99</span>
              <span className={styles.discount}>-35%</span>
            </div>
          </div>
          <button className={styles.product_btn}>Comprar</button>
        </SwiperSlide>
        <SwiperSlide className={styles.product}>
          <Swiper 
            style={{
              "--swiper-navigation-color": "#9D2235",
              "--swiper-pagination-color": "#9D2235",
            }}
            slidesPerView={1}
            navigation
            grabCursor={true}
          >
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
          </Swiper>
          <p className={styles.name_product}>
            Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
            casamento...
          </p>
          <div className={styles.prices}>
            <span className={styles.price_total}>R$ 169,20</span>
            <div className={styles.price_discount}>
              <span className={styles.price}>R$ 109,99</span>
              <span className={styles.discount}>-35%</span>
            </div>
          </div>
          <button className={styles.product_btn}>Comprar</button>
        </SwiperSlide>
        <SwiperSlide className={styles.product}>
          <Swiper 
            style={{
              "--swiper-navigation-color": "#9D2235",
              "--swiper-pagination-color": "#9D2235",
            }}
            slidesPerView={1}
            navigation
            grabCursor={true}
          >
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
          </Swiper>
          <p className={styles.name_product}>
            Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
            casamento...
          </p>
          <div className={styles.prices}>
            <span className={styles.price_total}>R$ 169,20</span>
            <div className={styles.price_discount}>
              <span className={styles.price}>R$ 109,99</span>
              <span className={styles.discount}>-35%</span>
            </div>
          </div>
          <button className={styles.product_btn}>Comprar</button>
        </SwiperSlide>
        <SwiperSlide className={styles.product}>
          <Swiper 
            style={{
              "--swiper-navigation-color": "#9D2235",
              "--swiper-pagination-color": "#9D2235",
            }}
            slidesPerView={1}
            navigation
            grabCursor={true}
          >
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.img_product}>
              <img src={product} alt="" />
            </SwiperSlide>
          </Swiper>
          <p className={styles.name_product}>
            Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
            casamento...
          </p>
          <div className={styles.prices}>
            <span className={styles.price_total}>R$ 169,20</span>
            <div className={styles.price_discount}>
              <span className={styles.price}>R$ 109,99</span>
              <span className={styles.discount}>-35%</span>
            </div>
          </div>
          <button className={styles.product_btn}>Comprar</button>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
