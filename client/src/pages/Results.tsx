import { Link } from 'react-router-dom';
import {useState} from 'react';
import MovieCard from '../../components/MovieCard';



type Props = {
  recommendations: any[];
  loading: boolean;
  error: string | null;
};

export default function Results({ recommendations, loading, error }: Props) {
  if (loading) return <p>Finding your recommendations...</p>;
  if (error) return <p>{error}</p>;
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = recommendations[currentIndex];

  if(!current) {
    return (
      <div>
        <Link to="/">Start over</Link>
      </div>
    );
  }
 
  function handleNotLike() {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }
  console.log('Recommendations:', recommendations); // Log the recommendations to the console

  return (
    <div>
      <h1>Your Recommendations</h1>
      {
        <MovieCard key={current.id} title={current.title} description={current.overview} platform={current.platform} year={current.year} image={current.posterUrl}  />
      }
      {current && (
        <div className="mt-4 flex items-start justify-center gap-7">
          <button type="button" className="group flex flex-col items-center gap-2" onClick={() => {handleNotLike()}}>
            <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-reel-red text-2xl text-reel-red transition group-hover:bg-gold/10 group-active:scale-95">
              ✕
            </span>
            <span className="text-[11px] tracking-[0.2em] text-reel-muted">PASS</span>
          </button>



          <button type="button" className="group flex flex-col items-center gap-2">
            <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-reel-gold text-2xl text-reel-line shadow-glow transition group-hover:brightness-110 group-active:scale-95">
              ♡
            </span>
            <span className="text-[11px] tracking-[0.2em] text-reel-muted">SAVE</span>
          </button>
        </div>
      )}
      <Link to="/">Start over</Link>
    </div>
  );
}