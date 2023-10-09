// CSS
import styles from "./Home.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// hooks
import { useState, useEffect } from "react";
import { useFetchDocs } from "../../hooks/useFetchDocs";

// images
import banner1 from "../../images/banner_principal.png";
import bannerPromocional1 from "../../images/banner_promocional.png";

// Components
import Carousel from "../../components/Carousel/Carousel";

const Home = ({ setIsHeader }) => {
  setIsHeader(true);

  const { documents, loading, error } = useFetchDocs("categorys");

  const [onNavigation, setOnNavigation] = useState(true);
  const [amountSlidePerView, setAmountSlidePerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setOnNavigation(false);
        setAmountSlidePerView(1);
      } else if (window.innerWidth < 700) {
        setOnNavigation(false);
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
    <main className={`${styles.main} center`}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={onNavigation}
        className={styles.banner}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className={styles.container_benefity}
        slidesPerView={amountSlidePerView}
        grabCursor={true}
      >
        <SwiperSlide className={styles.slide_benefity}>
          <i class="fa-brands fa-pix"></i>
          <span>Compre pelo pix</span>
        </SwiperSlide>
        <SwiperSlide className={styles.slide_benefity}>
          <i class="fa-solid fa-truck-fast"></i>
          <span>Entregamos no Brasil todo</span>
        </SwiperSlide>
        <SwiperSlide className={styles.slide_benefity}>
          <i class="fa-solid fa-check"></i>
          <span>Devolução grátis em até 30 dias</span>
        </SwiperSlide>
      </Swiper>
      <Swiper
        className={styles.carousel_category}
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
      >
        {documents &&
          documents.map((doc) => (
            <SwiperSlide className={styles.category}>
              <div>
                <img src={doc.urlCategory} width="100%" alt="" />
              </div>
              <span>{doc.nameCategory}</span>
            </SwiperSlide>
          ))}
      </Swiper>
      <section className={styles.carousel_more}>
        <h2>Mais vendidos:</h2>
        <Carousel />
      </section>
      <div className={styles.carousel_banner}>
        <div className={styles.banner_promotional}>
          <div>
            <img src={bannerPromocional1} alt="" />
          </div>
        </div>
      </div>
      <section className={styles.carousel_more}>
        <h2>Você pode gostar:</h2>
        <Carousel reverse={true} />
      </section>
      <section className={styles.carousel_more}>
        <h2>Nossos lançamentos:</h2>
        <Carousel />
      </section>
    </main>
  );
};

export default Home;
