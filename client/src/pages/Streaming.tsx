import React, { Dispatch, SetStateAction } from 'react'
import NextButton from '../../components/NextButton'
import Header from '../../components/Header'
import OptionCard from '../../components/OptionCard'

type StreamingProps = {
  selectedStreaming: string[];
  setSelectedStreaming: Dispatch<SetStateAction<string[]>>;
    handleNext: () => void;
    handleBack: () => void;
};

const Streaming = ({ selectedStreaming, setSelectedStreaming, handleNext, handleBack }: StreamingProps) => {

    function handleOptionClick(id: string) {
        if (selectedStreaming.includes(id)) {
            setSelectedStreaming(selectedStreaming.filter((streamingId) => streamingId !== id));
            console.log(selectedStreaming)
        } else {
            setSelectedStreaming([...selectedStreaming, id]);
            console.log(selectedStreaming)
        }

        
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
    <div className="flex flex-1 flex-col">
        <div className="flex-1 overflow-y-auto px-6 pt-14">
            <Header handleBack={handleBack}/>
            <h2 className="mt-3 font-serif text-[38px]/[1.05] tracking-tight text-reel-cream">
                Pick a streaming service 
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-3">
                {streamingServices.map((a) => (
                    <OptionCard key={a.id} isClicked={selectedStreaming.includes(a.id)} title={a.title} blurb={a.blurb} id={a.id} handleClick={() => handleOptionClick(a.id)} />
                ))}
            </div>
        </div>
        <NextButton handleNext={handleNext} disabled={selectedStreaming.length === 0}/>

    </div>
  )
}

export default Streaming