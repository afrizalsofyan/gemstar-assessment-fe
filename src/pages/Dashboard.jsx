import ApprovalList from '../components/ApprovalsList'
import ClientList from '../components/ClientList'
import Layout from '../components/Layout'


const Dashboard = () => {
  return (
    <Layout>
      <div>
        <h1 className='font-bold text-[28px] text-black-text'>Hi Radhika, welcome back!</h1>
      </div>
      <ClientList />
      <ApprovalList />
      <div className='mt-[58px] text-right text-sm text-black-text'>
        <span>© Manning&Co. 2022</span>
      </div>
    </Layout>
  )
}

export default Dashboard
