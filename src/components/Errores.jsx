import React from 'react'

export default function Errores({error}) {
  
  return (
    <div className='flex items-center justify-center gap-2 bg-red-100 w-auto mx-5 px-2 py-2 md:text-sm text-xs mt-3 rounded text-red-700'>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg> 
      <p>{error}</p>   
    </div>
  )
}
