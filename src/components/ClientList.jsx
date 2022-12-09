import TitleContent from './TitleContent'
import DBSLogo from '../assets/images/DBS-Logo-plain.png'
import ProudfootLogo from '../assets/images/lozenge-logo-1.png'
import RMILogo from '../assets/images/RMI-logo-1.png'
import { CartClientList } from './Card'

const ClientList = () => {
  const exampleList = [
    {
      key: 'dbs',
      name: 'DBS Bank',
      logo: DBSLogo,
      detail: 'DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.'
    },
    {
      key: 'Proudfoot',
      name: 'Proudfoot',
      logo: ProudfootLogo,
      detail: 'Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.'
    },
    {
      key: 'rmi',
      name: 'RMI',
      logo: RMILogo,
      detail: 'RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.'
    },
  ]
  return (
    <section className='mt-11'>
      <TitleContent title='Your client list' subtitle='You currently servicing 3 clients' />
      <div className='flex gap-4'>
        {exampleList.map(e => {
          return (
            <CartClientList logoClient={e.logo} clientName={e.name} clientDetail={e.detail} key={e.key} />
          )
        })}
      </div>
    </section>
  )
}

export default ClientList