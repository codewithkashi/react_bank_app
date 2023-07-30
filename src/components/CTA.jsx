import styles from "../style"
import Buttons from "./Buttons"
const CTA = () => {
  return (
    <div className={`bg-black-gradient-2  ${styles.padding} rounded-[20px] ${styles.flexCenter} justify-between flex-wrap`}>
      <div>
          <p className={styles.heading2}>Let’s try our service now!</p>
          <p className={`${styles.paragraph} font-poppins`}>Everything you need to accept card payments and grow <br className="sm:block hidden"/> your business anywhere on the planet.</p>
      </div>
      <Buttons styles="mt-10"/>
    </div>
  )
}

export default CTA