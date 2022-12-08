import TitleContent from './TitleContent'
import DBSLogo from '../assets/images/DBS-Logo-plain.png'
import MoreIcon from '../assets/icons/more-option-icn.svg'

const ClientList = () => {
  return (
    <section className='mt-11'>
      <TitleContent title='Your client list' subtitle='You currently servicing 3 clients' />
      <div className='flex justify-between'>
        <div className='w-[259px] h-[194px] bg-white custom-shadow rounded-md py-2 pl-7 pr-3 text-black-text'>
          <div className='flex justify-between items-start'>
            <div className='mt-4'>
              <img src={DBSLogo} alt='dbs' />
            </div>
            <button type='button'>
              <img src={MoreIcon} alt='more' />
            </button>
          </div>
          <div className='flex flex-col'>
            <h4 className='mt-4 mb-[6px]'>DBS Bank</h4>
            <p className='text-11'>DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientList