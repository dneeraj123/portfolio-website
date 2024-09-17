import React from 'react'

const Card = (props) => {
    return (
        <div className='flex flex-col items-center w-72 h-64 sm:w-40 sm:h-40 md:w-56 md:h-56 border border-slate-300 rounded-2xl p-2'>
            {props.svg}
        </div>
    )
}

export default Card;