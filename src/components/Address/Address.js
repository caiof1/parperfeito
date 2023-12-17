// CSS
import { useFetchAPICep } from "../../hooks/useFetchAPICep";
import styles from "./Address.module.css";

// hooks
import { useEffect, useState } from "react";

// components
import Loading from "../Loading/Loading";

const Address = ({ setAddrress, addrress, setAcess, documents }) => {
  const { searchCEP, loading } = useFetchAPICep();

  const [cep, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [bairro, setBairro] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");

  const [returnCEP, setReturnCEP] = useState();

  const [error, setError] = useState("");

  const handleCEP = async (e) => {
    setCEP(e.target.value);
    setReturnCEP("");
    if (e.target.value.length === 8 && !e.target.value.includes("-")) {
      setReturnCEP(await searchCEP(e.target.value));
    } else if (e.target.value.length > 8 && e.target.value.includes("-")) {
      setReturnCEP(await searchCEP(e.target.value));
    }
  };

  useEffect(() => {
    if (returnCEP) {
      setAddress(returnCEP.logradouro);
      setBairro(returnCEP.bairro);
      setCity(returnCEP.localidade);
      setState(returnCEP.uf);
    }
  }, [returnCEP]);

  useEffect(() => {
    const fetchCEP = async () => {
      if (addrress) {
        setCEP(addrress.cep);
        setAddress(addrress.address);
        setBairro(addrress.bairro);
        setCity(addrress.city);
        setNumber(addrress.number);
        setState(addrress.state);
        setComplement(addrress.complement);
      }
    };

    fetchCEP();
  }, [addrress]);

  useEffect(() => {
    setCEP(documents[0]?.cep);
    setAddress(documents[0]?.adress);
    setBairro(documents[0]?.bairro);
    setCity(documents[0]?.city);
    setNumber(documents[0]?.number);
    setState(documents[0]?.state);
    setComplement(documents[0]?.complement);
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setAddrress({
      cep,
      address,
      bairro,
      state,
      city,
      number,
      complement: complement ? complement : "",
    });

    setAcess(2);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.cep}>
        <input
          type="text"
          required
          placeholder="CEP"
          value={cep}
          onChange={handleCEP}
        />
      </div>

      <section className={styles.address_bairro}>
        <div className={styles.address}>
          <input
            type="text"
            required
            placeholder="Endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.bairro}>
          <input
            type="text"
            required
            placeholder="Bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </div>
      </section>
      <div className={styles.state}>
        <input
          type="text"
          required
          placeholder="Estado"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <section className={styles.city_number}>
        <div className={styles.city}>
          <input
            type="text"
            required
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={styles.number}>
          <input
            type="text"
            required
            placeholder="Número"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </section>
      <div className={styles.complement}>
        <input
          type="text"
          placeholder="Complemento"
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />
      </div>
      {error && <span className="error">{error}</span>}
      <div className={styles.divbtn}>
        <button className={styles.btn}>Ir para Pagamento</button>
      </div>

      {loading && <Loading />}
    </form>
  );
};

export default Address;
