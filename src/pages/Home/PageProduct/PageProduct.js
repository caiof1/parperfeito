// CSS
import styles from "./PageProduct.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Hooks
import { useState } from "react";

// images
import product from "../../../images/produto_teste.png";

const PageProduct = () => {
  return (
    <div className={`${styles.container_pdp} center`}>
      <div className={styles.product_and_info}>
        <Swiper className={styles.product_img}>
          <SwiperSlide>
            <img src={product} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className={styles.info_product}>
          <span className={styles.value_avaliation}>
            <span> + 200 vendidos</span> / <span>128 Avaliações</span>
          </span>
          <h2 className={styles.name_product}>
            Galáxia Rosa Flores Artificiais, A Bela e a Fera, Decoração de
            casamento, Criativo Dia dos Namorados, Presente da Mãe, Drop
            Shipping...
          </h2>
          <div className={styles.stars}>
            <div className={styles.star}>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <span className={styles.rank}>4.9</span>
          </div>
          <div className={styles.value_selectqtd}>
            <div className={styles.value}>
              <span className={styles.discount}>R$ 169,99</span>
              <div className={styles.value_normal}>
                <span className={styles.value_discount}>R$ 109,99</span>
                <span className={styles.qtd_discount}>- 35%</span>
              </div>
              <span className={styles.no_juros}>
                Ou em <span>10X sem juros</span>
              </span>
            </div>
            <div className={styles.selectqtd}>
              <div className={styles.less}>
                <span>-</span>
              </div>
              <input
                type="number"
                className={styles.camp_number}
                value={1}
                name=""
              />
              <div className={styles.more}>
                <span>+</span>
              </div>
            </div>
          </div>
          <div className={styles.variantes}>
            <div className={styles.variante}>
              <img src={product} alt="" />
            </div>
            <div className={styles.variante}>
              <img src={product} alt="" />
            </div>
            <div className={styles.variante}>
              <img src={product} alt="" />
            </div>
            <div className={styles.variante}>
              <img src={product} alt="" />
            </div>
            <div className={styles.variante}>
              <img src={product} alt="" />
            </div>
            <div className={styles.variante}>
              <img src={product} alt="" />
            </div>
            <div className={styles.variante}>
              <img src={product} alt="" />
            </div>
          </div>
            <div className={styles.buy_frete}>
                <div className={styles.frete_days}>
                    <span className={styles.frete}>Frete: 12,45</span>
                    <span className={styles.days}>Chegará em 45 dias</span>
                </div>
                <button className={styles.btn}>Comprar</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PageProduct;
