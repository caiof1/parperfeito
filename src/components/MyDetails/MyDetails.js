// CSS
import { useUpdateDoc } from "../../hooks/useUpdateDoc";
import Loading from "../Loading/Loading";
import styles from "./MyDetails.module.css";

// hooks
import { useEffect, useState } from 'react'

const MyDetails = ({documents, setTimeMessage, setType, setMessage}) => {

  const [name, setName] = useState('')
  const [sobrename, setSobrename] = useState('')
  const [cpf, setCPF] = useState('')
  const [phone, setPhone] = useState('')

  const [error, setError] = useState('')

  const { updateDocs, loading, acess} = useUpdateDoc('users')

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    if(documents[0].name === name && documents[0].sobrename === sobrename && documents[0].cpf === cpf && documents[0].phone === phone) {
      setError('Altere algo para salvar!')
      return
    }

    documents[0].name = name
    documents[0].subName = sobrename ? sobrename : ""
    documents[0].cpf = cpf
    documents[0].phone = phone

    console.log(documents[0])

    updateDocs(documents[0].id, documents[0])

    // Message Alert config
    setTimeMessage(true)
    setType('sucess')
    setMessage('Dados atualizados')
  }

  useEffect(() => {
    setName(documents[0]?.name)
    setSobrename(documents[0]?.subName)
    setCPF(documents[0]?.cpf)
    setPhone(documents[0]?.phone)
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
            <i className="fa-solid fa-user"></i>
            <input type="text" name="" placeholder="Primeiro nome" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.second_name}>
            <i className="fa-solid fa-user"></i>
            <input type="text" name="" placeholder="Sobrenome (Opacional)" value={sobrename} onChange={(e) => setSobrename(e.target.value)} />
          </div>
        </div>
        <div className={styles.input_phone}>
          <div className={styles.cpf}>
            <i class="fa-solid fa-address-card"></i>
            <input type="text" name="" placeholder="CPF" required value={cpf} onChange={(e) => setCPF(e.target.value)} />
          </div>
          <div className={styles.phone}>
            <i className="fa-solid fa-phone"></i>
            <input type="number" name="" placeholder="Telefone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
        <div className={styles.divbtn}>
          <button className={styles.btn}>Salvar dados</button>
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

export default MyDetails;
