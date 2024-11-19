
import React from 'react'

const H1 :React.FC <{title:string}> = ({title}) => {
  return (
     <h1 className='text-3xl font-semibold text-center'>{title}</h1>
  )
}

export default H1