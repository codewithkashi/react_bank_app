
import {bill, apple, google} from "../assets"
import styles from "../style"
const Billing = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.boxWidth} flex-col sm:flex-row`} id="product">
        <div  className={styles.flexCenter}>
          <img src={bill} className={`h-[100%] w-[100%]`}/>
        </div>
        <div>
          <p className={styles.heading2}>Easily Control Your Billing and Invoicing</p>
          <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum facilis veritatis officia suscipit pariatur sed doloribus ab.</p>
          <div className={`${styles.flexCenter} mt-12`}>
            <img src={apple} className={`sm:mx-4 mx-2`}/>
            <img src={google} className={`sm:mx-4 mx-2`}/>
          </div>
        </div>
    </div>
  )
}

export default Billing