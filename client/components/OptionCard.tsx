import React from 'react'

const OptionCard = ({ title, blurb, id, handleClick }: { title: string; blurb: string; id: string; handleClick: (id: string) => void }) => {
  return (
    <div className="flex min-h-[92px] flex-col justify-between rounded-[2px] border p-4 text-left text-reel-cream" id={id} onClick={() => handleClick(id)}>
      <h1>{title}</h1>
      <p>{blurb}</p>
    </div>
  )
}

export default OptionCard