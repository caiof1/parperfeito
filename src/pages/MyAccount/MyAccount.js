// CSS
import styles from "./MyAccount.module.css";

// Hooks
import { useState } from "react";

// Components
import MyDetails from "../../components/MyDetails/MyDetails";
import MyOrders from "../../components/MyOrders/MyOrders";

const MyAccount = ({ setIsHeader }) => {
  setIsHeader(false);

  const [renderComponents, setRenderComponents] = useState(0)

  return (
    <div className={styles.account}>
      <h3 className={styles.title}>Minha Conta</h3>
      <section className={styles.container_account}>
        <nav className={styles.menu}>
          <ul>
            <li className={renderComponents === 0 && styles.active} onClick={() => setRenderComponents(0)}>
              <i class="fa-regular fa-circle-user"></i>
              <span> Meus Detalhes</span>
            </li>
            <li className={renderComponents === 1 && styles.active} onClick={() => setRenderComponents(1)}>
              <i class="fa-solid fa-location-dot"></i>
              <span>Meus Endereços</span>
            </li>
            <li className={renderComponents === 2 && styles.active} onClick={() => setRenderComponents(2)}>
              <i class="fa-solid fa-bag-shopping"></i>
              <span>Meus pedidos</span>
            </li>
          </ul>
        </nav>
        <div className={styles.container_info}>
          {renderComponents === 0 && <MyDetails />}
          {renderComponents === 2 && <MyOrders />}
        </div>
      </section>
    </div>
  );
};

export default MyAccount;
