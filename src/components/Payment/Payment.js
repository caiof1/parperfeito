import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";

import Loading from "../Loading/Loading";

// TEST-e1d8cdde-57bf-4457-8e99-dc32a0684aac
// APP_USR-1f6eb8ac-b18e-48f0-b463-a63c6a5143c6
initMercadoPago("TEST-e1d8cdde-57bf-4457-8e99-dc32a0684aac");

const Payment = ({value}) => {
  const [api, setAPI] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3001/payment/" + value);
        const data = await res.json();
        setAPI(data);
        setLoading(false);
        return data;
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchApi();
  }, []);

  return (
    <div>
      {api ? <Wallet initialization={{ preferenceId: api.id }} /> : <Loading />}
    </div>
  );
};

export default Payment;
