import { useEffect, useState } from 'react'
import ApprovalList from '../components/ApprovalsList'
import ClientList from '../components/ClientList'
import Layout from '../components/Layout'


const Dashboard = () => {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('unloaded')
  const [error, setError] = useState(false)
  useEffect(() => {

    setStatus('loading')

    getDataAPI()

    async function getDataAPI() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10')
        const data = await response.json()
        setData(data)
        setError(false)
        setTimeout(() => {
          setStatus('loaded')
        }, 3000);
      } catch (error) {
        setError(true)
      }
    }

  }, [])
  return (
    <Layout>
      <div className='text-center sm:text-left'>
        <h1 className='font-bold text-[28px] text-black-text'>Hi Radhika, welcome back!</h1>
      </div>
      <ClientList />
      <ApprovalList data={data} status={status} error={error} />
      <div className='mt-[58px] text-right text-sm text-black-text'>
        <span>© Manning&Co. 2022</span>
      </div>
    </Layout>
  )
}

export default Dashboard
