import React from 'react'

const Button = ({onClick}) => {
  return (
    <button onClick={onClick} className='bg-primary w-full my-5 flex justify-center py-2 text-md text-white'>Next</button>
  )
}

export default Button