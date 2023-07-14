import React from 'react'

const List = ( { children, id, textTask, handleDrop }) => {

  function handleDragOver(event){
    event.preventDefault()
  }
  return (
    <div  onDragOver={handleDragOver} onDrop={handleDrop} data-list={id} className='p-4 bg-slate-400 rounded-xl relative flex-1' >
      <h2 className='text-gray-900 font-bold mb-3'>{textTask}</h2>
      <div className='flex flex-col gap-4'>
      {children}
      </div>
    </div>
  )
}

export default List
