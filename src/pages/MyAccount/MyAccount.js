// CSS
import styles from "./MyAccount.module.css";

// Hooks
import { useState } from "react";

// Components
import MyDetails from "../../components/MyDetails/MyDetails";
import MyOrders from "../../components/MyOrders/MyOrders";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import NewProduct from "../../components/NewProduct/NewProduct";
import NewCategory from "../../components/NewCategory/NewCategory";
import CreateCategory from "../../components/CreateCategory/CreateCategory";
import { useFetchUser } from "../../hooks/useFetchUser";
import MyAddress from "../../components/MyAddress/MyAddress";

const MyAccount = ({ setIsHeader, user }) => {
  setIsHeader(false);

  const [renderComponents, setRenderComponents] = useState(0);

  const {documents} = useFetchUser(user.uid, 'users')

  console.log(documents)

  return (
    <div className={styles.account}>
      <h3 className={styles.title}>Minha Conta</h3>
      <section className={styles.container_account}>
        <nav className={styles.menu}>
          <ul>
            <li
              className={renderComponents === 0 && styles.active}
              onClick={() => setRenderComponents(0)}
            >
              <i class="fa-regular fa-circle-user"></i>
              <span> Meus Detalhes</span>
            </li>
            <li
              className={renderComponents === 1 && styles.active}
              onClick={() => setRenderComponents(1)}
            >
              <i class="fa-solid fa-location-dot"></i>
              <span>Meus Endereços</span>
            </li>
            <li
              className={renderComponents === 2 && styles.active}
              onClick={() => setRenderComponents(2)}
            >
              <i class="fa-solid fa-bag-shopping"></i>
              <span>Meus pedidos</span>
            </li>
            <li
              className={
                (renderComponents === 3 || renderComponents === 4) &&
                styles.active
              }
              onClick={() => setRenderComponents(3)}
            >
              <i class="fa-brands fa-product-hunt"></i>
              Criar produto
            </li>
            <li className={(renderComponents === 5 || renderComponents === 6) && styles.active} onClick={() => setRenderComponents(5)}>
              <i class="fa-solid fa-copyright"></i>
              Criar Categoria
            </li>
          </ul>
        </nav>
        <div className={styles.container_info}>
          {renderComponents === 0 && <MyDetails documents={documents} />}
          {renderComponents === 1 && <MyAddress documents={documents} />}
          {renderComponents === 2 && <MyOrders />}
          {renderComponents === 3 && (
            <CreateProduct setRenderComponents={setRenderComponents} />
          )}
          {renderComponents === 4 && (
            <NewProduct setRenderComponents={setRenderComponents} />
          )}
          {renderComponents === 5 && (
            <CreateCategory setRenderComponents={setRenderComponents} />
          )}
          {renderComponents === 6 && (
            <NewCategory setRenderComponents={setRenderComponents} />
          )}
        </div>
      </section>
    </div>
  );
};

export default MyAccount;
