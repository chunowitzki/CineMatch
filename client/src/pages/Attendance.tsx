import React from 'react'
import Header from '../../components/Header'
import OptionCard from '../../components/OptionCard'
import NextButton from '../../components/NextButton'

const Attendance = () => {
    const attendance = [
        { id: "alone", title: "Alone", blurb: "Just me and the screen." },
        { id: "date", title: "Date", blurb: "A romantic evening." },
        { id: "friends", title: "Friends", blurb: "Laughter and camaraderie." },
        { id: "family", title: "Family", blurb: "Fun for all ages." },
    ];

    function handleOptionClick(id: string) {
        console.log(`Option clicked: ${id}`);
    }
  return (
    <div className="flex h-dvh flex-col bg-reel-bg">
        <div className="flex-1 overflow-y-auto px-6 pt-14">
        <Header />
        <h2 className="mt-3 font-serif text-[38px]/[1.05] tracking-tight text-reel-cream">
            Who is watching with you tonight?
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-3">
            {attendance.map((a) => (
                <OptionCard key={a.id} title={a.title} blurb={a.blurb} id={a.id} handleClick={handleOptionClick}/>
            ))}
        </div>
        </div>
        <NextButton />

    </div>
  )
}

export default Attendance