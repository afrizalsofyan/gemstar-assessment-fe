import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <section className='bg-[#F5F6FA] min-h-screen flex'>
      <Sidebar />
      <main className='w-4/5'>
        <Navbar />
        <div className='p-[33px]'>
          {children}
        </div>
      </main>
    </section>
  )
}

export default Layout
