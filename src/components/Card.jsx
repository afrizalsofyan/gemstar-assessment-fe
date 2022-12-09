import MoreIcon from '../assets/icons/more-option-icn.svg'

export const UserCard = ({ imgSrc, name, jobRole }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <img src={imgSrc} alt='img-user' />
      </div>
      <div className='flex flex-col capitalize'>
        <span className='font-bold text-base text-black-text'>{name}</span>
        <span className='font-normal text-sm text-black-text'>{jobRole}</span>
      </div>
    </div>
  )
}


export const CartClientList = ({ logoClient, clientName, clientDetail }) => {
  return (
    <div className='w-[259px] bg-white custom-shadow rounded-md py-2 pl-7 pr-3 text-black-text flex flex-col gap-4'>
      <div className='flex justify-between items-start'>
        <div className='mt-4 h-7'>
          <img src={logoClient} alt='dbs' />
        </div>
        <button type='button'>
          <img src={MoreIcon} alt='more' />
        </button>
      </div>
      <div className='flex flex-col mb-2'>
        <h4 className='mt-4 mb-[6px] font-bold text-base'>{clientName}</h4>
        <p className='text-11'>{clientDetail}</p>
      </div>
    </div>
  )
}