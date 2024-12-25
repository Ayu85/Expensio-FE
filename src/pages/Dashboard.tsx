import DashBoardBody from '../components/DashBoardBody';
import Sidebar from '../components/SIdebar';
import useAuth from '../store/useAuth'

const Dashboard = () => {
  const {authUser}=useAuth()
  console.log(authUser);
  
  return (
    <div className='bg-[#1B1B1B] min-h-screen'>
      <Sidebar/>
      <DashBoardBody/>
    </div>
  )
}

export default Dashboard