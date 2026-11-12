import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import MovieCard from '../../components/MovieCard.js';



type Props = {
  recommendations: any[];
  loading: boolean;
  error: string | null;
  setSelectedStreaming: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedAttendance: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedFeeling: React.Dispatch<React.SetStateAction<string[]>>;
  setRecommendations: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function Results({ recommendations, loading, error, setSelectedStreaming, setSelectedGenres, setSelectedAttendance, setSelectedFeeling, setRecommendations }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false)
  const navigate = useNavigate();

  if (error) return <p>{error}</p>;

  const current = recommendations[currentIndex];
 
  function handleNotLike() {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }
  console.log('Recommendations:', recommendations); // Log the recommendations to the console

  function handleStartOver() {
    setSelectedStreaming([]);
    setSelectedGenres([]);
    setSelectedAttendance([]);
    setSelectedFeeling([]);
    setRecommendations([]);
    setCurrentIndex(0);
    setLiked(false)
  }

  function handleLike() {
    setLiked(true)

  }
  return (
    <div className={`flex flex-1 flex-col flex- h-dvh transition-colors duration-500 ${liked ? "bg-reel-gold/90" : ""}`}>
      <header className="mx-auto mb-8 flex w-full flex-col items-center gap-3 pt-8 text-center">
      {liked ? (
        <>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-reel-bgRed text-3xl text-reel-gold">
            ♥
          </span>
          <h1 className="font-heading text-5xl uppercase tracking-wide text-reel-bgRed/80">
            It&apos;s a match!
          </h1>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-reel-bgRed/80">
            Your pick for tonight
          </span>
        </>
      ) : (
        <span className="text-xl tracking-[0.35em] text-reel-gold">
          TONIGHT&apos;S PICKS
        </span>
      )}

      <div className={`mt-1 h-px w-24 bg-gradient-to-r from-transparent to-transparent ${liked ? "via-reel-ink" : "via-reel-gold"}`} />
    </header>

      {current ? (
        <>
        <div className={liked ? "mx-4 bg-reel-bgRed shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-4 ring-reel-ink" : ""}>
          <MovieCard key={current.id} title={current.title} description={current.overview} platform={current.platform} year={current.year} image={current.posterUrl}  />
        </div>
        {!liked && (
          <div className="mt-4 flex items-start justify-center gap-7">
            <button type="button" className="group flex flex-col items-center gap-2" onClick={() => {handleNotLike()}}>
              <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-reel-red text-2xl text-reel-red transition group-hover:bg-gold/10 group-active:scale-95">
                ✕
              </span>
                <span className="text-[11px] tracking-[0.2em] text-reel-muted">PASS</span>
          </button>



          <button type="button" className="group flex flex-col items-center gap-2" onClick={handleLike}>
            <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-reel-gold text-2xl text-reel-line shadow-glow transition group-hover:brightness-110 group-active:scale-95">
              ♡
            </span>
            <span className="text-[11px] tracking-[0.2em] text-reel-muted">SAVE</span>
          </button>
        </div>)}
        </>
      ) : (
            <div className="flex mx-auto max-w-xs flex-col items-center justify-center gap-3 rounded-2xl border border-reel-line px-8 py-10 text-center">
              <span className="text-3xl text-reel-gold">🎬</span>
              <p className="font-medium text-reel-gold">That&apos;s a wrap</p>
              <p className="text-sm text-reel-gold/80">
                You&apos;ve seen all your recommendations for now.
              </p>
          </div>
      )}

       <div className={`mt-10 flex w-full justify-center pb-8 ${liked ? "bg-reel-gold/90" : ""}`}>
  <Link
    to="/"
    onClick={handleStartOver}
    className={`rounded-full border px-8 py-3 text-sm tracking-[0.25em] transition ${
      liked
        ? "border-reel-bgRed bg-reel-bgRed text-reel-gold hover:opacity-90"
        : "border-reel-muted/40 text-reel-muted hover:border-reel-gold hover:text-reel-gold"
    }`}
  >
    START OVER
  </Link>
</div>
    </div>
  );
}