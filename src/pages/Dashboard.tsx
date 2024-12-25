import HomeDashboard from '../components/HomeDashboard';
import Sidebar from '../components/SIdebar';
import useAuth from '../store/useAuth'

const Dashboard = () => {
  const {authUser}=useAuth()
  console.log(authUser);
  
  return (
    <div className='bg-[#1B1B1B] min-h-screen flex'>
      <Sidebar/>
      <HomeDashboard/>
    </div>
  )
}

export default Dashboard