import { TodoProvider } from './context/TodoProvider'
import TodoComponent from './components/TodoComponent'
function App() {

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <TodoProvider>
        <TodoComponent />
      </TodoProvider>
    </main>
  )
}

export default App
