import NavigationBar from '../../components/NavigationBar'
import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <NavigationBar/>
      <Outlet/>
    </div>
  )
}

export default HomePage
