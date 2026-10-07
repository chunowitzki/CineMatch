import React, { JSX } from 'react'

const Header = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
    <button> Back</button>
    <h1 className='text-gold font-playfair subTitle' >CineMatch</h1>
    </div>
  )
}

export default Header