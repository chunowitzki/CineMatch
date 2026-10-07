import React, { Dispatch, SetStateAction } from 'react'
import OptionCard from '../../components/OptionCard'
import NextButton from '../../components/NextButton';
import Header from '../../components/Header';

type FeelingProps = {
  selectedFeeling: string[];
  setSelectedFeeling: Dispatch<SetStateAction<string[]>>;
};


const Feeling = ({ selectedFeeling, setSelectedFeeling }: FeelingProps) => {
    const MOODS = [
  { id: "restless", title: "Restless", blurb: "Need a pulse." },
  { id: "melancholy", title: "Melancholy", blurb: "Rain on the window." },
  { id: "romantic", title: "Romantic", blurb: "Soft focus, low light." },
  { id: "paranoid", title: "Paranoid", blurb: "Trust no one." },
  { id: "lighthearted", title: "Lighthearted", blurb: "Wisecracks welcome." },
  { id: "contemplative", title: "Contemplative", blurb: "Something to chew on." },
  { id: "thrilled", title: "Thrilled", blurb: "Edge of the seat." },
  { id: "nostalgic", title: "Nostalgic", blurb: "Old reels, warm hiss." },
];
       function handleOptionClick(id: string) {
        if (selectedFeeling.includes(id)) {
            setSelectedFeeling(selectedFeeling.filter((feelingId) => feelingId !== id));
        } else {
            setSelectedFeeling([...selectedFeeling, id]);
        }

        console.log(selectedFeeling)
    }

  return (
    <div className="flex h-dvh flex-col bg-reel-bg">
        <div className="flex-1 overflow-y-auto px-6 pt-14">
        <Header />
        <h2 className="mt-3 font-serif text-[38px]/[1.05] tracking-tight text-reel-cream">
            How are you feeling tonight?
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-3">
            {MOODS.map((mood) => (
                <OptionCard key={mood.id} title={mood.title} blurb={mood.blurb} id={mood.id} handleClick={()=> handleOptionClick(mood.id)}/>
            ))}
        </div>
        </div>
        <NextButton />

    </div>
  )
}

export default Feeling