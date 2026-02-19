import './App.css'
import Card from './components/Card'
import { ThemeProvider } from './context/ThemeProvider'

function App() {

  return (
    <>
      <ThemeProvider>
          <Card />
      </ThemeProvider>         
    </>
  )
}

export default App
