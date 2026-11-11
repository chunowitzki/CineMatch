import React, { useEffect } from 'react'
import {useState } from 'react'
import movie1 from "../src/assets/iconic-movies/movie1.jpg"
import movie2 from "../src/assets/iconic-movies/movie2.jpg"
import movie3 from "../src/assets/iconic-movies/movie3.jpg"
import movie4 from "../src/assets/iconic-movies/movie4.jpg"
import movie5 from "../src/assets/iconic-movies/movie5.jpg"
import movie6 from "../src/assets/iconic-movies/movie6.jpg"
import movie7 from "../src/assets/iconic-movies/movie7.jpg"
import movie8 from "../src/assets/iconic-movies/movie8.jpg"


const images = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8];


const Loading = ({}) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {

        const id = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 500)

        return () =>
            clearInterval(id)
        
    }, [index])
        
  return (
    <div className='flex flex-col items-center justify-content gap-4 p-6'>
        <h1 className="mt-3 font-serif text-[clamp(1.75rem,9vw,2.375rem)]/[1.05] tracking-tight text-reel-cream">LOADING...</h1>
        <img src={images[index]} alt="Loading" className='w-full max-w-100 aspect-square rounded-2xl shadow-lg object-cover'/>
    </div>
  )
}

export default Loading