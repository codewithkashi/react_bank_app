import React from 'react'
import styles from "../style"
import  {feedback}  from "../constants"
import {quotes} from "../assets"
const CardSection = ({content, name, title, img})=>(
  <div className=' feature-card p-10 rounded-[20px] w-[300px] sm:w-[370px]'>
    <img src={quotes}/>
    <p className={`text-white font-poppins text-[18px] my-14`}>{content}</p>
    <div className={`flex  space-x-4`}>
      <img src={img} className='h-14 w-14'/>
      <div>
          <p className={`text-[20px] font-poppins font-semibold text-white`}>{name}</p>
          <p className={styles.paragraph}>{title}</p>
      </div>
    </div>
  </div>
)
const Testimonial = () => {
  return (
    <div>
  <div className={`${styles.flexCenter} mt-14 sm:flex-row flex-col`}>
        <p className={styles.heading2}>What People are <br className='sm:block hidden ' />
          saying about us</p>
        <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className={`${styles.flexCenter} flex-col sm:flex-row flex-wrap mt-20 justify-between`}>
        {feedback.map((fb, index) => (
          <CardSection {...fb} index={index} />

        ))}
      </div>
    </div>
  )
}

export default Testimonial