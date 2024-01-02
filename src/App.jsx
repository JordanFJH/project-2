import MainPage from './pages/MainPage'
import SagePage from './pages/SagePage'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='sage' element = {<SagePage />} />
      </Routes>
    </div>
  )
}

export default App
