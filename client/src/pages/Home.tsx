import React, { JSX } from 'react'

const Home = (): JSX.Element => {
  return (
    <>
        <h1 className='text-gold font-playfair title' >CineMatch</h1>
        <p className='text-white font-newsreader'>Answer a few questions to find your perfect match!</p>
        <button className='text-white font-newsreader bg-red startBtn'>Find your next flick!</button>
    </>
  )
}

export default Home