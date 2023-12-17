import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useInsertDoc } from "../../hooks/useInsertDoc";

const Payment = ({ value, user, address, personal }) => {
  const [api, setAPI] = useState("");
  const [loading, setLoading] = useState(false)

  const {documents} = useFetchUser(user?.uid, "users")

  const {insertDoc} = useInsertDoc("orders")


  const createOrder = () => {


    const newOrder = {
      adress: address?.address,
      cep: address?.cep,
      bairro: address?.bairro,
      number: address?.number,
      state: address?.state,
      city: address?.city,
      complement: address?.complement ? address?.complement : "",
      products: documents[0]?.cart,
      name: personal?.name,
      phone: personal?.phone,
      cpf: personal?.cpf,
      subName: personal?.subName ? personal?.subName : "",
      status: 'Pendente',
      uid: documents[0]?.uid,
      value
    }


    console.log(newOrder)

    insertDoc(newOrder)
    
  }

  useEffect(() => {
    // TEST-e1d8cdde-57bf-4457-8e99-dc32a0684aac
    // APP_USR-1f6eb8ac-b18e-48f0-b463-a63c6a5143c6
    initMercadoPago("APP_USR-1f6eb8ac-b18e-48f0-b463-a63c6a5143c6", {locale: "pt-BR"});
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://mercadopagopayment-hg7lfigj1-caiof1.vercel.app/payment/" + value);
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
      {api ? (
        <Wallet
          initialization={{ preferenceId: api.id}}
          onSubmit={createOrder}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Payment;
