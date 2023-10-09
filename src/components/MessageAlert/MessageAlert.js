// CSS
import styles from './MessageAlert.module.css'

const MessageAlert = ({type, message, setTimeMessage}) => {

    setTimeout(() => {
        setTimeMessage(false)
    }, 4000);
    
  return (
    <div className={styles.message_alert}>
        <div className={`${styles.container} ${type === 'sucess' ? styles.sucess : styles.error}`}>
            <span>{message}</span>
            <i className={`fa-solid fa-x ${styles.close}`}></i>
        </div>
    </div>
  )
}

export default MessageAlert