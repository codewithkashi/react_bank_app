import React from 'react'
import styles from "../style"
import {discount, robot} from "../assets/index"
import GetStarted from "./GetStarted"
const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} className='h-[32px] w-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> FOR ONE MONTH {" "}<span className='text-white'>ACCOUNT </span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className={`text-white font-semibold flex-1 font-poppins ss:text-[72px] ss:leading-[100px] text-[52px] leading-[75px]`}>
            The Next {" "}
            <br className='sm:block hidden'/> 
            <span className='text-gradient'>Generation</span>
            <br className='sm:block hidden'/> 
            {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted/>
          </div>
        </div>
        <h1 className={`text-white font-semibold font-poppins ss:text-[68px] ss:leading-[100px] text-[52px] leading-[75px] w-full`}>
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis fugiat unde voluptatum! Voluptates sunt ullam, nostrum odit quod aut?</p>
      </div>
      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="" className='w-full h-full z-[5] relative'/>
        <div className={`absolute w-[40%] h-[35%] pink__gradient top-0 z-[0]`}/>
        <div className={`absolute w-[80%] h-[80%] rounded-full bottom-40 white__gradient top-0 z-[1]`}/>
        <div className={`absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient top-0 z-[3]`}/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  ) 

export default Hero