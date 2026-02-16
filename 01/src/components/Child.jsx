import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
const Child = () => {

  const {theme,setTheme} = useContext(ThemeContext)

  const clickHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='mt-4'>
      <button
        onClick={clickHandler}
        className={theme === 'light'
          ? 'px-4 py-2 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-700 transition-colors duration-200'
          : 'px-4 py-2 rounded-lg bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition-colors duration-200'}
      >
        Toggle theme
      </button>
    </div>
  )
}

export default Child
