import React from 'react'
import {airbnb, binance, coinbase, dropbox} from "../assets"
import styles from "../style"
const Clients = () => {
  return (
    <div className={`flex justify-between ${styles.boxWidth} flex-wrap mx-10 my-14`}>
        <img src={airbnb} className='h-[42px] my-4'/>
        <img src={binance} className='h-[42px] my-4'/>
        <img src={coinbase} className='h-[42px] my-4'/>
        <img src={dropbox} className='h-[42px] my-4'/>
    </div>
  )
}

export default Clients