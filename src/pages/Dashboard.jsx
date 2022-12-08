import ClientList from '../components/ClientList'
import Layout from '../components/Layout'


const Dashboard = () => {
  return (
    <Layout>
      <div>
        <h1 className='font-bold text-[28px] text-black-text'>Hi Radhika, welcome back!</h1>
      </div>
      <ClientList />
    </Layout>
  )
}

export default Dashboard
