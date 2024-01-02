import MainPage from './pages/MainPage'
import SagePage from './pages/SagePage'
import SageResults from './pages/SageResults'
import SynMatchPage from './pages/SynMatchPage'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='sage' element = {<SagePage />} />
        <Route path='sageresult' element = {<SageResults />} />
        <Route path='synmatch' element = {<SynMatchPage />} />
      </Routes>
    </div>
  )
}

export default App
