import React, { Dispatch, SetStateAction } from 'react'
import Header from '../../components/Header'
import OptionCard from '../../components/OptionCard'
import NextButton from '../../components/NextButton';

type GenresProps = {
  selectedGenres: string[];
  setSelectedGenres: Dispatch<SetStateAction<string[]>>;
};
const Genres = ({ selectedGenres, setSelectedGenres }: GenresProps) => {
    const genres = [
        { id: "action", title: "Action", blurb: "Explosions and adrenaline." },
        { id: "comedy", title: "Comedy", blurb: "Laughs and lightheartedness." },
        { id: "drama", title: "Drama", blurb: "Emotional and thought-provoking." },
        { id: "horror", title: "Horror", blurb: "Scares and suspense." },
        { id: "romance", title: "Romance", blurb: "Love and relationships." },
        { id: "sci-fi", title: "Sci-Fi", blurb: "Futuristic and imaginative." },
        { id: "thriller", title: "Thriller", blurb: "Tension and excitement." },
        { id: "documentary", title: "Documentary", blurb: "Real-life stories and facts." },
    ];

      function handleOptionClick(id: string) {
        if (selectedGenres.includes(id)) {
            setSelectedGenres(selectedGenres.filter((genreId) => genreId !== id));
        } else {
            setSelectedGenres([...selectedGenres, id]);
        }

        console.log(selectedGenres)
    }

  return (
    <div className="flex h-dvh flex-col bg-reel-bg">
        <div className="flex-1 overflow-y-auto px-6 pt-14">
        <Header />
        <h2 className="mt-3 font-serif text-[38px]/[1.05] tracking-tight text-reel-cream">
            What kind of vibe are you in the mood for tonight?
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-3">
            {genres.map((genre) => (
                <OptionCard key={genre.id} title={genre.title} blurb={genre.blurb} id={genre.id} handleClick={()=> handleOptionClick(genre.id)}/>
            ))}
        </div>
        </div>
        <NextButton />

    </div>
  )
}

export default Genres