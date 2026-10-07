import React, { Dispatch, SetStateAction } from 'react'
import NextButton from '../../components/NextButton'
import Header from '../../components/Header'
import OptionCard from '../../components/OptionCard'

type StreamingProps = {
  selectedStreaming: string[];
  setSelectedStreaming: Dispatch<SetStateAction<string[]>>;
};

const Streaming = ({ selectedStreaming, setSelectedStreaming }: StreamingProps) => {

    function handleOptionClick(id: string) {
        if (selectedStreaming.includes(id)) {
            setSelectedStreaming(selectedStreaming.filter((streamingId) => streamingId !== id));
        } else {
            setSelectedStreaming([...selectedStreaming, id]);
        }

        console.log(selectedStreaming)
    }

    
    const streamingServices = [
        { id: "netflix", title: "Netflix", blurb: "Stream your favorite shows." },
        { id: "hulu", title: "Hulu", blurb: "Catch up on the latest episodes." },
        { id: "disney", title: "Disney+", blurb: "Magical movies and series." },
        { id: "prime", title: "Amazon Prime Video", blurb: "A world of entertainment." },
        { id: "hbo", title: "HBO Max", blurb: "Premium content and originals." },
        { id: "apple", title: "Apple TV+", blurb: "Exclusive shows and films." },
        { id: "peacock", title: "Peacock", blurb: "Stream NBCUniversal content." },
        { id: "paramount", title: "Paramount+", blurb: "Movies, shows, and live TV." },
    ];
  return (
    <div className="flex h-dvh flex-col bg-reel-bg">
        <div className="flex-1 overflow-y-auto px-6 pt-14">
        <Header />
        <h2 className="mt-3 font-serif text-[38px]/[1.05] tracking-tight text-reel-cream">
            Who is watching with you tonight?
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-3">
            {streamingServices.map((a) => (
                <OptionCard key={a.id} title={a.title} blurb={a.blurb} id={a.id} handleClick={() => handleOptionClick(a.id)} />
            ))}
        </div>
        </div>
        <NextButton />

    </div>
  )
}

export default Streaming