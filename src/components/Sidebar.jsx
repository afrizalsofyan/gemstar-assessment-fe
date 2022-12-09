import { useState } from 'react'
import BrandLogo from '../assets/icons/company-logo.svg'
import { ApprovalIcon, ClientIcon, CogEditIcon, DashboardIcon } from './DynamicIcon'
import UserProfile from '../assets/images/user_example.png'
import { UserCard } from './Card'

const Sidebar = () => {
  const [active, setActive] = useState(1)
  //sidebar menu
  const activeColor = '#1E67AF'
  const menuSideBar = [
    {
      key: 'navigation',
      menus: [
        { id: 1, icon: <DashboardIcon color={active === 1 ? activeColor : null} />, name: 'dashboard' },
        { id: 2, icon: <ApprovalIcon color={active === 2 ? activeColor : null} />, name: 'approvals' }
      ]
    },
    {
      key: 'my account',
      menus: [
        { id: 3, icon: <ClientIcon color={active === 3 ? activeColor : null} />, name: 'my clients' },
        { id: 4, icon: <CogEditIcon color={active === 4 ? activeColor : null} />, name: 'edit profiles' }
      ]
    }
  ]

  return (
    <aside className='w-1/5 min-h-screen bg-white flex flex-col custom-shadow'>
      <div className='hidden sm:flex h-[70px] bg-blue-primary items-center px-5 lg:pl-6 lg:pr-0'>
        <img src={BrandLogo} alt='brand-logo' />
      </div>
      <div className='px-2 sm:px-0 sm:mx-30 mt-6 sm:mt-[59px]'>
        <UserCard imgSrc={UserProfile} name='radhika dhawan puri' jobRole='Senior Client Services' />
        <hr className='border border-[#DCDCDC] my-7' />
        {menuSideBar.map((e) => {
          return (
            <div key={e.key}>
              <div className='pb-4 w-full truncate'>
                <span className='uppercase text-11 tracking-normal sm:tracking-spacing-0.16'>{e.key}</span>
              </div>
              {e.menus.map((menu, index) => {
                return (
                  <div key={menu.name + ' ' + menu.id}>
                    <div className={`${index === e.menus.length - 1 ? 'pb-7' : 'pb-3'} flex gap-3 items-center justify-center sm:justify-start hover:opacity-75 cursor-pointer`} onClick={() => setActive(menu.id)} aria-hidden='true'>
                      <div className='w-[22px] h-[22px] flex items-center justify-center'>
                        {menu.icon}
                      </div>
                      <span className={`${active === menu.id ? 'active' : ''} capitalize font-bold hidden sm:flex`}>{menu.name}</span>
                    </div>
                    {menu.id === 2 ? (
                      <hr className='border border-[#DCDCDC] my-7' />
                    ) : null}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </aside>
  )
}
export default Sidebar
