import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='p-2 bg-slate-200 flex justify-center items-center'>
      <Image src="/images/Logo.png"width={150} height={150} alt=''/>
    </div>
  )
}

export default Header
