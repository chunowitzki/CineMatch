import React from 'react'

const NextButton = () => {
  return (
    <div className="border-t border-reel-line px-6 pt-4 pb-8">
  <button className="w-full cursor-pointer rounded-xs bg-reel-cream py-5 font-mono text-[13px] font-bold tracking-[0.3em] text-reel-ink uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40">
    Next Reel
  </button>
</div>
  )
}

export default NextButton