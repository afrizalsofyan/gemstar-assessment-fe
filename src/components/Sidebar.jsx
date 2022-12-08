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
    <aside className='w-1/4 min-h-screen bg-white flex flex-col custom-shadow'>
      <div className='h-65 bg-blue-primary flex items-center pl-6'>
        <img src={BrandLogo} alt='brand-logo' />
      </div>
      <div className='mx-30 mt-[59px]'>
        <UserCard imgSrc={UserProfile} name='radhika dhawan puri' jobRole='Senior Client Services' />
        <hr className='border border-[#DCDCDC] my-7' />
        {menuSideBar.map((e) => {
          return (
            <div key={e.key}>
              <div className='pb-4'>
                <span className='uppercase text-11 tracking-spacing-0.16 '>{e.key}</span>
              </div>
              {e.menus.map((menu, index) => {
                return (
                  <div key={menu.name + ' ' + menu.id}>
                    <div className={`${index === e.menus.length - 1 ? 'pb-7' : 'pb-3'} flex gap-3 items-center hover:opacity-75 cursor-pointer`} onClick={() => setActive(menu.id)} aria-hidden='true'>
                      {menu.icon}
                      <span className={`${active === menu.id ? 'active' : ''} capitalize font-bold`}>{menu.name}</span>
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
