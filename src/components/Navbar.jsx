import React from 'react'
// import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/index.png'
import BenderaIndo from '../assets/benderaIndo.png'
import BenderaJepang from '../assets/benderaJepang.jpeg'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800'>
        <div className='flex items-center'>

            <img src={Logo} alt="" style={{ width: '50px' }}/>
            <h2 className='uppercase text-red-700 text-xl pl-2'>jkt48</h2>
        </div>

        <div className='flex items-center'>
            <img className='px-2' src={BenderaIndo} alt="" style={{ width: '50px' }} />
            <img className='px-2' src={BenderaJepang} alt=""  style={{ width: '50px' }}/>
        </div>

        <div className='flex items center'>
            <button className='px-2'>Login</button>
            <button className='px-2'>Register</button>
        </div>
    </div>
  )
}

export default Navbar