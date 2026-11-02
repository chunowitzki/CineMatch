import React from 'react'

type MovieCardProps = {
  title: string;
  description: string;
  platform: string;
  year: string;
  image: string;
};
const MovieCard = ({ title, description, platform, year, image }: MovieCardProps) => {
  return (
    <div className="border border-reel-gold bg-panel">
        <div className='relative h-[300px] overflow-hidden bg-reel-'>

        <img src={image} alt="Movie Poster" className="w-full h-full object-contain" />
        </div>
        <div className="p-4">
            <h2 className="max-w-[250px] text-[34px] leading-[1] text-reel-gold">{title}</h2>
            <div className="mt-3 mb-3 flex items-center gap-2 text-[13px]">
            <span className="text-reel-muted">{platform}</span>
            <span aria-hidden="true" className="text-reel-muted">|</span>
            <span className="text-reel-muted">{year}</span>
            </div>
            <p className="text-sm text-reel-cream italic">{description}</p>
            
        </div>

        <div className="mt-4 flex items-start justify-center gap-7">
  <button type="button" className="group flex flex-col items-center gap-2">
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
    </div>
  )
}
  
  


export default MovieCard