import React from 'react'

type MovieCardProps = {
  title: string;
  description: string;
  platform: string;
  year: string;
  image: string;
 
};
const MovieCard = ({ title, description, platform, year, image,  }: MovieCardProps) => {
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

        
    </div>
  )
}
  
  


export default MovieCard