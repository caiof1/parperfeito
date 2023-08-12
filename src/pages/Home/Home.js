// CSS
import styles from "./Home.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// hooks
import { useState, useEffect } from "react";

// images
import banner1 from "../../images/banner_principal.png";

const Home = () => {
  const [onNavigation, setOnNavigation] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setOnNavigation(false);
      } else {
        setOnNavigation(true)
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={onNavigation}
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
          <img src={banner1} width="100%" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} width="100%" alt="" />
        </SwiperSlide>
      </Swiper>
    <Swiper>
        
    </Swiper>
    </main>
  );
};

export default Home;
