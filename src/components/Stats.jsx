import React from 'react'
import styles from "../style"
const Stats = () => {
  return (
    <div className='flex justify-between items-center flex-wrap'>
      <p className='text-white text-[36px] w-[350px] font-poppins font-bold flex items-center'>
        3800+ <span className={`px-2 text-[20px] font-poppins text-gradient`}>ACTIVE USERS</span>
      </p>
      <p className={`${styles.paragraph} sm:block hidden`}>|</p>
      <p className='text-white text-[36px] w-[350px] font-poppins font-bold flex items-center'>
        230+ <span className={`px-2 text-[20px] font-poppins text-gradient`}>TRUSTED BY COMPANY</span>
      </p>
      <p className={`${styles.paragraph} sm:block hidden`}>|</p>
      <p className='text-white text-[36px] w-[350px] font-poppins font-bold flex items-center'>
        $230+ <span className={`px-2 text-[20px] font-poppins text-gradient`}>TRANSACTIONS</span>
      </p>
    </div>
  )
}

export default Stats