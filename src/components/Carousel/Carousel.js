// CSS
import styles from "./Carousel.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Images
import bannerProduto from "../../images/banner_produto.png";
import product from "../../images/produto_teste.png";

const Carousel = () => {
  return (
    <section className={styles.container_carousel}>
      <div className={styles.img_banner}>
        <img src={bannerProduto} alt="" />
      </div>
      <Swiper
        className={styles.carousel}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ dynamicBullets: true, clickable: true }}
      >
        <SwiperSlide className={styles.product}>
          <div className={styles.img_product}>
            <img src={product} alt="" />
          </div>
          <p className={styles.name_product}>Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de casamento...</p>
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
          <div className={styles.img_product}>
            <img src={product} alt="" />
          </div>
          <p className={styles.name_product}>Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de casamento...</p>
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
          <div className={styles.img_product}>
            <img src={product} alt="" />
          </div>
          <p className={styles.name_product}>Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de casamento...</p>
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
          <div className={styles.img_product}>
            <img src={product} alt="" />
          </div>
          <p className={styles.name_product}>Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de casamento...</p>
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
