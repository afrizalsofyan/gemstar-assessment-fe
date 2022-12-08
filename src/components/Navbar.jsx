import SearchIcon from '../assets/icons/search-icn.svg'
import LogoutIcon from '../assets/icons/logout-icn.svg'
import BurgerMenu from '../assets/icons/humberger-menu-icn.svg'

const Navbar = () => {
  return (
    <header className='bg-white h-65 custom-shadow px-9 flex items-center justify-between'>
      <div className='flex gap-3 text-[#A1A1A1] w-9/12'>
        <img src={SearchIcon} alt='search' />
        <input placeholder='Search anything here ... ' className='w-full outline-none text-sm' />
      </div>
      <div className='flex gap-6'>
        <div className='flex gap-2' onClick={() => console.log('logout')} aria-hidden='true'>
          <img src={LogoutIcon} alt='logout' />
          <span className='font-bold text-[#EE0D0D] text-base'>Logout</span>
        </div>
        <button type='button'>
          <img src={BurgerMenu} alt='burgermenu' />
        </button>
      </div>
    </header>
  )
}

export default Navbar

