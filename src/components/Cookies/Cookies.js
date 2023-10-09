import styles from './Cookies.module.css'

const Cookies = ({setCookie}) => {

    const handleCookie = () => {
        localStorage.setItem("acceptCook", true)
        setCookie("true")
    }

  return (
    <div className={styles.cookie}>
        <div>
            <p>Nós utilizamos os cookies para personalizar anúncios, gerar dados estatísticos e garantir que você tenha a melhor experiência na Par Perfeito!.</p>
            <button onClick={handleCookie}>Entendi</button>
        </div>
    </div>
  )
}

export default Cookies