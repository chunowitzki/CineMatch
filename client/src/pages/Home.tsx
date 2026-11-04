import React, { JSX } from 'react'

const Home = ({ handleNext }: { handleNext: () => void }): JSX.Element => {
  return (
    <main className="flex flex-1 w-full flex-col px-5 pb-20 pt-15">
  <h1 className="text-center font-['Limelight'] text-[clamp(2.75rem,14vw,4.0rem)] leading-none text-[#FFC94D]">
    CineMatch
  </h1>

 
  <div className="my-auto w-full max-w-md self-center border-[6px] border-dotted border-[#FFC94D] bg-[#F8EBC4] px-4 pb-5 pt-3.5 font-['Barlow_Condensed'] text-[clamp(1rem,5.4vw,1.5rem)] font-semibold uppercase tracking-wide text-[#2A1216] outline outline-[6px] outline-[#1E0A0E]">
    <p className="whitespace-nowrap border-b-2 border-[#2A1216] pb-1 pt-2 text-center">Every night has a story.</p>
    <p className="whitespace-nowrap border-b-2 border-[#2A1216] pb-1 pt-2 text-center">Tell us yours, and we'll</p>
    <p className="whitespace-nowrap border-b-2 border-[#2A1216] pb-1 pt-2 text-center">find the picture to match.</p>
  </div>

 
  <button className="h-[60px] w-full bg-[#FFC94D] font-['Barlow_Condensed'] text-[22px] font-semibold text-[#2A1216] hover:bg-[#FFD872] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8EBC4]" onClick={handleNext}>
    Find your next flick
  </button>
</main>
  )
}

export default Home