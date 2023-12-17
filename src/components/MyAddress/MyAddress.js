// CSS
import { useFetchAPICep } from "../../hooks/useFetchAPICep";
import { useUpdateDoc } from "../../hooks/useUpdateDoc";
import styles from "./MyAddress.module.css";

// hooks
import { useEffect, useState } from "react";

// components 
import Loading from '../Loading/Loading'

const MyAddress = ({ documents }) => {
  const [cep, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [bairro, setBairro] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  const [error, setError] = useState('')

  const [returnCEP, setReturnCEP] = useState()

  const { searchCEP } = useFetchAPICep();

  const { updateDocs, loading, acess } = useUpdateDoc("users");

  const handleCEP = async (e) => {
    setCEP(e.target.value);
    setReturnCEP("");
    if (e.target.value.length === 8 && !e.target.value.includes("-")) {
      setReturnCEP(await searchCEP(e.target.value));
    } else if (e.target.value.length > 8 && e.target.value.includes("-")) {
      setReturnCEP(await searchCEP(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('')

    if(documents[0].cep === cep && documents[0].address === address && documents[0].bairro === bairro && documents[0].state === state && documents[0].city === city && documents[0].number === number && documents[0].complement === complement) {
        setError("Altere algo para salvar!")
        return
    }

    documents[0].cep = cep
    documents[0].adress = address
    documents[0].bairro = bairro
    documents[0].state = state
    documents[0].city = city
    documents[0].number = number
    documents[0].complement = complement ? complement : ""

    updateDocs(documents[0].id, documents[0]);
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
    setCEP(documents[0]?.cep)
    setAddress(documents[0]?.address)
    setBairro(documents[0]?.bairro)
    setState(documents[0]?.state)
    setCity(documents[0]?.city)
    setNumber(documents[0]?.number)
    setComplement(documents[0]?.complement)
  }, [documents])

  return (
    <div className={styles.details}>
      <h3 className={styles.title}>Meus detalhes</h3>
      <div className={styles.personal}>
        <h4>Informações pessoais</h4>
      </div>
      <form onSubmit={handleSubmit} className={styles.form_personal}>
        <div className={styles.input_name}>
          <div className={styles.name}>
            <input
              type="text"
              name=""
              placeholder="CEP"
              required
              value={cep}
              onChange={handleCEP}
            />
          </div>
          <div className={styles.second_name}>
            <input
              type="text"
              name=""
              required
              placeholder="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input_phone}>
          <div className={styles.cpf}>
            <input
              type="text"
              name=""
              placeholder="Bairro"
              required
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
          <div className={styles.phone}>
            <input
              type="text"
              name=""
              placeholder="Estado"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input_phone}>
          <div className={styles.cpf}>
            <input
              type="text"
              name=""
              placeholder="Cidade"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={styles.phone}>
            <input
              type="text"
              name=""
              placeholder="Número"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.complement}>
          <input
            type="text"
            name=""
            placeholder="Complemento (Opcional)"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
        </div>
        <div className={styles.divbtn}>
          <button className={styles.btn}>Salvar endereço</button>
        </div>
      </form>
      {error && (
        <div className="errordiv">
            <span className="error">{error}</span>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default MyAddress;
