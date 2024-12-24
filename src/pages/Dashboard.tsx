import useAuth from '../store/useAuth'

const Dashboard = () => {
  const {authUser}=useAuth()
  console.log(authUser);
  
  return (
    <div>
sdadf
    </div>
  )
}

export default Dashboard