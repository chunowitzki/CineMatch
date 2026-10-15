import React from 'react'

const OptionCard = ({ title, blurb, id, isClicked, handleClick }: { title: string; blurb: string; id: string; isClicked: boolean; handleClick: (id: string) => void }) => {
  return (
     <button
    type="button"
    aria-pressed={isClicked}
    onClick={() => handleClick(id)}
    className={`flex min-h-23 cursor-pointer flex-col justify-between rounded-[5px] border p-4 text-left min-w-0 ${
    isClicked
    ? "border-reel-gold bg-reel-gold text-reel-ink"
    : "border-reel-cream text-reel-cream"
    }`}
  >
    <span className="font-serif text-[20px]/tight">{title}</span>
    <span className="mt-1 font-mono text-[11px]/snug">{blurb}</span>
  </button>
  )
}

export default OptionCard
