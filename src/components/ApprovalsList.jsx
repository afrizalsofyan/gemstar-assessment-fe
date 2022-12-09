import TitleContent from './TitleContent'
import AddIcon from '../assets/icons/plus-icn.svg'
import DBSLogo from '../assets/images/dbs-logo-rectangle.png'
import UserProfile from '../assets/images/user_example.png'

const ApprovalList = () => {
  const menuTable = ['Clients', 'Approval name', 'Client contact', 'Owner', 'Date issued', 'Status']
  const dummy = [1, 2, 3]
  return (
    <div className='mt-14'>
      <div className='flex justify-between'>
        <TitleContent title='Recent approvals'
          subtitle='You can find the recent on-going approvals here'
        />
        <button className='flex cursor-pointer hover:opacity-75'>
          <div className='bg-blue-primary flex gap-3 py-2 px-5 rounded-full text-white font-bold'>
            <img src={AddIcon} alt='add' />
            <span>Create new approval</span>
          </div>
        </button>
      </div>
      <div className='w-full grid grid-cols-11'>
        {menuTable.map((e, i) => {
          return (
            <div className={`${i === 0 || i === 3 ? 'col-span-1' : i === 1 ? 'col-span-3' : 'col-span-2'} flex flex-col text-black-text`} key={e + ' '}>
              <div className={`bg-white custom-shadow rounded-md py-3 ${i === 0 || i === 4 ? 'pl-4' : ''} mb-[6.5px]`}>
                <span className='text-sm'>{e}</span>
              </div>
              {dummy.map(e => (
                <div className='my-[6.5px] h-[70px] flex bg-white custom-shadow rounded-md' key={e}>
                  {i === 0 ? (
                    <div className='m-auto'>
                      <img src={DBSLogo} alt='dbs' className='object-fill' />
                    </div>
                  ) : i === 1 ? (
                    <div className='w-full pr-7 flex justify-center items-center'>
                      <p className='font-bold text-base truncate'>DBS DEG renewal energy LinkedIn post tiles</p>
                    </div>
                  ) : i === 2 ? (
                    <div className='flex items-center gap-2'>
                      <div className={'w-[23px] h-[23px] rounded-full flex justify-center text-white font-bold'} style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }} >J</div>
                      <span className='text-sm'>Jasmine</span>
                    </div>
                  ) : i === 3 ? (
                    <div className='flex items-center gap-2'>
                      <div className='w-[23px] h-[23px]'>
                        <img src={UserProfile} alt='user' />
                      </div>
                      <span className='text-sm'>Radhika</span>
                    </div>
                  ) : i === 4 ? (
                    <div className='flex items-center pl-4'>
                      <span className='text-sm'>January 23, 2022</span>
                    </div>
                  ) : i === 5 ? (
                    <div className='flex items-center'>
                      <div className='text-sm w-24 bg-yellow-400 py-1 flex items-center justify-center rounded-md'>In progress</div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )
        })}
      </div>
      <div className='mt-4'>
        <span className='font-bold text-blue-primary cursor-pointer hover:opacity-75'>See all approvals here</span>
      </div>
    </div >
  )
}

export default ApprovalList