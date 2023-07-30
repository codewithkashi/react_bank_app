import {useState} from 'react'
import {navLinks} from "../constants"
import {logo, close, menu} from "../assets"
import "../index.css"
const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <nav  className="w-full p-6 flex justify-between items-center navbar">
      <img src={logo}className='w-24 sm:w-36' />
      <ul className='list-none hidden sm:flex justify-end items-center text-white space-x-8'>
       {navLinks.map((nav, index)=>(
        <li key={nav.id} className={`font-poppins font-bold cursor-pointer`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
        </li>
       ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} onClick={()=>setToggle((toggle)=>(!toggle))}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex justify-start space-y-2 flex-col text-white'>
       {navLinks.map((nav, index)=>(
        <li key={nav.id} className={`font-poppins font-bold cursor-pointer`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
        </li>
       ))}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar