// CSS
import styles from "./Checkout.module.css";

// images
import letecrypt from "../../images/letsEncrypt.png";
import google from "../../images/googlesecurity.png";
import security from "../../images/site seguro.png";
import mercadopago from "../../images/mercadopago.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Hooks
import { useEffect, useState } from "react";

// Components
import PersonalCheckout from "../../components/PersonalCheckout/PersonalCheckout";
import Address from "../../components/Address/Address";
import Payment from "../../components/Payment/Payment";
import { useFetchUser } from "../../hooks/useFetchUser";

const Checkout = ({ setIsHeader, user }) => {
  setIsHeader(false);
  const [amountSlidePerView, setAmountSlidePerView] = useState(4);

  const [personal, setPersonal] = useState();
  const [addrress, setAddrress] = useState();
  const [payment, setPayment] = useState();

  const { documents } = useFetchUser(user.uid, "users");

  const [acess, setAcess] = useState(0);

  const [subTotal, setSubTotal] = useState(0)
  
  useEffect(() => {
    if(documents) {
      setSubTotal(0)
      documents[0]?.cart?.map((product) => {

        setSubTotal((actualSubTotal) =>  actualSubTotal + (parseFloat(product.value) * product.qtd))

        return null
      })
    }
  }, [documents])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 400) {
        setAmountSlidePerView(1);
      } else if (window.innerWidth < 500) {
        setAmountSlidePerView(2);
      } else if (window.innerWidth < 700) {
        setAmountSlidePerView(3);
      } else {
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
    <div className={styles.checkout}>
      <section className={styles.form}>
        <Swiper
          className={styles.securitys}
          grabCursor={true}
          slidesPerView={amountSlidePerView}
        >
          <SwiperSlide className={styles.slide}>
            <img src={mercadopago} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={letecrypt} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={google} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={security} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className={styles.title}>
          <h3>Dados pessoais</h3>
          {acess !== 0 && personal ? (
            <i className={`fa-solid fa-check ${styles.check}`}></i>
          ) : (
            <i className={`fa-solid fa-spinner fa-spin`}></i>
          )}
        </div>
        {acess === 0 && (
          <PersonalCheckout
            setPersonal={setPersonal}
            personal={personal}
            setAcess={setAcess}
            documents={documents}
          />
        )}
        {personal && acess !== 0 && (
          <section className={styles.container_personal}>
            <div>
              Nome: <span>{personal.name} </span>
              <span>{personal.sobrename}</span>
            </div>
            <div>
              <span>CPF: {personal.cpf}</span>
            </div>
            <div>
              <span>Telefone: {personal.phone}</span>
            </div>
            <i
              class="fa-solid fa-pen-to-square"
              onClick={() => setAcess(0)}
            ></i>
          </section>
        )}

        <div className={styles.title}>
          <h3>Dados de entrega</h3>
          {acess !== 1 && addrress ? (
            <i className={`fa-solid fa-check ${styles.check}`}></i>
          ) : (
            <i className={`fa-solid fa-spinner fa-spin`}></i>
          )}
        </div>
        {acess === 1 && (
          <Address
            setAddrress={setAddrress}
            addrress={addrress}
            setAcess={setAcess}
            documents={documents}
          />
        )}

        {addrress && acess !== 1 && (
          <section className={styles.container_personal}>
            <div>
              <span>{addrress.cep}</span>
            </div>
            <div>
              <span>
                {addrress.address} - {addrress.bairro} - {addrress.number} -{" "}
                {addrress.state} - {addrress.city}
              </span>
            </div>
            <div>
              <span>{addrress.complement}</span>
            </div>
            <i
              class="fa-solid fa-pen-to-square"
              onClick={() => setAcess(1)}
            ></i>
          </section>
        )}

        <div className={styles.title}>
          <h3>Pagamento</h3>
          {acess !== 2 && payment ? (
            <i className={`fa-solid fa-check ${styles.check}`}></i>
          ) : (
            <i className={`fa-solid fa-spinner fa-spin`}></i>
          )}
        </div>
        {acess === 2 && <Payment setPayment={setPayment} setAcess={setAcess} value={subTotal} />}
      </section>

      <section className={styles.info}>
        <div className={styles.divinfo}>
          {documents &&
            documents[0]?.cart?.map((product) => (
              <div className={styles.products}>
                <img
                  src={product.image}
                  alt=""
                />
                <div className={styles.info_product}>
                  <span>{product.nameProduct}</span>
                  <span>R$ {Math.floor(parseFloat(product.value) * product.qtd)}</span>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.values}>
          <div className={styles.subtotal}>
            <span>Subtotal:</span>
            <span>R$ {subTotal}</span>
          </div>
          <div className={styles.subtotal}>
            <span>Frete:</span>
            <span>Grátis</span>
          </div>
          <div className={styles.total}>
            <span>Total:</span>
            <span>R$ {subTotal}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
