import SearchIcon from '../assets/icons/search-icn.svg'
import LogoutIcon from '../assets/icons/logout-icn.svg'
import BurgerMenu from '../assets/icons/humberger-menu-icn.svg'

const Navbar = () => {
  return (
    <header className='bg-white py-[23px] custom-shadow px-9 flex flex-col sm:flex-row items-center justify-between gap-7 sm:gap-0'>
      <div className='flex gap-3 text-[#A1A1A1] w-9/12'>
        <img src={SearchIcon} alt='search' />
        <input placeholder='Search anything here ... ' className='w-full outline-none text-sm' />
      </div>
      <div className='flex gap-6'>
        <div className='flex items-center gap-2 hover:opacity-75 cursor-pointer' onClick={() => console.log('logout')} aria-hidden='true'>
          <div className='w-[25px]'>
            <img src={LogoutIcon} alt='logout' />
          </div>
          <span className='hidden md:flex font-bold text-[#EE0D0D] text-base'>Logout</span>
        </div>
        <button type='button' className='w-[25px]'>
          <img src={BurgerMenu} alt='burgermenu' />
        </button>
      </div>
    </header>
  )
}

export default Navbar

