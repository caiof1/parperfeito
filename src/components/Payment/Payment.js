import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
initMercadoPago("APP_USR-1f6eb8ac-b18e-48f0-b463-a63c6a5143c6");

const Payment = () => {

  const [api, setAPI] = useState("")

  const fetchApi = async () => {
    const res = await fetch("https://mercadopagopayment-krgcve343-caiof1.vercel.app/payment/1")
    const data = await res.json()
    setAPI(data)
    return data
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>
      {api && (
        <Wallet initialization={{ preferenceId: api.id }} />
      )}
    </div>
  );
};

export default Payment;
