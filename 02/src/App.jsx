
import './App.css'
import UserDetails from './components/UserDetails'
import UserForm from './components/UserForm'
import { UserProvider } from './context/UserProvider'

function App() {

  return (
    <>
          <UserProvider>
              <UserForm/>
              <UserDetails/>
          </UserProvider>
    </>
  )
}

export default App
