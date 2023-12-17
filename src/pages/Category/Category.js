import styles from './Category.module.css'

import banner1 from '../../images/banner_principal.png'
import AllProducts from '../../components/AllProducts/AllProducts'
import { useFetchDocs } from '../../hooks/useFetchDocs'

import bannerPresente from '../../images/bannerPresente.png'

const Category = ({setIsHeader}) => {

  const {documents} = useFetchDocs("products")

  setIsHeader(true)

  return (
    <div className={`${styles.category} center`}>
      <div className={styles.banner}>
        <img src={bannerPresente} alt="" />
      </div>
      <AllProducts documents={documents} />
    </div>
  )
}

export default Category