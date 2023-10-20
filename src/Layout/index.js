import React from 'react'
import Header from '../Cumponents/Header'
import Sidebar from '../Cumponents/Sidebar'

const Layout = ({children}) => {
  return (
    <div className='w-full flex flex-col'>
      <div >
      <Header/>
      </div>
      <div className='flex gap-2 justify-between'>
        <div className='w-1/5'><Sidebar /></div>
      <div className='w-4/5'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
