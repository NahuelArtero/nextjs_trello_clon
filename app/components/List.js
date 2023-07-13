import React from 'react'

const List = ( { children, title }) => {
  return (
    <div className='p-4 bg-slate-400 rounded-xl flex-1' >
      <h2 className='text-gray-900 font-bold mb-3'>{title}</h2>
      <div className='flex flex-col gap-4'>
      {children}
      </div>
    </div>
  )
}

export default List
