import React from 'react'
import Image from 'next/image'

type PropType = {
  selected: boolean
  index: string
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <Image
        onClick={onClick}
        alt={index}
        src={index}
        width={50}
        height={50}
        className="embla-thumbs__slide__number"
      />
      {/* <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        
      </button> */}
    </div>
  )
}
