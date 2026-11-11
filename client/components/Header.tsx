import React, { JSX } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";



const Header = ({ handleBack }: { handleBack: () => void }): JSX.Element => {
  return (
    <div className='flex items-center gap-4 mb-10'>
  
    <button className='text-reel-muted flex items-center gap-1 justify-self-start leading-none mt-1' onClick={handleBack}>
      <IoIosArrowRoundBack />
      Back
    </button>
   
    <h1 className='text-reel-gold font-playfair text-3xl sm:text-4xl ml-6 sm:ml-10 leading-none' >CineMatch</h1>
    </div>
  )
}

export default Header