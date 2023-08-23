// CSS
import styles from "./PageProduct.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Hooks
import { useState } from "react";

// images
import product from "../../images/produto_teste.png";
import CarouselNoBanner from "../../components/CarouselNoBanner/CarouselNoBanner";

const PageProduct = ({setIsHeader}) => {
  setIsHeader(true)
  const [activeDescription, setActiveDescription] = useState(true);
  const [activeConsumidor, setActiveConsumidor] = useState(false);
  const [activeChar, setActiveChar] = useState(false);
  const [text, setText] = useState("");

  const handleDescription = () => {
    setActiveDescription(true);
    setActiveConsumidor(false);
    setActiveChar(false);
  };

  const handleConsumidor = () => {
    setActiveDescription(false);
    setActiveConsumidor(true);
    setActiveChar(false);
  };

  const handleChar = () => {
    setActiveDescription(false);
    setActiveConsumidor(false);
    setActiveChar(true);
  };

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
      <section className={styles.carousel_more}>
        <h2>Produtos relacionados:</h2>
        <CarouselNoBanner />
      </section>

      <section className={styles.description_product}>
        <div className={styles.button_acess}>
          <button
            onClick={handleDescription}
            className={activeDescription && styles.active}
          >
            Descrição do produto
          </button>
          <button
            onClick={handleConsumidor}
            className={activeConsumidor && styles.active}
          >
            Proteção ao consumidor
          </button>
          <button onClick={handleChar} className={activeChar && styles.active}>
            Caracteristicas do produto
          </button>
        </div>
        <div className={styles.camp_info}>
          <h3>Descrição:</h3>
          <pre>
            {`Luminária A Rosa Encantada A Bela e A Fera / O Pequeno Príncipe.

Detalhes:
Luminária com 10 cm de Diâmetro por 19 cm de Altura;
Cúpula Em ABS Cristal Atóxica
Base Em ABS Na Cor Ouro Velho

Iluminação Com Estágios
20 Micro Luzes de LEDs / "Luzes de Fadas"
Branco Quente

**** Baterias Inclusas ****

Rosa Vermelha Artificial Aveludada Idêntica a Rosa Natural`}
          </pre>
        </div>
      </section>

      <section className={styles.container_avaliations}>
        <h3 className={styles.title_avaliations}>Avaliações do produto</h3>
        <div className={styles.avaliations}>
          <div className={styles.block_avaliations}>
            <div className={styles.number_avaliations}>
              <div className={styles.qtd_stars}>
                <span className={styles.number_stars}>4.9</span>
                <div className={styles.stars_avaliations}>
                  <div className={styles.star}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span className={styles.qtd_avaliations}>128 avaliações</span>
                </div>
              </div>
              <div className={styles.porcentagem_avaliations}>
                <div className={styles.container_number}>
                  <span className={styles.number}>5</span>
                  <div className={styles.porcentagem}>
                    <div style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div className={styles.container_number}>
                  <span className={styles.number}>4</span>
                  <div className={styles.porcentagem}>
                    <div style={{ width: "12%" }}></div>
                  </div>
                </div>
                <div className={styles.container_number}>
                  <span className={styles.number}>3</span>
                  <div className={styles.porcentagem}>
                    <div style={{ width: "0%" }}></div>
                  </div>
                </div>
                <div className={styles.container_number}>
                  <span className={styles.number}>2</span>
                  <div className={styles.porcentagem}>
                    <div style={{ width: "0%" }}></div>
                  </div>
                </div>
                <div className={styles.container_number}>
                  <span className={styles.number}>1</span>
                  <div className={styles.porcentagem}>
                    <div style={{ width: "0%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.avaliations_messages}>
            <div className={styles.messages}>
              <div className={styles.message}>
                <div className={styles.star}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <span>5</span>
                </div>
                <span className={styles.name_user}>Wellington nunes</span>
                <p className={styles.avaliation_text}>
                  Sem dúvidas um excelente produto.
                </p>
              </div>
              <div className={styles.message}>
                <div className={styles.star}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <span>5</span>
                </div>
                <span className={styles.name_user}>Everton Souza</span>
                <p className={styles.avaliation_text}>
                  Linda, parece uma rosa de verdade! A rosa é um pouco mais
                  curta, por outro lado, do que no anúncio e o fio das luzes
                  deve ser instalado mesmo (não muito óbvio no início). Chegou
                  muito bem protegido. Eu recomendo
                </p>
              </div>
              <div className={styles.message}>
                <div className={styles.star}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <span>5</span>
                </div>
                <span className={styles.name_user}>Caio Fernandes</span>
                <p className={styles.avaliation_text}>
                  Eu recomendo ao 100% ao vendedor, embalagem muito boa e boa
                  qualidade do produto, estou muito feliz que gostaria de
                  mantê-lo, mas é para presentes, vou pedir outro. Obrigado
                </p>
              </div>
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
    </div>
  );
};

export default PageProduct;
