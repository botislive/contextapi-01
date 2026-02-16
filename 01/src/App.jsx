import './App.css'
import Card from './components/Card'
import { createContext,useState } from 'react'

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState('light')
 
  return (
         <div className={theme === 'light' ? 'bg-white text-black p-6 rounded-xl w-fit m-6' : 'bg-zinc-900 text-white p-6 rounded-xl w-fit m-6'}>
             <ThemeContext.Provider value={{theme,setTheme}}>
                  <Card/>
             </ThemeContext.Provider>
         </div>
  )
}

export default App
