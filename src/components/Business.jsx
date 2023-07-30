import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Buttons"
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`${styles.flexCenter} my-4 feature-card p-4 rounded-xl`}>
    <div className=" mr-6 bg-black rounded-full p-2">
      {<img src={icon} className="w-[50%px] h-[50%px] object-contain" />}
    </div>
      <div>
        <p className={`text-[24px] text-white font-poppins`}>{title}</p>
        <p className={`${styles.paragraph}`}>{content}</p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>We do the Business,<br className="sm:block hidden" /> We'll handle the Money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis illo fugit, natus quam ullam incidunt quia, sunt ratione quae harum unde itaque amet dignissimos.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business