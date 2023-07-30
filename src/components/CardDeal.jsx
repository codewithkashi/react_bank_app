import {card, apple, google} from "../assets"
import styles from "../style"
import {Buttons} from "./imports"
const CardDeal = () => (
      <div className={`${styles.flexCenter} ${styles.boxWidth}  mt-14 flex-col-reverse sm:flex-row`} id="clients">
          <div>
            <p className={styles.heading2}>Find a better card deal
in few easy steps.</p>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum facilis veritatis officia suscipit pariatur sed doloribus ab.</p>
            
              <Buttons styles="mt-10"/>
          </div>
          <div className={styles.flexCenter}>
            <img src={card} className={`h-[80%] w-[80%]`}/>
          </div>
      </div>
    )

export default CardDeal