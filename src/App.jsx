import { Route, Routes} from 'react-router-dom';
import Images from './pages/Images';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css'

function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='Images' element={<Images></Images>}></Route>
      </Routes>
    </>
  )
}

export default App
