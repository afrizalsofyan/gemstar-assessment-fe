import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import BrandLogo from '../assets/icons/company-logo.svg'

const Layout = ({ children }) => {
  return (
    <section className='bg-[#F5F6FA] min-h-screen flex flex-col'>
      <div className='flex sm:hidden h-65 bg-blue-primary items-center justify-center'>
        <img src={BrandLogo} alt='brand-logo' />
      </div>
      <section className='flex'>
        <Sidebar />
        <main className='w-4/5'>
          <Navbar />
          <div className='p-[33px]'>
            {children}
          </div>
        </main>
      </section>
    </section>
  )
}

export default Layout
